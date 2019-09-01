// @flow

/**
 * Type definition for flow for async function. Use definition like:
 * let myFunction : typeof AsyncFunction = ...
 */
const AsyncFunction: Function = Object.getPrototypeOf(async function() {})
  .constructor

export default AsyncFunction
