// @flow

// User token will be recorded upon startup and used when passing on client errors,
// and authenticating uploads
let UserToken2 = 'unknown'

export function setUserToken2( value: string ) {
  UserToken2 = value
}

export function getUserToken2() {
  return UserToken2
}
