// @flow weak

import { debugWriteToLogServerRequestPublic } from '../_configuration/debug'
import matchInDepth from '../urb-base-universal/matchInDepth'
import log from '../urb-base-server/log'

export default function defaultrequestLoggerPublic( requestAndResponse ) {
  let logLevel = null

  // TODO: What errors for Auth should be logged? definitily not 401.
  // // If there is an error, log it as an error
  // if( requestAndResponse.response.indexOf( '"errors": [' ) > 0 )
  //   logLevel = 'error'
  // Otherwise, if it is a trace, log it as info
  //else
  if ( matchInDepth( requestAndResponse, debugWriteToLogServerRequestPublic ) ) logLevel = 'info'

  if ( logLevel ) log.log({ level: logLevel, message: 'Public request', details: requestAndResponse })
}
