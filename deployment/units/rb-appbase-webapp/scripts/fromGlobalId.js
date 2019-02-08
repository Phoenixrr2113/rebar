"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = fromGlobalId;

function fromGlobalId(
globalId)
{
  const unbasedGlobalId = atob(globalId);
  const delimiterPos = unbasedGlobalId.indexOf(':');

  return {
    type: unbasedGlobalId.substring(0, delimiterPos),
    id: unbasedGlobalId.substring(delimiterPos + 1) };

}
//# sourceMappingURL=fromGlobalId.js.map