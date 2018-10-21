// @flow

import defaultRequestLoggerAuth from '../../rb-appbase-server/defaultRequestLoggerAuth'
import defaultRequestLoggerGraphQL from '../../rb-appbase-server/defaultRequestLoggerGraphQL'
import defaultRequestLoggerPublic from '../../rb-base-server/defaultRequestLoggerPublic'
import defaultrequestLoggerWebApp from '../../rb-appbase-server/defaultrequestLoggerWebApp'

export var requestLoggerAuth = defaultRequestLoggerAuth
export var requestLoggerGraphQL = defaultRequestLoggerGraphQL
export var requestLoggerPublic = defaultRequestLoggerPublic
export var requestLoggerRenderOnServer = defaultrequestLoggerWebApp
