// @flow

import Divider from 'material-ui/Divider'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import { withStyles } from 'material-ui/styles'
import InboxIcon from 'material-ui-icons/Inbox'
import DraftsIcon from 'material-ui-icons/Drafts'
import StarIcon from 'material-ui-icons/Star'
import SendIcon from 'material-ui-icons/Send'
import MailIcon from 'material-ui-icons/Mail'
import DeleteIcon from 'material-ui-icons/Delete'
import ReportIcon from 'material-ui-icons/Report'
import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  list: {
    width: 250,
    flex: 'initial',
  },
}

class AppDrawernavItems extends React.Component<{ classes: Object }> {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  _handle_GoTo( to: string ) {
    this.context.router.push( to )
  }
  render() {
    const { classes } = this.props

    return (
      <List>
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
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Ensayo Edit" />
            </ListItem>
            <ListItem button onClick={() => this._handle_GoTo( '/ensayo/' )}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Ensayo Public" />
            </ListItem>
            <ListItem button onClick={() => this._handle_GoTo( '/inscriptio/' )}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Inscriptio" />
            </ListItem>
            <ListItem button onClick={() => this._handle_GoTo( '/translaticiarum/' )}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Translaticiarum" />
            </ListItem>
          </List>
          <Divider />
          <List className={classes.list}>
            <ListItem button onClick={() => this._handle_GoTo( '/viewport-dimensions/' )}>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Viewport Dimensions" />
            </ListItem>
            <ListItem button onClick={() => this._handle_GoTo( '/force-login/' )}>
              <ListItemIcon>
                <ReportIcon />
              </ListItemIcon>
              <ListItemText primary="Force Login" />
            </ListItem>
          </List>
        </div>
      </List>
    )
  }
}

export default withStyles( styles )( AppDrawernavItems )
