"use strict";var _template = require("../rb-base-universal/template");
var _templateTags = require("../rb-base-universal/templateTags");




{
  const arrPayload = [
  { word: { text: 'prequel' } },
  { word: { text: 'sedated' } },
  { word: { text: 'father' } },
  { word: { text: 'mother' } },
  { word: { text: 'beautiful' } },
  { word: { text: 'daughter' } },
  { word: { text: 'knive' } },
  { word: { text: 'sign' } }];


  const matchInfo = (0, _template.matchArray)(arrPayload, {
    float: true,
    template: [
    { word: { text: 'father' } },
    { word: { text: 'mother' } },
    {
      [_templateTags.templTag_arrVar]: {
        name: 'myVar',
        items: [{ word: {} }, { word: {} }] } }] });





  test('only words', () => {
    expect(
    (0, _template.replaceMatchInArray)(
    arrPayload,
    [
    { word: { text: 'before' } },
    { [_templateTags.templTag_replArr]: { variable: 'myVar' } },
    { word: { test: 'after' } }],

    matchInfo)).

    toEqual([
    { word: { text: 'prequel' } },
    { word: { text: 'sedated' } },
    { word: { text: 'before' } },
    { word: { text: 'beautiful' } },
    { word: { text: 'daughter' } },
    { word: { test: 'after' } },
    { word: { text: 'knive' } },
    { word: { text: 'sign' } }]);

  });
}
//# sourceMappingURL=template-replaceMatchInArray.test.js.map