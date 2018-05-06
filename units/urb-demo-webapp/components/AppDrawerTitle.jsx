// @flow

import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import PropTypes from 'prop-types'
import React from 'react'

const styles = {
  title: {
    marginLeft: 8,
    marginTop: 8,
  },
}

class AppDrawerTitle extends React.Component<{ classes: Object, handle_GoTo: Function }> {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  _handle_GoToHome = () => {
    this.props.handle_GoTo( '/' )
  }
  render() {
    const { classes } = this.props

    return (
      <div onClick={this._handle_GoToHome}>
        <Typography className={classes.title} variant="title" gutterBottom color="inherit">
          Code Foundries URB
        </Typography>
      </div>
    )
  }
}

export default withStyles( styles )( AppDrawerTitle )
