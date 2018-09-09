// @flow

import defaultRequestLoggerAuth from '../../urb-appbase-server/defaultRequestLoggerAuth'
import defaultRequestLoggerGraphQL from '../../urb-appbase-server/defaultRequestLoggerGraphQL'
import defaultRequestLoggerPublic from '../../urb-base-server/defaultRequestLoggerPublic'
import defaultrequestLoggerWebApp from '../../urb-appbase-server/defaultrequestLoggerWebApp'

export var requestLoggerAuth = defaultRequestLoggerAuth
export var requestLoggerGraphQL = defaultRequestLoggerGraphQL
export var requestLoggerPublic = defaultRequestLoggerPublic
export var requestLoggerRenderOnServer = defaultrequestLoggerWebApp
