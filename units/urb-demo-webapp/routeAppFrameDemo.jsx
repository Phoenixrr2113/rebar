// @flow

import Async from 'react-code-splitting'
import { graphql } from 'react-relay'
import React from 'react'
import Route from 'found/lib/Route'

const HomePageScreen = props => (
  <Async load={import( './components/HomePageScreen' )} componentProps={props} />
)

export default (
  <Route
    key="/"
    path="/"
    Component={HomePageScreen}
    query={graphql`
      query routeAppFrameDemo_HomePageScreen_Query {
        Viewer {
          ...HomePageScreen_Viewer
        }
      }
    `}
  />
)
