// @flow

import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import PropTypes from 'prop-types'
import React from 'react'

class NavMenuItemWithIcon extends React.Component<{
  icon: Object,
  label: string,
  to: string,
}> {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  _handle_GoTo( to: string ) {
    this.context.router.push( to )
  }

  render() {
    return (
      <ListItem button onClick={() => this._handle_GoTo( this.props.to )}>
        <ListItemIcon>{this.props.icon}</ListItemIcon>
        <ListItemText primary={this.props.label} />
      </ListItem>
    )
  }
}

export default NavMenuItemWithIcon
