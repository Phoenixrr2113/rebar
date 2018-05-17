// @flow

import ListItem from '@material-ui/core/ListItem'

import ListItemIcon from '@material-ui/core/ListItemIcon'

import ListItemText from '@material-ui/core/ListItemText'

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
