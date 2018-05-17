// @flow

import Card from '@material-ui/core/Card'

import CardContent from '@material-ui/core/CardContent'

import CardHeader from '@material-ui/core/CardHeader'

import { withStyles } from '@material-ui/core/styles'

import React from 'react'

import Typography from '@material-ui/core/Typography'

import ResponsiveContentArea from '../../urb-base-webapp/components/ResponsiveContentArea'

const doNothing = () => {}

let authenticationRequiredCallback: Function = doNothing

export function registerAuthenticationRequiredCallback( cb: Function ) {
  authenticationRequiredCallback = cb
}

export function unregisterAuthenticationRequiredCallback() {
  authenticationRequiredCallback = doNothing
}

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
})

class RequiresAuthenticationNotice extends React.Component<{
  classes: Object,
}> {
  componentDidMount() {
    authenticationRequiredCallback()
  }

  render() {
    const { classes } = this.props

    return (
      <ResponsiveContentArea>
        <Card className={classes.card}>
          <CardHeader title="Please log in" />
          <CardContent>
            <Typography paragraph>
              Accessing this area of the application requires you to be logged in.
            </Typography>
          </CardContent>
        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default withStyles( styles )( RequiresAuthenticationNotice )
