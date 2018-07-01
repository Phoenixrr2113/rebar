// @flow

import CacheableCategoryDefinitions from '../_configuration/urb-base-server/CacheableCategoryDefinitions'

import log from './log'
import type { CachedEntriesForCategory, CachedEntry } from './types/ObjectCache.types'

const MapCachesByCategory: Map<string, CachedEntriesForCategory> = new Map()

export function initializeObjectCache() {
  for ( let definition of CacheableCategoryDefinitions ) {
    MapCachesByCategory.set( definition.name, {
      definition,
      entries: new Map(),
    })
  }
}

function cleanupCategory( cachedEntriesForCategory: CachedEntriesForCategory ) {
  console.log({ XXX: 'cleanupCategory', cachedEntriesForCategory })

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

  console.log({ XXX: 1, arrCreatedTime }) // Show what the entries are ....

  // Remove all entries that are older than cutoff time
  const cutOffTimeMs = arrCreatedTime[definition.countMax - 1]
  for ( let [ cacheKey, cachedEntry ] of entries.entries() ) {
    if ( cachedEntry.createdTimeMs < cutOffTimeMs ) {
      entries.delete( cacheKey )
    }
  }
}

export function addObjectToCache(
  categoryName: string,
  cacheKey: string,
  objectPromise: Promise<Object>,
) {
  console.log({ XXX: 'addObjectToCache', categoryName, cacheKey })

  const cachedEntriesForCategory = MapCachesByCategory.get( categoryName )
  if ( cachedEntriesForCategory == null )
    throw new Error( 'addObjectToCache: can not find cacheable category ' + categoryName )

  const { definition, entries } = cachedEntriesForCategory

  const timeMsNow = new Date().getTime()
  entries.set( cacheKey, {
    createdTimeMs: timeMsNow,
    validByTimeMs: timeMsNow + definition.validityDurationMs,
    objectPromise,
    validityVerificationPromise: null,
    creationPromise: null,
  })

  cleanupCategory( cachedEntriesForCategory )
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
  console.log({ XXX: 'getCachedEntryFromCache', categoryName, cacheKey })

  const cachedEntriesForCategory = MapCachesByCategory.get( categoryName )
  if ( cachedEntriesForCategory == null )
    throw new Error( 'getObjectFromCache: can not find cacheable category ' + categoryName )

  const { definition, entries } = cachedEntriesForCategory
  const cachedEntry = entries.get( cacheKey )

  // Entry is not present in cache ?
  if ( cachedEntry == null ) return null

  const timeMsNow = new Date().getTime()
  if ( cachedEntry.validByTimeMs >= timeMsNow ) {
    return cachedEntry
  }

  // Run the function to verify the validity of the cached entry, or wait for
  // a validity verification function that's already running
  if ( cachedEntry.validityVerificationPromise == null ) {
    try {
      cachedEntry.validityVerificationPromise = definition.validityVerifier( cacheKey, cachedEntry )
    } catch ( err ) {
      log.log( 'error', {
        source: 'getCachedEntryFromCache: validityVerificationPromise failed',
        categoryName,
        cacheKey,
        err,
      })
      throw err
    }
  }
  // TODO: Error handling with error logging!
  const isValid = await cachedEntry.validityVerificationPromise
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
  console.log({ XXX: 'getOrCreateObjectFromCahce', categoryName, cacheKey })

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
    log.log( 'error', {
      source: 'getOrCreateObjectFromCahce: creationFunction failed',
      categoryName,
      cacheKey,
      err,
    })
    throw err
  }

  // Add the promise to the cache now, so that other requests to the cache
  // for the same entry use the promise and do not kick off a second
  // creation function
  addObjectToCache( categoryName, cacheKey, newObjectPromise )

  return newObjectPromise
}
