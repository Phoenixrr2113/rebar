// @flow

import { withRouter } from 'found'

import Button from '@material-ui/core/Button'

import Card from '@material-ui/core/Card'

import CardActions from '@material-ui/core/CardActions'

import CardContent from '@material-ui/core/CardContent'

import CardHeader from '@material-ui/core/CardHeader'

import TextField from '@material-ui/core/TextField'

import { withStyles } from '@material-ui/core/styles'

import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import UserUpdateMutation from '../../rb-account-management-client/relay/UserUpdateMutation'
import RequiresAuthenticationNotice from '../../rb-account-management-webapp/components/RequiresAuthentication'
import ResponsiveContentArea from '../../rb-appbase-webapp/components/ResponsiveContentArea'

//

const styles = {
  card: { minWidth: 320 },
}

//

class UserProfileScreen extends React.Component<
  {
    classes: Object,
    relay: Object,
    router: Object,
    Viewer: {
      User_IsAnonymous: boolean,
      User_DisplayName: string,
      User_PrimaryEmail: string,
      User_PrimaryPhone: string,
    },
  },
  { User_DisplayName: string, User_PrimaryEmail: string, User_PrimaryPhone: string },
> {
  constructor( props, context ) {
    super( props, context )

    const { User_DisplayName, User_PrimaryEmail, User_PrimaryPhone } = props.Viewer

    this.state = { User_DisplayName, User_PrimaryEmail, User_PrimaryPhone }
  }

  _handle_onChange_DisplayName = event => {
    const User_DisplayName = event.target.value

    this.setState({ User_DisplayName })
  }

  _handle_onChange_PrimaryEmail = event => {
    const User_PrimaryEmail = event.target.value

    this.setState({ User_PrimaryEmail })
  }

  _handle_onChange_PrimaryPhone = event => {
    const User_PrimaryPhone = event.target.value

    this.setState({ User_PrimaryPhone })
  }

  _handle_onClick_ChangePassword = () => {
    this.props.router.push( '/user/change-secret' )
  }

  _handle_onClick_Update = () => {
    const { User_DisplayName, User_PrimaryEmail, User_PrimaryPhone } = this.state
    const { relay } = this.props

    UserUpdateMutation.commit(
      relay.environment,
      User_DisplayName,
      User_PrimaryEmail,
      User_PrimaryPhone,
    )
  }

  render() {
    const { classes, Viewer } = this.props

    if ( Viewer.User_IsAnonymous ) return <RequiresAuthenticationNotice />

    const { User_DisplayName, User_PrimaryEmail, User_PrimaryPhone } = this.state

    return (
      <ResponsiveContentArea>
        <Card className={classes.card}>
          <CardHeader title="User Profile" />

          <CardContent>
            <TextField
              autoComplete="name"
              fullWidth={true}
              label="Display Name"
              value={User_DisplayName}
              onChange={this._handle_onChange_DisplayName}
            />

            <TextField
              autoComplete="email"
              fullWidth={true}
              label="Contact email (not account identifier)"
              value={User_PrimaryEmail}
              onChange={this._handle_onChange_PrimaryEmail}
            />

            <TextField
              autoComplete="tel"
              fullWidth={true}
              label="Contact phone"
              value={User_PrimaryPhone}
              onChange={this._handle_onChange_PrimaryPhone}
            />
          </CardContent>

          <CardActions>
            <Button onClick={this._handle_onClick_Update}>Update</Button>
            <Button onClick={this._handle_onClick_ChangePassword}>Change password</Button>
          </CardActions>
        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default createFragmentContainer(
  withStyles( styles )( withRouter( UserProfileScreen ) ),
  graphql`
    fragment UserProfileScreen_Viewer on Viewer {
      id
      User_IsAnonymous
      User_DisplayName
      User_PrimaryEmail
      User_PrimaryPhone
    }
  `,
)
