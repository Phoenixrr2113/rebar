// @flow

export type CacheableCategoryDefinition = {
  name: string,
  countMax: number,
  expirationDurationMs?: number,
  validityDurationMs: number,
  validityVerifier: Function,
  onDiscard?: Function,
}

export type CachedEntry = {
  createdTimeMs: number,
  expiresAtMs?: number,
  validByTimeMs: number,
  objectPromise: Promise<Object>,
  validityVerificationPromise: ?Promise<boolean>,
  creationPromise: ?Promise<Object>,
}

export type CachedEntriesForCategory = {
  definition: CacheableCategoryDefinition,
  entries: Map<string, CachedEntry>,
}
