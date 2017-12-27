// @flow

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PropTypes from 'prop-types'
import React from 'react'
import EventListener from 'react-event-listener'

import ViewportDimensions from '../scripts/ViewportDimensions'

export default class AppWrapperBase extends React.Component<{
  siteConfiguration: Object,
  children: any,
  url: string,
}> {
  rbCtx: Object

  static childContextTypes = {
    rbCtx: PropTypes.object,
  }

  constructor( props: Object, context: Object ) {
    super( props, context )

    // TODO x0100 If a property for innerWidth is provided, use it for the initial request

    // Descendants can add other items to rbCtx through getWrapperRbCtx
    this.rbCtx = this.getWrapperRbCtx()

    this.rbCtx.viewportDimensions = new ViewportDimensions()
    this.rbCtx.siteConfiguration = props.siteConfiguration
  }

  componentDidMount() {
    this.handle_onResize() // Will populate the data structures for dimensions with current values
  }

  getChildContext() {
    return {
      rbCtx: this.rbCtx,
    }
  }

  // This should be overridden in AppDrawer
  createMUITheme() {
    return null
  }

  // Can be overrideen in AppDrawer
  getWrapperRbCtx(): Object {
    return {}
  }

  handle_onResize = () => {
    this.rbCtx.viewportDimensions.handle_onResize()
  }

  render() {
    // Hacky hacky here ....
    this.context = this.getChildContext()

    return (
      <EventListener target="window" onResize={this.handle_onResize}>
        <MuiThemeProvider theme={this.createMUITheme()}>{this.props.children}</MuiThemeProvider>
      </EventListener>
    )
  }
}
