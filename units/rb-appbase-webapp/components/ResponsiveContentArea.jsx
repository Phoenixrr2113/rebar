// @flow

import { withStyles } from '@material-ui/core/styles'

import React from 'react'

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.background.default,
    flexGrow: 1,
    overflow: 'scroll',
    overflowScrolling: 'touch',
    [theme.breakpoints.down('sm')]: {
      padding: 0
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      padding: theme.spacing(1)
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(2)
    },
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    textAlign: 'center',
    width: '100%',
    height: '100%'
  },
  content: {
    flex: '1 1 100%',
    margin: '0 auto',
    maxWidth: 1200,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: theme.spacing(3),
    textAlign: 'left'
  }
})

class ResponsiveContentArea extends React.Component<{
  classes: Object,
  children: any
}> {
  render() {
    const { classes } = this.props

    return (
      <main className={classes.container}>
        <div className={classes.content}>{this.props.children}</div>
      </main>
    )
  }
}

export default withStyles(styles)(ResponsiveContentArea)
