import { matchObject } from '../rb-base-universal/template'
import { templTag_in } from '../rb-base-universal/templateTags'

test('word father === word father', () => {
  expect(
    matchObject({ word: { text: 'father' } }, { word: { text: 'father' } }),
  ).toBe(true)
})

test('word father !== constant alex', () => {
  expect(matchObject({ word: { text: 'father' } }, 'alex')).toBe(false)
})

test('word father !== word mother', () => {
  expect(
    matchObject({ word: { text: 'father' } }, { word: { text: 'mother' } }),
  ).toBe(false)
})

test('string A is A or B', () => {
  expect(matchObject('A', { [templTag_in]: [ 'A', 'B' ] })).toBe(true)
})

test('string C is A or B', () => {
  expect(matchObject('C', { [templTag_in]: [ 'A', 'B' ] })).toBe(false)
})

test('word father in word mother, word father', () => {
  expect(
    matchObject(
      { word: { text: 'father' } },
      {
        [templTag_in]: [
          { word: { text: 'father' } },
          { word: { text: 'mother' } },
        ],
      },
    ),
  ).toBe(true)
})

test('word child not in word mother, word father', () => {
  expect(
    matchObject(
      { word: { text: 'child' } },
      {
        [templTag_in]: [
          { word: { text: 'father' } },
          { word: { text: 'mother' } },
        ],
      },
    ),
  ).toBe(false)
})

test('equal arrays', () => {
  expect(
    matchObject(
      [ { word: { text: 'father' } }, { word: { text: 'mother' } } ],
      [ { word: { text: 'father' } }, { word: { text: 'mother' } } ],
    ),
  ).toBe(true)
})

test('unequal arrays, criterion is shorter', () => {
  expect(
    matchObject(
      [ { word: { text: 'father' } }, { word: { text: 'mother' } } ],
      [ { word: { text: 'father' } } ],
    ),
  ).toBe(false)
})

test('unequal arrays, criterion is longer', () => {
  expect(
    matchObject(
      [ { word: { text: 'father' } }, { word: { text: 'mother' } } ],
      [
        { word: { text: 'father' } },
        { word: { text: 'mother' } },
        { word: { text: 'child' } },
      ],
    ),
  ).toBe(false)
})

test('unequal arrays, same length, different values', () => {
  expect(
    matchObject(
      [ { word: { text: 'father' } }, { word: { text: 'mother' } } ],
      [ { word: { text: 'father' } }, { word: { text: 'child' } } ],
    ),
  ).toBe(false)
})
