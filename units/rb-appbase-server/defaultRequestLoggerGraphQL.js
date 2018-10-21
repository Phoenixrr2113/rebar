// @flow weak

import { debugWriteToLogServerRequestGraphQL } from '../_configuration/debug'
import log from '../rb-base-server/log'
import matchInDepth from '../rb-base-universal/matchInDepth'

export default function defaultRequestLoggerGraphQL( requestAndResponse ) {
  let logLevel = null

  // If there is an error, log it as an error
  if ( requestAndResponse.response.indexOf( '"errors": [' ) > 0 ) {
    logLevel = 'error'
  } else {
    if ( matchInDepth( requestAndResponse, debugWriteToLogServerRequestGraphQL ) )
      // Otherwise, if it is a trace, log it as info
      logLevel = 'info'
  }

  if ( logLevel )
    log.log({ level: logLevel, message: 'GraphQL request', details: requestAndResponse })
}
