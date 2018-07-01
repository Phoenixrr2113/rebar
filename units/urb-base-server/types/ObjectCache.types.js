// @flow

export type CacheableCategoryDefinition = {
  name: string,
  countMax: number,
  validityDurationMs: number,
  validityVerifier: Function,
}

export type CachedEntry = {
  createdTimeMs: number,
  validByTimeMs: number,
  objectPromise: Promise<Object>,
  validityVerificationPromise: ?Promise<boolean>,
  creationPromise: ?Promise<Object>,
}

export type CachedEntriesForCategory = {
  definition: CacheableCategoryDefinition,
  entries: Map<string, CachedEntry>,
}
