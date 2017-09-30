// @flow

import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import React from 'react'

class NavMenuItemWithIcon extends React.Component<{
  icon: Object,
  label: string,
  onClick: Function,
}> {
  render() {
    return (
      <ListItem button onClick={this.props.onClick}>
        <ListItemIcon>{this.props.icon}</ListItemIcon>
        <ListItemText primary={this.props.label} />
      </ListItem>
    )
  }
}

export default NavMenuItemWithIcon
