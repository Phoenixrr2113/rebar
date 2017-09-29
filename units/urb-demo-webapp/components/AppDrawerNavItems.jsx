// @flow

import Divider from 'material-ui/Divider'
import List from 'material-ui/List'
import { withStyles } from 'material-ui/styles'
import InboxIcon from 'material-ui-icons/Inbox'
import TodayIcon from 'material-ui-icons/Today'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import ImportContactsIcon from 'material-ui-icons/ImportContacts'
import MyLocationIcon from 'material-ui-icons/MyLocation'
import OpenWithIcon from 'material-ui-icons/OpenWith'
import LockOutlineIcon from 'material-ui-icons/LockOutline'
import React from 'react'

import NavMenuItemWithIcon from '../../urb-appdrawer-webapp/components/NavMenuItemWithIcon'

const styles = {
  list: {
    width: 250,
    flex: 'initial',
  },
}

class AppDrawerNavItems extends React.Component<{ classes: Object }> {
  render() {
    const { classes } = this.props

    return (
      <div>
        <Divider />
        <List className={classes.list}>
          <NavMenuItemWithIcon icon={<InboxIcon />} label="To Dos" to="/todo/" />
          <NavMenuItemWithIcon
            icon={<ModeEditIcon />}
            label="Ensayo Edit"
            to="/ensayo/in-place-edit/"
          />
          <NavMenuItemWithIcon icon={<ImportContactsIcon />} label="Ensayo Public" to="/ensayo/" />
          <NavMenuItemWithIcon icon={<MyLocationIcon />} label="Inscriptio" to="/inscriptio/" />
          <NavMenuItemWithIcon
            icon={<TodayIcon />}
            label="Translaticiarum"
            to="/translaticiarum/"
          />
          <Divider />
          <NavMenuItemWithIcon
            icon={<OpenWithIcon />}
            label="Viewport Dimensions"
            to="/viewport-dimensions/"
          />
          <NavMenuItemWithIcon icon={<LockOutlineIcon />} label="Force Login" to="/force-login/" />
        </List>
      </div>
    )
  }
}

export default withStyles( styles )( AppDrawerNavItems )
