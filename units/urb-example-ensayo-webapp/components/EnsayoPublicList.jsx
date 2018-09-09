// @flow

import Card from '@material-ui/core/Card'

import CardContent from '@material-ui/core/CardContent'

import CardHeader from '@material-ui/core/CardHeader'

import { withStyles } from '@material-ui/core/styles'

import { withRouter } from 'found'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import ResponsiveContentArea from '../../urb-appbase-webapp/components/ResponsiveContentArea'

const styles = theme => ({
  card: {
    minWidth: 275,
  },
})

class EnsayoPublicList extends React.Component<{
  classes: Object,
  router: Object,
  Viewer: Object,
}> {
  _handle_onClick( id ) {
    this.context.router.push( '/ensayo/item/' + id )
  }

  render() {
    const { classes, Viewer } = this.props

    return (
      <ResponsiveContentArea>
        {Viewer.Ensayos.edges.map( edge => (
          <Card key={edge.node.id} className={classes.card}>
            <CardHeader title={edge.node.Ensayo_Title} />

            <CardContent onClick={() => this._handle_onClick( edge.node.id )}>
              {edge.node.Ensayo_Description}
            </CardContent>
          </Card>
        ) )}
      </ResponsiveContentArea>
    )
  }
}

export default createFragmentContainer(
  withStyles( styles )( withRouter( EnsayoPublicList ) ),
  graphql`
    fragment EnsayoPublicList_Viewer on Viewer {
      Ensayos(first: 2147483647) @connection(key: "EnsayoPublicList_Ensayos") {
        edges {
          node {
            id
            Ensayo_Title
            Ensayo_Description
          }
        }
      }
    }
  `,
)
