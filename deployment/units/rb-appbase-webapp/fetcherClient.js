"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _fetcherBase = _interopRequireDefault(require("../rb-appbase-universal/fetcherBase"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

class FetcherClient extends _fetcherBase.default {
  constructor(
  url,
  payloads,
  UserToken1,
  UserToken2)
  {
    super(url, UserToken1, UserToken2);

    this.payloads = payloads;
  }

  async fetch(...args) {
    if (this.payloads.length) {
      return this.payloads.shift();
    }

    return super.fetch(...args);
  }}exports.default = FetcherClient;
//# sourceMappingURL=fetcherClient.js.map