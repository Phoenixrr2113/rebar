"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = _default;

/**
                                                                                                        * Waits for the specified number of milliseconds - returns promise. Can
                                                                                                        * be used as: await delayPromise(1000)
                                                                                                        */
function _default(nMsDuration) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, nMsDuration);
  });
}
//# sourceMappingURL=delayPromise.js.map