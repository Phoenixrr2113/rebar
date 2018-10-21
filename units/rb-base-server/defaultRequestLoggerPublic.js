// @flow weak

import { debugWriteToLogServerRequestPublic } from '../_configuration/debug'
import matchInDepth from '../rb-base-universal/matchInDepth'
import log from '../rb-base-server/log'

export default function defaultrequestLoggerPublic( requestAndResponse ) {
  let logLevel = null

  // TODO: [2 Crossroads][server] Audit errors for Public and decide which ones to log. For instasnce, 401 is a bad idea.
  // // If there is an error, log it as an error
  // if( requestAndResponse.response.indexOf( '"errors": [' ) > 0 )
  //   logLevel = 'error'
  // Otherwise, if it is a trace, log it as info
  //else
  if ( matchInDepth( requestAndResponse, debugWriteToLogServerRequestPublic ) ) logLevel = 'info'

  if ( logLevel ) log.log({ level: logLevel, message: 'Public request', details: requestAndResponse })
}
