// @flow

import Divider from '@material-ui/core/Divider'

import List from '@material-ui/core/List'

import { withStyles } from '@material-ui/core/styles'

import IconInbox from 'mdi-material-ui/Inbox'
import IconCalendarBlank from 'mdi-material-ui/CalendarBlank'
import IconPencil from 'mdi-material-ui/Pencil'
import IconContacts from 'mdi-material-ui/Contacts'
import IconCrosshairs from 'mdi-material-ui/Crosshairs'
import IconMoveResize from 'mdi-material-ui/MoveResize'
import IconLock from 'mdi-material-ui/Lock'
import React from 'react'

import NavMenuItemWithIcon from '../../rb-appdrawer-webapp/components/NavMenuItemWithIcon'

const styles = {
  list: {
    width: 250,
    flex: 'initial',
  },
}

class AppDrawerNavItems extends React.Component<{
  classes: Object,
  onClick: Function,
}> {
  render() {
    const { classes, onClick } = this.props

    return (
      <div>
        <Divider />
        <List className={classes.list}>
          <NavMenuItemWithIcon
            icon={<IconInbox />}
            label="To Dos"
            onClick={() => onClick( '/todo/' )}
          />
          <NavMenuItemWithIcon
            icon={<IconPencil />}
            label="Ensayo Edit"
            onClick={() => onClick( '/ensayo/in-place-edit/' )}
          />
          <NavMenuItemWithIcon
            icon={<IconContacts />}
            label="Ensayo Public"
            onClick={() => onClick( '/ensayo/' )}
          />
          <NavMenuItemWithIcon
            icon={<IconCrosshairs />}
            label="Inscriptio"
            onClick={() => onClick( '/inscriptio/' )}
          />
          <NavMenuItemWithIcon
            icon={<IconCalendarBlank />}
            label="Translaticiarum"
            onClick={() => onClick( '/translaticiarum/' )}
          />
          <Divider />
          <NavMenuItemWithIcon
            icon={<IconMoveResize />}
            label="Viewport Dimensions"
            onClick={() => onClick( '/viewport-dimensions/' )}
          />
          <NavMenuItemWithIcon
            icon={<IconLock />}
            label="Force Login"
            onClick={() => onClick( '/force-login/' )}
          />
        </List>
      </div>
    )
  }
}

export default withStyles( styles )( AppDrawerNavItems )
