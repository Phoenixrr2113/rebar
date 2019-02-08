// @flow

import Checkbox from '@material-ui/core/Checkbox'

import IconButton from '@material-ui/core/IconButton'

import ListItem from '@material-ui/core/ListItem'

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

import ListItemText from '@material-ui/core/ListItemText'

import Menu from '@material-ui/core/Menu'

import MenuItem from '@material-ui/core/MenuItem'

import IconDotsVertical from 'mdi-material-ui/DotsVertical'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import ToDoUpdateStatusMutation from '../../rb-example-todo-client/relay/ToDoUpdateStatusMutation'
import ToDoDeleteMutation from '../../rb-example-todo-client/relay/ToDoDeleteMutation'
import ToDoUpdateRenameMutation from '../../rb-example-todo-client/relay/ToDoUpdateRenameMutation'

import ToDoProperties from './ToDoProperties'

class ToDoItem extends React.Component<
  {
    Viewer: Object,
    ToDo: Object,
    relay: Object,
  },
  {
    anchorEl: ?Object,
    menuIsOpen: boolean,
    propertiesIsOpen: boolean,
  }
> {
  constructor( props: Object, context: Object ) {
    super( props, context )

    this.state = {
      anchorEl: undefined,
      menuIsOpen: false,
      propertiesIsOpen: false,
    }
  }

  _handle_onClickCheckbox = ( event, ToDo_Complete ) => {
    const { relay, Viewer, ToDo } = this.props

    ToDoUpdateStatusMutation.commit(
      relay.environment,
      Viewer,
      ToDo,
      ToDo_Complete
    )
  }

  _handle_Update_Properties = ToDo_properties => {
    const { relay, ToDo } = this.props

    ToDoUpdateRenameMutation.commit(
      relay.environment,
      ToDo,
      ToDo_properties.ToDo_Text
    )
  }

  _handle_Close_Properties = () => {
    this.setState({ propertiesIsOpen: false })
  }

  handleClickListItem = event => {
    this.setState({ menuIsOpen: true, anchorEl: event.currentTarget })
  }

  _handle_Menu_onClick_Edit = event => {
    this.setState({ menuIsOpen: false, propertiesIsOpen: true })
  }

  _handle_Menu_onClick_Delete = event => {
    this.setState({ menuIsOpen: false })

    const { relay, Viewer, ToDo } = this.props

    ToDoDeleteMutation.commit( relay.environment, Viewer, ToDo )
  }

  handleRequestClose = () => {
    this.setState({ menuIsOpen: false })
  }

  render() {
    const { ToDo_Complete, ToDo_Text } = this.props.ToDo

    return (
      <div>
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          onClick={event => this._handle_onClickCheckbox( event, !ToDo_Complete )}
        >
          <Checkbox checked={ToDo_Complete} />
          <ListItemText primary={ToDo_Text} />
          <ListItemSecondaryAction>
            <IconButton onClick={this.handleClickListItem}>
              <IconDotsVertical />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Menu
          id="lock-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.menuIsOpen}
          onClose={this.handleRequestClose}
        >
          <MenuItem
            key="edit"
            onClick={event => this._handle_Menu_onClick_Edit( event )}
          >
            Edit
          </MenuItem>
          <MenuItem
            key="delete"
            onClick={event => this._handle_Menu_onClick_Delete( event )}
          >
            Delete
          </MenuItem>
        </Menu>
        <ToDoProperties
          ToDo_Text={ToDo_Text}
          handlerUpdate={this._handle_Update_Properties}
          handlerClose={this._handle_Close_Properties}
          open={this.state.propertiesIsOpen}
        />
      </div>
    )
  }
}

export default createFragmentContainer( ToDoItem, {
  Viewer: graphql`
    fragment ToDoItem_Viewer on Viewer {
      id
    }
  `,
  ToDo: graphql`
    fragment ToDoItem_ToDo on ToDo {
      id
      ToDo_Complete
      ToDo_Text
    }
  `,
})
