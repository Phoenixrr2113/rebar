// @flow

import FetcherBase from '../rb-appbase-universal/fetcherBase'

export default class FetcherServer extends FetcherBase {
  payloads: Array<any>

  constructor( url: string, UserToken1: ?string, UserToken2: string ) {
    super( url, UserToken1, UserToken2 )

    this.payloads = []
  }

  async fetch( ...args: any ) {
    const ix = this.payloads.length
    this.payloads.push( null )

    const payload = await super.fetch( ...args )

    this.payloads[ix] = payload
    return payload
  }

  toJSON() {
    return this.payloads
  }
}
