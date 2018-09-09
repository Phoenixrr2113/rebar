// @flow

import { withStyles } from '@material-ui/core/styles'

import React from 'react'

const styles = theme => ({
  content: theme.mixins.gutters({
    margin: '0 auto',
    flex: '1 1 100%',
    maxWidth: '100%',
    paddingTop: theme.mixins.toolbar.minHeight + 16,
  }),
  [theme.breakpoints.up( 1000 )]: {
    content: {
      paddingTop: theme.mixins.toolbar.minHeight + 32,
      margin: '0 auto',
      maxWidth: 952,
    },
  },
  [theme.breakpoints.up( 'sm' )]: {
    content: {
      paddingTop: theme.mixins.toolbar.minHeight + 24,
    },
  },
})

class ResponsiveContentArea extends React.Component<any, any> {
  render() {
    const { classes } = this.props

    return <div className={classes.content}>{this.props.children}</div>
  }
}

export default withStyles( styles )( ResponsiveContentArea )
