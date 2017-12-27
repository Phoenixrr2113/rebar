// @flow

import Route from 'found/lib/Route'
import React from 'react'
import { graphql } from 'react-relay'

import AppFrame from '../../_configuration/urb-base-webapp/AppFrame'
import routesAppFrame from '../../_configuration/urb-base-webapp/routesAppFrame'
import routesRoot from '../../_configuration/urb-base-webapp/routesRoot'

export default ( siteConfiguration: Object ) => {
  return (
    <Route path="/">
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
