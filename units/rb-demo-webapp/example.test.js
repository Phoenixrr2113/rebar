// @flow

// Flow setup for testing.
declare var test: any
declare var expect: any
declare var describe: any

//

test('Example test', () => {
  const x = 2 + 2
  expect(x === 4).toBe(true)
})
