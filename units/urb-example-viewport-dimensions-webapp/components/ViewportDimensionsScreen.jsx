// @flow

import Card from '@material-ui/core/Card'

import CardContent from '@material-ui/core/CardContent'

import CardHeader from '@material-ui/core/CardHeader'

import { withStyles } from '@material-ui/core/styles'

import Table from '@material-ui/core/Table'

import TableBody from '@material-ui/core/TableBody'

import TableCell from '@material-ui/core/TableCell'

import TableHead from '@material-ui/core/TableHead'

import TableRow from '@material-ui/core/TableRow'

import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import ResponsiveContentArea from '../../urb-base-webapp/components/ResponsiveContentArea'
import withViewportDimensions from '../../urb-base-webapp/scripts/withViewportDimensions'

const styles = {
  card: {
    minWidth: 275,
  },
}

class ViewportDimensionsScreen extends React.Component<{
  classes: Object,
  totalWidth: number,
  totalHeight: number,
  Viewer: Object,
}> {
  render() {
    const { classes, totalHeight, totalWidth } = this.props

    const data = [
      { name: 'totalWidth', value: totalWidth },
      { name: 'totalHeight', value: totalHeight },
    ]

    return (
      <ResponsiveContentArea>
        <Card className={classes.card}>
          <CardHeader title="Viewport Dimensions" />
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
  withStyles( styles )(
    withViewportDimensions( ViewportDimensionsScreen, [ 'totalHeight', 'totalWidth' ]),
  ),
  graphql`
    fragment ViewportDimensionsScreen_Viewer on Viewer {
      id
    }
  `,
)
