// @flow

/**
 * Waits for the specified number of milliseconds - returns promise. Can
 * be used as: await delayPromise(1000)
 */
export default function(nMsDuration: number): Promise<any> {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve()
    }, nMsDuration)
  })
}
