// @flow

import { withStyles } from '@material-ui/core/styles'

import React from 'react'

const styles = theme => ({
  container: {
    textAlign: 'center',
    width: '100%',
  },
  content: {
    flex: '1 1 100%',
    margin: '0 auto',
    maxWidth: 1200,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: theme.spacing.unit * 3,
    textAlign: 'left',
  },
})

class ResponsiveContentArea extends React.Component<{
  classes: Object,
  children: any,
}> {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <div className={classes.content}>{this.props.children}</div>
      </div>
    )
  }
}

export default withStyles( styles )( ResponsiveContentArea )
