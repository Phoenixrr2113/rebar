"use strict";var _template = require("../rb-base-universal/template");
var _templateTags = require("../rb-base-universal/templateTags");

test('word father === word father', () => {
  expect(
  (0, _template.matchObject)({ word: { text: 'father' } }, { word: { text: 'father' } })).
  toBe(true);
});

test('word father !== constant alex', () => {
  expect((0, _template.matchObject)({ word: { text: 'father' } }, 'alex')).toBe(false);
});

test('word father !== word mother', () => {
  expect(
  (0, _template.matchObject)({ word: { text: 'father' } }, { word: { text: 'mother' } })).
  toBe(false);
});

test('string A is A or B', () => {
  expect((0, _template.matchObject)('A', { [_templateTags.templTag_in]: ['A', 'B'] })).toBe(true);
});

test('string C is A or B', () => {
  expect((0, _template.matchObject)('C', { [_templateTags.templTag_in]: ['A', 'B'] })).toBe(false);
});

test('word father in word mother, word father', () => {
  expect(
  (0, _template.matchObject)(
  { word: { text: 'father' } },
  {
    [_templateTags.templTag_in]: [
    { word: { text: 'father' } },
    { word: { text: 'mother' } }] })).



  toBe(true);
});

test('word child not in word mother, word father', () => {
  expect(
  (0, _template.matchObject)(
  { word: { text: 'child' } },
  {
    [_templateTags.templTag_in]: [
    { word: { text: 'father' } },
    { word: { text: 'mother' } }] })).



  toBe(false);
});

test('equal arrays', () => {
  expect(
  (0, _template.matchObject)(
  [{ word: { text: 'father' } }, { word: { text: 'mother' } }],
  [{ word: { text: 'father' } }, { word: { text: 'mother' } }])).

  toBe(true);
});

test('unequal arrays, criterion is shorter', () => {
  expect(
  (0, _template.matchObject)(
  [{ word: { text: 'father' } }, { word: { text: 'mother' } }],
  [{ word: { text: 'father' } }])).

  toBe(false);
});

test('unequal arrays, criterion is longer', () => {
  expect(
  (0, _template.matchObject)(
  [{ word: { text: 'father' } }, { word: { text: 'mother' } }],
  [
  { word: { text: 'father' } },
  { word: { text: 'mother' } },
  { word: { text: 'child' } }])).


  toBe(false);
});

test('unequal arrays, same length, different values', () => {
  expect(
  (0, _template.matchObject)(
  [{ word: { text: 'father' } }, { word: { text: 'mother' } }],
  [{ word: { text: 'father' } }, { word: { text: 'child' } }])).

  toBe(false);
});
//# sourceMappingURL=template-matchObject.test.js.map