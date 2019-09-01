"use strict";var _template = require("../rb-base-universal/template");
var _templateTags = require("../rb-base-universal/templateTags");





test('simple replacement', () => {
  expect(
  (0, _template.matchAndReplace)(
  [
  { word: { text: 'will' } },
  { word: { text: 'you' } },
  { word: { text: 'bring' } },
  { word: { text: 'me' } },
  { word: { text: 'cheese' } },
  { word: { text: 'now' } }],

  {
    float: true,
    template: [
    { word: { text: 'bring' } },
    {
      [_templateTags.templTag_arrVar]: {
        name: 'to_whom',
        items: [{ word: {} }] } },


    { word: { text: 'cheese' } }] },


  [
  { word: { text: 'prolog' } },
  {
    partial: 'bring',
    toWhom: {
      [_templateTags.templTag_replObj]: {
        variable: 'to_whom',
        path: ['word', 'text'] } } },



  { word: { test: 'epilog' } }])).


  toEqual([
  { word: { text: 'will' } },
  { word: { text: 'you' } },
  { word: { text: 'prolog' } },
  { partial: 'bring', toWhom: ['me'] },
  { word: { test: 'epilog' } },
  { word: { text: 'now' } }]);

});

test('simple replacement', () => {
  expect(
  (0, _template.matchAndReplace)(
  [
  { word: { text: 'can' } },
  { word: { text: 'i' } },
  { word: { text: 'bring' } },
  { word: { text: 'an empty' } },
  { word: { text: 'water' } },
  { word: { text: 'bottle' } }],

  {
    float: true,
    template: [
    {
      [_templateTags.templTag_arrOr]: [
      [{ word: { text: 'can' } }, { word: { text: 'i' } }],
      [{ word: { text: 'can' } }, { word: { text: 'we' } }],
      [{ word: { text: 'can' } }, { word: { text: 'you' } }],
      [
      { word: { text: 'is' } },
      { word: { text: 'it' } },
      { word: { text: 'ok' } },
      { word: { text: 'to' } }],

      [
      { word: { text: 'are' } },
      { word: { text: 'we' } },
      { word: { text: 'allowed' } },
      { word: { text: 'to' } }]] }] },





  [
  {
    partial: 'query_if_action_is_allowed' }])).



  toEqual([
  { partial: 'query_if_action_is_allowed' },
  { word: { text: 'bring' } },
  { word: { text: 'an empty' } },
  { word: { text: 'water' } },
  { word: { text: 'bottle' } }]);

});
//# sourceMappingURL=template-matchAndReplace.test.js.map