// @flow

import Card, { CardContent, CardHeader } from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import PropTypes from 'prop-types'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import ResponsiveContentArea from '../../urb-base-webapp/components/ResponsiveContentArea'

const styles = {
  card: {
    minWidth: 275,
  },
}

class HomePageScreen extends React.Component<{
  classes: Object,
  Viewer: Object,
}> {
  static contextTypes = {
    rbCtx: PropTypes.object,
  }

  render() {
    const { classes } = this.props

    const data = [
      { name: 'Rebar Version', value: this.context.rbCtx.siteConfiguration.webapp.urbDemo.version },
      { name: 'Server OS', value: this.context.rbCtx.siteConfiguration.webapp.urbDemo.OSType },
      {
        name: 'Server Host Name',
        value: this.context.rbCtx.siteConfiguration.webapp.urbDemo.OSHostName,
      },
      {
        name: 'Server Free Memory',
        value: this.context.rbCtx.siteConfiguration.webapp.urbDemo.OSFreeMem,
      },
      {
        name: 'Google Maps API Key',
        value: this.context.rbCtx.siteConfiguration.webapp.api.googleMapsJavascriptAPI,
      },
    ]

    return (
      <ResponsiveContentArea>
        <Card className={classes.card}>
          <CardHeader title="Universal Relay Boilerplate Demo" />
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Property</TableCell>
                <TableCell numeric>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map( n => {
                return (
                  <TableRow key={n.name}>
                    <TableCell>{n.name}</TableCell>
                    <TableCell numeric>{n.value}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
          <CardContent />
        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default createFragmentContainer(
  withStyles( styles )( HomePageScreen ),
  graphql`
    fragment HomePageScreen_Viewer on Viewer {
      id
    }
  `,
)
