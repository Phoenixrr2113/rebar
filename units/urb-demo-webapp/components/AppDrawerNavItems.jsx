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

class AppDrawerNavItems extends React.Component<{ classes: Object, onClick: Function }> {
  render() {
    const { classes, onClick } = this.props

    return (
      <div>
        <Divider />
        <List className={classes.list}>
          <NavMenuItemWithIcon
            icon={<InboxIcon />}
            label="To Dos"
            onClick={() => onClick( '/todo/' )}
          />
          <NavMenuItemWithIcon
            icon={<ModeEditIcon />}
            label="Ensayo Edit"
            onClick={() => onClick( '/ensayo/in-place-edit/' )}
          />
          <NavMenuItemWithIcon
            icon={<ImportContactsIcon />}
            label="Ensayo Public"
            onClick={() => onClick( '/ensayo/' )}
          />
          <NavMenuItemWithIcon
            icon={<MyLocationIcon />}
            label="Inscriptio"
            onClick={() => onClick( '/inscriptio/' )}
          />
          <NavMenuItemWithIcon
            icon={<TodayIcon />}
            label="Translaticiarum"
            onClick={() => onClick( '/translaticiarum/' )}
          />
          <Divider />
          <NavMenuItemWithIcon
            icon={<OpenWithIcon />}
            label="Viewport Dimensions"
            onClick={() => onClick( '/viewport-dimensions/' )}
          />
          <NavMenuItemWithIcon
            icon={<LockOutlineIcon />}
            label="Force Login"
            onClick={() => onClick( '/force-login/' )}
          />
        </List>
      </div>
    )
  }
}

export default withStyles( styles )( AppDrawerNavItems )
