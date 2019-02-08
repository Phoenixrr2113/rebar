"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.setUserToken2 = setUserToken2;exports.getUserToken2 = getUserToken2;

// User token will be recorded upon startup and used when passing on client errors,
// and authenticating uploads
let UserToken2 = 'unknown';

function setUserToken2(value) {
  UserToken2 = value;
}

function getUserToken2() {
  return UserToken2;
}
//# sourceMappingURL=userToken2.js.map