// @flow

import Divider from 'material-ui/Divider'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import { withStyles } from 'material-ui/styles'
import InboxIcon from 'material-ui-icons/Inbox'
import TodayIcon from 'material-ui-icons/Today'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import ImportContactsIcon from 'material-ui-icons/ImportContacts'
import MyLocationIcon from 'material-ui-icons/MyLocation'
import OpenWithIcon from 'material-ui-icons/OpenWith'
import LockOutlineIcon from 'material-ui-icons/LockOutline'
import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  list: {
    width: 250,
    flex: 'initial',
  },
}

class AppDrawerNavItems extends React.Component<{ classes: Object }> {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  _handle_GoTo( to: string ) {
    this.context.router.push( to )
  }
  render() {
    const { classes } = this.props

    return (
      <div>
        <Divider />
        <List className={classes.list}>
          <ListItem button onClick={() => this._handle_GoTo( '/todo/' )}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="To Dos" />
          </ListItem>
          <ListItem button onClick={() => this._handle_GoTo( '/ensayo/in-place-edit/' )}>
            <ListItemIcon>
              <ModeEditIcon />
            </ListItemIcon>
            <ListItemText primary="Ensayo Edit" />
          </ListItem>
          <ListItem button onClick={() => this._handle_GoTo( '/ensayo/' )}>
            <ListItemIcon>
              <ImportContactsIcon />
            </ListItemIcon>
            <ListItemText primary="Ensayo Public" />
          </ListItem>
          <ListItem button onClick={() => this._handle_GoTo( '/inscriptio/' )}>
            <ListItemIcon>
              <MyLocationIcon />
            </ListItemIcon>
            <ListItemText primary="Inscriptio" />
          </ListItem>
          <ListItem button onClick={() => this._handle_GoTo( '/translaticiarum/' )}>
            <ListItemIcon>
              <TodayIcon />
            </ListItemIcon>
            <ListItemText primary="Translaticiarum" />
          </ListItem>
        </List>
        <Divider />
        <List className={classes.list}>
          <ListItem button onClick={() => this._handle_GoTo( '/viewport-dimensions/' )}>
            <ListItemIcon>
              <OpenWithIcon />
            </ListItemIcon>
            <ListItemText primary="Viewport Dimensions" />
          </ListItem>
          <ListItem button onClick={() => this._handle_GoTo( '/force-login/' )}>
            <ListItemIcon>
              <LockOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Force Login" />
          </ListItem>
        </List>
      </div>
    )
  }
}

export default withStyles( styles )( AppDrawerNavItems )
