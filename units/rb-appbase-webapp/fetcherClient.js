// @flow

import FetcherBase from '../rb-appbase-universal/fetcherBase'

export default class FetcherClient extends FetcherBase {
  constructor(
    url: string,
    payloads: any,
    UserToken1: ?string,
    UserToken2: string
  ) {
    super( url, UserToken1, UserToken2 )

    this.payloads = payloads
  }

  async fetch( ...args: any ) {
    if ( this.payloads.length ) {
      return this.payloads.shift()
    }

    return super.fetch( ...args )
  }
}
