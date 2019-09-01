"use strict";var _template = require("../rb-base-universal/template");

test('only words', () => {
  expect((0, _template.stringToTokenArray)('hello Wonderful world')).toEqual([
  { word: { text: 'hello' } },
  { word: { text: 'wonderful' } },
  { word: { text: 'world' } }]);

});

test('only words, extra white space', () => {
  expect((0, _template.stringToTokenArray)('hello Wonderful      world')).toEqual([
  { word: { text: 'hello' } },
  { word: { text: 'wonderful' } },
  { word: { text: 'world' } }]);

});

test('words and coma next to word, space after coma', () => {
  expect(
  (0, _template.stringToTokenArray)('no better place than here, no better time than now')).
  toEqual([
  { word: { text: 'no' } },
  { word: { text: 'better' } },
  { word: { text: 'place' } },
  { word: { text: 'than' } },
  { word: { text: 'here' } },
  { symbol: { text: ',' } },
  { word: { text: 'no' } },
  { word: { text: 'better' } },
  { word: { text: 'time' } },
  { word: { text: 'than' } },
  { word: { text: 'now' } }]);

});

test('words and coma next to word, space before and after coma', () => {
  expect(
  (0, _template.stringToTokenArray)('no better place than here , no better time than now')).
  toEqual([
  { word: { text: 'no' } },
  { word: { text: 'better' } },
  { word: { text: 'place' } },
  { word: { text: 'than' } },
  { word: { text: 'here' } },
  { symbol: { text: ',' } },
  { word: { text: 'no' } },
  { word: { text: 'better' } },
  { word: { text: 'time' } },
  { word: { text: 'than' } },
  { word: { text: 'now' } }]);

});

test('words and coma next to word, space before coma', () => {
  expect(
  (0, _template.stringToTokenArray)('no better place than here ,no better time than now')).
  toEqual([
  { word: { text: 'no' } },
  { word: { text: 'better' } },
  { word: { text: 'place' } },
  { word: { text: 'than' } },
  { word: { text: 'here' } },
  { symbol: { text: ',' } },
  { word: { text: 'no' } },
  { word: { text: 'better' } },
  { word: { text: 'time' } },
  { word: { text: 'than' } },
  { word: { text: 'now' } }]);

});

test('words and coma next to word, no space before or after', () => {
  expect(
  (0, _template.stringToTokenArray)('no better place than here,no better time than now')).
  toEqual([
  { word: { text: 'no' } },
  { word: { text: 'better' } },
  { word: { text: 'place' } },
  { word: { text: 'than' } },
  { word: { text: 'here' } },
  { symbol: { text: ',' } },
  { word: { text: 'no' } },
  { word: { text: 'better' } },
  { word: { text: 'time' } },
  { word: { text: 'than' } },
  { word: { text: 'now' } }]);

});
//# sourceMappingURL=template-stringToToken.test.js.map