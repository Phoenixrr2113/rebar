"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _fetcherBase = _interopRequireDefault(require("../rb-appbase-universal/fetcherBase"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

class FetcherServer extends _fetcherBase.default {


  constructor(url, UserToken1, UserToken2) {
    super(url, UserToken1, UserToken2);

    this.payloads = [];
  }

  async fetch(...args) {
    const ix = this.payloads.length;
    this.payloads.push(null);

    const payload = await super.fetch(...args);

    this.payloads[ix] = payload;
    return payload;
  }

  toJSON() {
    return this.payloads;
  }}exports.default = FetcherServer;
//# sourceMappingURL=fetcherServer.js.map