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
})

class ResponsiveContentArea extends React.Component<{ classes: Object, children: any }> {
  render() {
    const { classes } = this.props

    return <div className={classes.content}>{this.props.children}</div>
  }
}

export default withStyles( styles )( ResponsiveContentArea )
