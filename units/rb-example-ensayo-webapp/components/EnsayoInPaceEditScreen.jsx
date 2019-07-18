// @flow

import Card from '@material-ui/core/Card'

import CardContent from '@material-ui/core/CardContent'

import CardHeader from '@material-ui/core/CardHeader'

import Fab from '@material-ui/core/Fab'

import { withStyles } from '@material-ui/core/styles'

import IconPlus from 'mdi-material-ui/Plus'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import EnsayoAddMutation from '../../rb-example-ensayo-client/relay/EnsayoAddMutation'
import ResponsiveContentArea from '../../rb-appbase-webapp/components/ResponsiveContentArea'

import EnsayoInPlaceEditProperties from './EnsayoInPlaceEditProperties'

const styles = theme => ({
  card: {
    minWidth: 275
  },
  addNewButton: { float: 'right', marginTop: -58, marginRight: 20 }
})

class EnsayoInPaceEditScreen extends React.Component<
  {
    classes: Object,
    Viewer: Object,
    children: Object,
    relay: Object
  },
  {
    propertiesIsOpen: boolean
  }
> {
  constructor(props: Object, context: Object) {
    super(props, context)

    this.state = { propertiesIsOpen: false }
  }

  _handle_updateHandler_Ensayo = EnsayoInPlaceEditProperties => {
    const {
      Ensayo_Title,
      Ensayo_Description,
      Ensayo_Content
    } = EnsayoInPlaceEditProperties
    const { relay, Viewer } = this.props

    EnsayoAddMutation.commit(
      relay.environment,
      Viewer,
      Ensayo_Title,
      Ensayo_Description,
      Ensayo_Content
    )
  }

  _handle_Close_Properties = () => {
    this.setState({ propertiesIsOpen: false })
  }

  _handle_onClick_Add = () => {
    this.setState({ propertiesIsOpen: true })
  }

  render() {
    const { classes } = this.props
    const { propertiesIsOpen } = this.state

    return (
      <ResponsiveContentArea>
        <Card className={classes.card}>
          <CardHeader title="Ensayo" subheader="List of essays" />

          <CardContent>
            <div className={classes.addNewButton}>
              <Fab
                color="primary"
                className={classes.button}
                onClick={this._handle_onClick_Add}
              >
                <IconPlus />
              </Fab>
            </div>

            {this.props.children}
          </CardContent>

          {propertiesIsOpen && (
            <EnsayoInPlaceEditProperties
              Ensayo_Title=""
              Ensayo_Content=""
              Ensayo_Description=""
              handlerUpdate={this._handle_updateHandler_Ensayo}
              handlerClose={this._handle_Close_Properties}
            />
          )}
        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default createFragmentContainer(
  withStyles(styles)(EnsayoInPaceEditScreen),
  {
    Viewer: graphql`
      fragment EnsayoInPaceEditScreen_Viewer on Viewer {
        id
      }
    `
  }
)
