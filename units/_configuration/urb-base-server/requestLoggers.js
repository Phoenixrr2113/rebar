// @flow

import defaultRequestLoggerAuth from '../../urb-webapp-server/defaultRequestLoggerAuth'
import defaultRequestLoggerGraphQL from '../../urb-webapp-server/defaultRequestLoggerGraphQL'
import defaultRequestLoggerPublic from '../../urb-base-server/defaultRequestLoggerPublic'
import defaultrequestLoggerWebApp from '../../urb-webapp-server/defaultrequestLoggerWebApp'

export var requestLoggerAuth = defaultRequestLoggerAuth
export var requestLoggerGraphQL = defaultRequestLoggerGraphQL
export var requestLoggerPublic = defaultRequestLoggerPublic
export var requestLoggerRenderOnServer = defaultrequestLoggerWebApp
