// @flow weak

import { debugWriteToLogServerRequestAuth } from '../_configuration/debug'
import log from '../rb-base-server/log'
import matchInDepth from '../rb-base-universal/matchInDepth'

export default function defaultrequestLoggerAuth( requestAndResponse ) {
  let logLevel = null

  // TODO: [2 Crossroads][server] Audit errors for Auth and decide which ones to log. For instasnce, 401 is a bad idea.
  // // If there is an error, log it as an error
  // if( requestAndResponse.response.indexOf( '"errors": [' ) > 0 )
  //   logLevel = 'error'
  // Otherwise, if it is a trace, log it as info
  //else
  if ( matchInDepth( requestAndResponse, debugWriteToLogServerRequestAuth ) ) {
    logLevel = 'info'
  }

  if ( logLevel ) log.log({ level: logLevel, message: 'Auth request', details: requestAndResponse })
}
