// @flow

import AppBar from '@material-ui/core/AppBar'

import Drawer from '@material-ui/core/Drawer'

import IconButton from '@material-ui/core/IconButton'

import { withStyles } from '@material-ui/core/styles'

import Toolbar from '@material-ui/core/Toolbar'

import Typography from '@material-ui/core/Typography'

import IconMenu from '@material-ui/icons/Menu'

import { withRouter } from 'found'
import React from 'react'
import { Helmet } from 'react-helmet'
import { createFragmentContainer, graphql } from 'react-relay'

import AppDrawerNavItems from '../../_configuration/urb-appdrawer-webapp/AppDrawerNavItems'
import AppDrawerTitle from '../../_configuration/urb-appdrawer-webapp/AppDrawerTitle'
import NavBarLoginButton from '../../urb-account-management-webapp/components/NavBarLoginButton'
import NavBarDefaultTitle from '../../_configuration/urb-appdrawer-webapp/NavBarDefaultTitle'

import AppFrameContext from './AppFrameContext'

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
    transition: theme.transitions.create([ 'margin', 'width' ], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  },
})

const titlePrefix = process.env.NODE_ENV === 'production' ? '' : '<DEV> '

class AppFrame extends React.Component<
  { children?: any, classes: Object, router: Object, Viewer: Object },
  {
    drawerIsOpen: boolean,
    title: string,
  },
> {
  constructor( props: Object, context: Object ) {
    super( props, context )

    this.state = { drawerIsOpen: false, title: titlePrefix + NavBarDefaultTitle }
  }

  _handle_Drawer_Open = () => {
    this.setState({ drawerIsOpen: true })
  }

  _handle_Drawer_Close = () => {
    this.setState({ drawerIsOpen: false })
  }

  _handle_GoTo = ( to: string ) => {
    this.setState({ drawerIsOpen: false })

    this.props.router.push( to )
  }

  setTitle = ( title: string ) => {
    this.setState({ title: titlePrefix + title })
  }

  clearTitle = () => {
    this.setState({ title: titlePrefix + NavBarDefaultTitle })
  }

  render() {
    const { setTitle, clearTitle } = this
    const { children, classes, Viewer } = this.props
    const { drawerIsOpen, title } = this.state

    return (
      <div className={classes.root}>
        <Helmet>
          <title>{title}</title>
        </Helmet>

        <div className={classes.appFrame}>
          <AppBar className={classes.appBar}>
            <Toolbar disableGutters={true} variant="dense">
              <IconButton
                aria-label="open drawer"
                onClick={this._handle_Drawer_Open}
                className={classes.menuButton}
                classes={{ root: classes.menuButtonRoot }}
              >
                <IconMenu />
              </IconButton>

              <Typography variant="title" color="inherit" noWrap>
                {title}
              </Typography>

              <div className={classes.grow} />

              <NavBarLoginButton Viewer={Viewer} />
            </Toolbar>
          </AppBar>

          <Drawer open={drawerIsOpen} onClose={this._handle_Drawer_Close}>
            <div className={classes.drawerInner}>
              <div className={classes.drawerHeader}>
                <AppDrawerTitle handle_GoTo={this._handle_GoTo} />
              </div>
            </div>
            <AppDrawerNavItems onClick={this._handle_GoTo} />
          </Drawer>

          <AppFrameContext.Provider value={{ setTitle, clearTitle }}>
            <main className={classes.content}>{children}</main>
          </AppFrameContext.Provider>
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(
  withStyles( styles )( withRouter( AppFrame ) ),
  graphql`
    fragment AppFrame_Viewer on Viewer {
      UserToken2
      ...NavBarLoginButton_Viewer
    }
  `,
)
