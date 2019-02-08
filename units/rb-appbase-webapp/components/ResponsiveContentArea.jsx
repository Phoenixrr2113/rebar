// @flow

import { withStyles } from '@material-ui/core/styles'

import React from 'react'

const styles = theme => ({
  content: {
    margin: '0 auto',
    flex: '1 1 100%',
    maxWidth: '100%',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: theme.spacing.unit * 3,
  },
})

class ResponsiveContentArea extends React.Component<{
  classes: Object,
  children: any,
}> {
  render() {
    const { classes } = this.props

    return <div className={classes.content}>{this.props.children}</div>
  }
}

export default withStyles( styles )( ResponsiveContentArea )
