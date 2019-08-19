import { matchAndReplace } from '../rb-base-universal/template'
import {
  templTag_arrOr,
  templTag_arrVar,
  templTag_replObj,
} from '../rb-base-universal/templateTags'

test('simple replacement', () => {
  expect(
    matchAndReplace(
      [
        { word: { text: 'will' } },
        { word: { text: 'you' } },
        { word: { text: 'bring' } },
        { word: { text: 'me' } },
        { word: { text: 'cheese' } },
        { word: { text: 'now' } },
      ],
      {
        float: true,
        template: [
          { word: { text: 'bring' } },
          {
            [templTag_arrVar]: {
              name: 'to_whom',
              items: [ { word: {} } ],
            },
          },
          { word: { text: 'cheese' } },
        ],
      },
      [
        { word: { text: 'prolog' } },
        {
          partial: 'bring',
          toWhom: {
            [templTag_replObj]: {
              variable: 'to_whom',
              path: [ 'word', 'text' ],
            },
          },
        },
        { word: { test: 'epilog' } },
      ],
    ),
  ).toEqual([
    { word: { text: 'will' } },
    { word: { text: 'you' } },
    { word: { text: 'prolog' } },
    { partial: 'bring', toWhom: [ 'me' ] },
    { word: { test: 'epilog' } },
    { word: { text: 'now' } },
  ])
})

test('simple replacement', () => {
  expect(
    matchAndReplace(
      [
        { word: { text: 'can' } },
        { word: { text: 'i' } },
        { word: { text: 'bring' } },
        { word: { text: 'an empty' } },
        { word: { text: 'water' } },
        { word: { text: 'bottle' } },
      ],
      {
        float: true,
        template: [
          {
            [templTag_arrOr]: [
              [ { word: { text: 'can' } }, { word: { text: 'i' } } ],
              [ { word: { text: 'can' } }, { word: { text: 'we' } } ],
              [ { word: { text: 'can' } }, { word: { text: 'you' } } ],
              [
                { word: { text: 'is' } },
                { word: { text: 'it' } },
                { word: { text: 'ok' } },
                { word: { text: 'to' } },
              ],
              [
                { word: { text: 'are' } },
                { word: { text: 'we' } },
                { word: { text: 'allowed' } },
                { word: { text: 'to' } },
              ],
            ],
          },
        ],
      },
      [
        {
          partial: 'query_if_action_is_allowed',
        },
      ],
    ),
  ).toEqual([
    { partial: 'query_if_action_is_allowed' },
    { word: { text: 'bring' } },
    { word: { text: 'an empty' } },
    { word: { text: 'water' } },
    { word: { text: 'bottle' } },
  ])
})
