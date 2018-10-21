"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.debugWriteToConsoleLog = exports.debugWriteToConsoleObjectCacheActivity = exports.debugWriteToConsoleServerRequestSiteInformation = exports.debugWriteToLogServerRequestPublic = exports.debugWriteToLogServerRequestWebApp = exports.debugWriteToLogServerRequestGraphQL = exports.debugWriteToLogServerRequestAuth = void 0;

// Common file with settings that can turn on or off features in the application for debugging

// Example for logging requests that:
// { "trace" : "none" } - do not trace any requests
// { "clientIP": "127.0.0.1" } - trace requests coming from localhost
// { "user": { "User_DisplayName": "jack" } } - trace requests for user account named 'jack'

var debugWriteToLogServerRequestAuth = { trace: 'none' };exports.debugWriteToLogServerRequestAuth = debugWriteToLogServerRequestAuth;
var debugWriteToLogServerRequestGraphQL = { trace: 'none' };exports.debugWriteToLogServerRequestGraphQL = debugWriteToLogServerRequestGraphQL;
var debugWriteToLogServerRequestWebApp = { trace: 'none' };exports.debugWriteToLogServerRequestWebApp = debugWriteToLogServerRequestWebApp;
var debugWriteToLogServerRequestPublic = { trace: 'none' };exports.debugWriteToLogServerRequestPublic = debugWriteToLogServerRequestPublic;

var debugWriteToConsoleServerRequestSiteInformation = false;exports.debugWriteToConsoleServerRequestSiteInformation = debugWriteToConsoleServerRequestSiteInformation;

var debugWriteToConsoleObjectCacheActivity = false;exports.debugWriteToConsoleObjectCacheActivity = debugWriteToConsoleObjectCacheActivity;

var debugWriteToConsoleLog = false;exports.debugWriteToConsoleLog = debugWriteToConsoleLog;
//# sourceMappingURL=debug.js.map