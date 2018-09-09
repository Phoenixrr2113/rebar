// @flow

const AsyncFunction: Function = Object.getPrototypeOf( async function() {}).constructor

export default AsyncFunction
