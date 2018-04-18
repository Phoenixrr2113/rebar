// @flow

import classNames from 'classnames'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import { withStyles } from 'material-ui/styles'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import IconChevronLeft from '@material-ui/icons/ChevronLeft'

import IconKeyboardTab from '@material-ui/icons/KeyboardTab'

import IconMenu from '@material-ui/icons/Menu'

import PropTypes from 'prop-types'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import AppDrawerNavItems from '../../_configuration/urb-appdrawer-webapp/AppDrawerNavItems'
import AppDrawerTitle from '../../_configuration/urb-appdrawer-webapp/AppDrawerTitle'
import NavBarLoginButton from '../../urb-account-management-webapp/components/NavBarLoginButton'

const drawerWidth = 240

const styles = theme => ({
  '@global': {
    html: {
      boxSizing: 'border-box',
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    body: {
      margin: 0,
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      lineHeight: '1.2',
      overflowX: 'hidden',
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
      width: 'auto',
    },
  },
  root: {
    width: '100%',
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    // transition: theme.transitions.create([ 'margin', 'width' ], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    // transition: theme.transitions.create([ 'margin', 'width' ], {
    //   easing: theme.transitions.easing.easeOut,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
  },
  grow: {
    flex: '1 1 auto',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  menuButtonRoot: {
    color: '#ffffff',
  },
  hide: {
    display: 'none',
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  content: {
    width: '100%',
    //marginLeft: -drawerWidth,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create( 'margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflow: 'scroll',
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up( 'sm' )]: {
      content: {
        height: 'calc(100% - 64px)',
        marginTop: 64,
      },
    },
  },
  contentShift: {
    marginLeft: 0,
    // transition: theme.transitions.create( 'margin', {
    //   easing: theme.transitions.easing.easeOut,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
  },
})

class AppFrame extends React.Component<any, { drawerIsOpen: boolean, drawerIsPinned: boolean }> {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  constructor( props: Object, context: Object ) {
    super( props, context )

    this.state = { drawerIsOpen: false, drawerIsPinned: false }
  }

  _handle_Drawer_Open = () => {
    this.setState({ drawerIsOpen: true })
  }
  _handle_Drawer_Pin = () => {
    this.setState({ drawerIsPinned: true })
  }

  _handle_Drawer_UnPin = () => {
    this.setState({ drawerIsOpen: false, drawerIsPinned: false })
  }

  _handle_Drawer_Close = () => {
    this.setState({ drawerIsOpen: false })
  }

  _handle_GoTo = ( to: string ) => {
    // TODO x0500 For some reason if the drawer is not pinned, the MUI modal root will
    // not be removed. Annoying AF. This bug was introduced around MIO 1.0 beta 17. Still a problem
    // with beta 22.
    //if ( !this.state.drawerIsPinned ) this.setState({ drawerIsOpen: false })
    if ( !this.state.drawerIsPinned ) this.setState({ drawerIsPinned: true })

    this.context.router.push( to )
  }

  render() {
    const { children, classes, Viewer } = this.props
    const { drawerIsOpen, drawerIsPinned } = this.state

    const drawerType = drawerIsPinned ? 'persistent' : 'temporary'

    const drawerClasses = drawerIsPinned
      ? {
          paper: classes.drawerPaper,
        }
      : {}

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classNames( classes.appBar, drawerIsPinned && classes.appBarShift )}>
            <Toolbar disableGutters={!drawerIsPinned}>
              <IconButton
                aria-label="open drawer"
                onClick={this._handle_Drawer_Open}
                className={classNames( classes.menuButton, drawerIsPinned && classes.hide )}
                classes={{ root: classes.menuButtonRoot }}
              >
                <IconMenu />
              </IconButton>
              <Typography className={classes.title} type="title" color="inherit" noWrap>
                Code Foundries Maker
              </Typography>

              <div className={classes.grow} />
              <NavBarLoginButton Viewer={Viewer} />
            </Toolbar>
          </AppBar>
          <Drawer
            classes={drawerClasses}
            open={drawerIsOpen}
            onClose={this._handle_Drawer_Close}
            type={drawerType}
            transitionDuration={{
              enter: drawerIsPinned ? 0 : 300,
              leave: 0,
            }}
          >
            <div className={classes.drawerInner}>
              <div className={classes.drawerHeader}>
                <AppDrawerTitle handle_GoTo={this._handle_GoTo} />
                <div className={classes.grow} />
                {drawerIsPinned && (
                  <IconButton onClick={this._handle_Drawer_UnPin}>
                    <IconChevronLeft />
                  </IconButton>
                )}
                {!drawerIsPinned && (
                  <IconButton onClick={this._handle_Drawer_Pin}>
                    <IconKeyboardTab />
                  </IconButton>
                )}
              </div>
            </div>
            <AppDrawerNavItems onClick={this._handle_GoTo} />
          </Drawer>
          <main className={classNames( classes.content, drawerIsPinned && classes.contentShift )}>
            {children}
          </main>
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(
  withStyles( styles )( AppFrame ),
  graphql`
    fragment AppFrame_Viewer on Viewer {
      UserToken2
      ...NavBarLoginButton_Viewer
    }
  `,
)
