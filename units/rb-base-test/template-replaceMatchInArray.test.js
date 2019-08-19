import { matchArray, replaceMatchInArray } from '../rb-base-universal/template'
import {
  templTag_arrVar,
  templTag_replArr,
} from '../rb-base-universal/templateTags'

{
  const arrPayload = [
    { word: { text: 'prequel' } },
    { word: { text: 'sedated' } },
    { word: { text: 'father' } },
    { word: { text: 'mother' } },
    { word: { text: 'beautiful' } },
    { word: { text: 'daughter' } },
    { word: { text: 'knive' } },
    { word: { text: 'sign' } },
  ]

  const matchInfo = matchArray(arrPayload, {
    float: true,
    template: [
      { word: { text: 'father' } },
      { word: { text: 'mother' } },
      {
        [templTag_arrVar]: {
          name: 'myVar',
          items: [ { word: {} }, { word: {} } ],
        },
      },
    ],
  })

  test('only words', () => {
    expect(
      replaceMatchInArray(
        arrPayload,
        [
          { word: { text: 'before' } },
          { [templTag_replArr]: { variable: 'myVar' } },
          { word: { test: 'after' } },
        ],
        matchInfo,
      ),
    ).toEqual([
      { word: { text: 'prequel' } },
      { word: { text: 'sedated' } },
      { word: { text: 'before' } },
      { word: { text: 'beautiful' } },
      { word: { text: 'daughter' } },
      { word: { test: 'after' } },
      { word: { text: 'knive' } },
      { word: { text: 'sign' } },
    ])
  })
}
