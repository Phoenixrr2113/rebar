// @flow

import CacheableCategoryDefinitions from '../_configuration/rb-base-server/CacheableCategoryDefinitions'
import { debugWriteToConsoleObjectCacheActivity } from '../_configuration/debug'

import log from './log'
import type { CachedEntriesForCategory, CachedEntry } from './types/ObjectCache.types'

const expirationCheckInterval = 5000
let expirationIntervalTimer = null

const MapCachesByCategory: Map<string, CachedEntriesForCategory> = new Map()

export function initializeObjectCache() {
  for ( let definition of CacheableCategoryDefinitions ) {
    MapCachesByCategory.set( definition.name, {
      definition,
      entries: new Map(),
    })
  }
}

async function executeDiscard(
  cacheKey: string,
  discardFunction: Function,
  objectPromise: Promise<Object>,
) {
  try {
    await discardFunction( objectPromise )
  } catch ( err ) {
    // Record the problem and throw exception further
    log.log({
      level: 'error',
      message: 'executeDiscard failed',
      details: {
        cacheKey,
        err,
      },
    })
  }
}

async function cleanupCategory( cachedEntriesForCategory: CachedEntriesForCategory ) {
  const { definition, entries } = cachedEntriesForCategory

  // If the number if cached elements does not exceed max, no cleanup is necessary
  if ( entries.size <= definition.countMax ) return

  // Collect all the tics times
  const arrCreatedTime: Array<number> = []
  for ( let cachedEntry of entries.values() ) {
    arrCreatedTime.push( cachedEntry.createdTimeMs )
  }

  // Descending sort - newest entries come first
  arrCreatedTime.sort( ( a, b ) => b - a )

  // Remove all entries that are older than cutoff time
  const cutOffTimeMs = arrCreatedTime[definition.countMax - 1]
  for ( let [ cacheKey, cachedEntry ] of entries.entries() ) {
    if ( cachedEntry.createdTimeMs < cutOffTimeMs ) {
      // Discard if necessary. Do not wait.
      const discardFunction = definition.onDiscard
      if ( discardFunction ) {
        const objectPromise = cachedEntry.objectPromise
        executeDiscard( cacheKey, discardFunction, await objectPromise )
      }

      // Remove from map of cached objects
      entries.delete( cacheKey )
    }
  }
}

async function removeExpired() {
  if ( debugWriteToConsoleObjectCacheActivity ) logEntries( 'removeExpired - before' )

  let bPerishableItemsLeft = false

  const timeMsNow = new Date().getTime()

  for ( let cachedEntriesForCategory of MapCachesByCategory.values() ) {
    const { definition, entries } = cachedEntriesForCategory

    // If there is no expiration for the category, skip
    if ( !definition.expirationDurationMs ) continue

    const discardFunction = definition.onDiscard

    // Delete expired entries
    for ( let [ cacheKey, cachedEntry ] of entries.entries() ) {
      // $AssureFlow expiresAtMs will be present
      if ( cachedEntry.expiresAtMs < timeMsNow ) {
        // Discard if necessary. Do not wait.
        if ( discardFunction ) {
          const objectPromise = cachedEntry.objectPromise
          executeDiscard( cacheKey, discardFunction, await objectPromise )
        }

        // Remove from map of cached objects
        entries.delete( cacheKey )
      } else bPerishableItemsLeft = true
    }
  }

  // If there are no more perishable items, simply remove the timer
  if ( !bPerishableItemsLeft ) {
    // $AssureFlow expirationIntervalTimer is guaranteed to be set
    clearInterval( expirationIntervalTimer )
    expirationIntervalTimer = null
  }

  if ( debugWriteToConsoleObjectCacheActivity ) logEntries( 'removeExpired - after' )
}

export async function addObjectToCache(
  categoryName: string,
  cacheKey: string,
  objectPromise: Promise<Object>,
) {
  const cachedEntriesForCategory = MapCachesByCategory.get( categoryName )
  if ( cachedEntriesForCategory == null )
    throw new Error( 'addObjectToCache: can not find cacheable category ' + categoryName )

  const { definition, entries } = cachedEntriesForCategory

  const timeMsNow = new Date().getTime()

  const cachedEntry: CachedEntry = {
    createdTimeMs: timeMsNow,
    validByTimeMs: timeMsNow + definition.validityDurationMs,
    objectPromise,
    validityVerificationPromise: null,
    creationPromise: null,
  }

  if ( definition.expirationDurationMs ) {
    // Only start timer when first object with expiration is added. No reason to run it before
    // that.
    if ( expirationIntervalTimer == null ) {
      expirationIntervalTimer = setInterval( removeExpired, expirationCheckInterval )
    }

    cachedEntry.expiresAtMs = timeMsNow + definition.expirationDurationMs
  }

  entries.set( cacheKey, cachedEntry )

  await cleanupCategory( cachedEntriesForCategory )

  if ( debugWriteToConsoleObjectCacheActivity ) logEntries( 'addObjectToCache key=' + cacheKey )
}

export async function getObjectFromCache( categoryName: string, cacheKey: string ): ?Object {
  const cachedEntry = await getCachedEntryFromCache( categoryName, cacheKey )

  if ( cachedEntry ) {
    return await cachedEntry.objectPromise
  } else {
    return null
  }
}

async function getCachedEntryFromCache(
  categoryName: string,
  cacheKey: string,
): Promise<?CachedEntry> {
  const cachedEntriesForCategory = MapCachesByCategory.get( categoryName )
  if ( cachedEntriesForCategory == null )
    throw new Error( 'getCachedEntryFromCache: can not find cacheable category ' + categoryName )

  const { definition, entries } = cachedEntriesForCategory
  const cachedEntry = entries.get( cacheKey )

  // Entry is not present in cache ?
  if ( cachedEntry == null ) return null

  const timeMsNow = new Date().getTime()

  // Entry is in the cache
  // If the entry already has expiration, increase it since it is used
  if ( cachedEntry.expiresAtMs ) {
    const cachedEntriesForCategory = MapCachesByCategory.get( categoryName )

    // $AssureFlow our code is written in a way that definition would be present
    const { definition } = cachedEntriesForCategory

    cachedEntry.expiresAtMs = timeMsNow + definition.expirationDurationMs
  }

  if ( cachedEntry.validByTimeMs >= timeMsNow ) {
    return cachedEntry
  }

  // Run the function to verify the validity of the cached entry, or wait for
  // a validity verification function that's already running
  let isValid: boolean = false
  if ( cachedEntry.validityVerificationPromise == null ) {
    try {
      cachedEntry.validityVerificationPromise = definition.validityVerifier( cacheKey, cachedEntry )
      isValid = await cachedEntry.validityVerificationPromise
    } catch ( err ) {
      // Indicate that the entry is invalid
      cachedEntry.validityVerificationPromise = Promise.resolve( false )

      // Record the problem and throw exception further
      log.log({
        level: 'error',
        message: 'getCachedEntryFromCache: validityVerificationPromise failed',
        details: {
          categoryName,
          cacheKey,
          err,
        },
      })
      throw err
    }
  }

  cachedEntry.validityVerificationPromise = null
  if ( isValid ) {
    cachedEntry.validByTimeMs = timeMsNow + definition.validityDurationMs
    return cachedEntry
  } else {
    // Entry is present in cache, but is invalid. Delete
    entries.delete( cacheKey )
    return new Promise( () => null )
  }
}

export async function getOrCreateObjectFromCahce(
  categoryName: string,
  cacheKey: string,
  creationFunction: Function,
): Object {
  const currentCachedEntry = await getCachedEntryFromCache( categoryName, cacheKey )

  // If it is already present in cache, return
  if ( currentCachedEntry ) {
    return await currentCachedEntry.objectPromise
  }

  // Not present in cache - create
  let newObjectPromise
  try {
    newObjectPromise = creationFunction()
  } catch ( err ) {
    log.log({
      level: 'error',
      message: 'getOrCreateObjectFromCahce: creationFunction failed',
      details: {
        categoryName,
        cacheKey,
        err,
      },
    })
    throw err
  }

  // Add the promise to the cache now, so that other requests to the cache
  // for the same entry use the promise and do not kick off a second
  // creation function
  addObjectToCache( categoryName, cacheKey, newObjectPromise )

  if ( debugWriteToConsoleObjectCacheActivity ) logEntries( 'getOrCreateObjectFromCahce' )

  try {
    return await newObjectPromise
  } catch ( err ) {
    log.log({
      level: 'error',
      message: 'getOrCreateObjectFromCahce: await creationFunction failed',
      details: {
        categoryName,
        cacheKey,
        err,
      },
    })

    const cachedEntriesForCategory = MapCachesByCategory.get( categoryName )

    // $AssureFlow it is guaranteed that the category exists
    const { entries } = cachedEntriesForCategory
    entries.delete( cacheKey )

    throw err
  }
}

function logEntries( title: string ) {
  const timeMsNow = new Date().getTime()
  const values: Array<Object> = []

  for ( let cachedEntriesForCategory of MapCachesByCategory.values() ) {
    const { definition, entries } = cachedEntriesForCategory

    // Delete expired entries
    for ( let [ cacheKey, cachedEntry ] of entries.entries() ) {
      const display = {
        name: definition.name,
        key: cacheKey,
        validBy: cachedEntry.validByTimeMs,
        validByLeft: cachedEntry.validByTimeMs - timeMsNow,
        expires: 0,
        expiresLeft: 0,
      }

      if ( cachedEntry.expiresAtMs ) {
        display.expires = cachedEntry.expiresAtMs
        display.expiresLeft = cachedEntry.expiresAtMs - timeMsNow
      }

      values.push( display )
    }
  }

  console.log( title + ' @ ' + timeMsNow )
  console.table( values )
}
