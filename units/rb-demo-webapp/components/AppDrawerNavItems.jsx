// @flow

import Divider from '@material-ui/core/Divider'

import List from '@material-ui/core/List'

import { withStyles } from '@material-ui/core/styles'

import IconInbox from 'mdi-material-ui/Inbox'
import IconPencil from 'mdi-material-ui/Pencil'
import IconContacts from 'mdi-material-ui/Contacts'
import IconMoveResize from 'mdi-material-ui/MoveResize'
import IconLock from 'mdi-material-ui/Lock'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import AppDrawerAccountItem from '../../rb-account-management-webapp/components/AppDrawerAccountItem'
import NavMenuItemWithIcon from '../../rb-appdrawer-webapp/components/NavMenuItemWithIcon'

//

const styles = (theme) => ({
  container: {
    flex: 'initial',
    width: 250,
  },
  formControl: {
    marginTop: theme.spacing(3),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  list: {
    flex: 'initial',
    width: 250,
  },
})

//

class AppDrawerNavItems extends React.Component<{
  classes: Object,
  relay: Object,
  Viewer: Object,
  onClick: Function,
}> {
  render() {
    const { classes, Viewer, onClick } = this.props

    return (
      <div className={classes.container}>
        <AppDrawerAccountItem
          key="account"
          Viewer={Viewer}
          onClick={this.props.onClick}
        />
        <List className={classes.list}>
          <NavMenuItemWithIcon
            icon={<IconInbox />}
            label="To Dos"
            onClick={() => onClick('/todo/')}
          />
          <NavMenuItemWithIcon
            icon={<IconPencil />}
            label="Ensayo Edit"
            onClick={() => onClick('/ensayo/in-place-edit/')}
          />
          <NavMenuItemWithIcon
            icon={<IconContacts />}
            label="Ensayo Public"
            onClick={() => onClick('/ensayo/')}
          />
          <Divider />
          <NavMenuItemWithIcon
            icon={<IconMoveResize />}
            label="Viewport Dimensions"
            onClick={() => onClick('/viewport-dimensions/')}
          />
          <NavMenuItemWithIcon
            icon={<IconLock />}
            label="Force Login"
            onClick={() => onClick('/force-login/')}
          />
        </List>
      </div>
    )
  }
}

//export default withStyles(styles)(AppDrawerNavItems)

export default createFragmentContainer(withStyles(styles)(AppDrawerNavItems), {
  Viewer: graphql`
    fragment AppDrawerNavItems_Viewer on Viewer {
      ...AppDrawerAccountItem_Viewer
      User_IsAnonymous
    }
  `,
})
