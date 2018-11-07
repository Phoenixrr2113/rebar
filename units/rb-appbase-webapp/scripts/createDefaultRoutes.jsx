// @flow

import Route from 'found/lib/Route'
import React from 'react'
import { graphql } from 'react-relay'

import AppFrame from '../../_configuration/rb-appbase-webapp/AppFrame'
import routesAppFrame from '../../_configuration/rb-appbase-webapp/routesAppFrame'
import routesRoot from '../../_configuration/rb-appbase-webapp/routesRoot'

export default ( siteConfiguration: Object ) => {
  let artifactNamePrefix = ''
  if ( siteConfiguration.webapp && siteConfiguration.webapp.artifactNamePrefix )
    artifactNamePrefix = siteConfiguration.webapp.artifactNamePrefix

  return (
    <Route path={artifactNamePrefix + '/'}>
      <Route
        path="/"
        Component={AppFrame}
        query={graphql`
          query createDefaultRoutes_AppFrame_Query {
            Viewer {
              ...AppFrame_Viewer
            }
          }
        `}
      >
        {routesAppFrame}
      </Route>
      {routesRoot.length > 0 && routesRoot}
    </Route>
  )
}
