// @flow weak

import { debugWriteToLogServerRequestWebApp } from '../_configuration/debug'
import log from '../rb-base-server/log'
import matchInDepth from '../rb-base-universal/matchInDepth'

export default function defaultrequestLoggerWebApp( requestAndResponse ) {
  let logLevel = null

  // TODO: [2 Crossroads][server] Audit errors for WebApp and decide which ones to log. For instasnce, 401 is a bad idea.
  // // If there is an error, log it as an error
  // if( requestAndResponse.response.indexOf( '"errors": [' ) > 0 )
  //   logLevel = 'error'
  // Otherwise, if it is a trace, log it as info
  //else
  if ( matchInDepth( requestAndResponse, debugWriteToLogServerRequestWebApp ) ) {
    logLevel = 'info'
  }

  if ( logLevel )
    log.log({ level: logLevel, message: 'Render on server request', details: requestAndResponse })
}
