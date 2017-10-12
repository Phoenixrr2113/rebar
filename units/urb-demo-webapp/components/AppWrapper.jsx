// @flow

import blueGrey from 'material-ui/colors/blueGrey'
import amber from 'material-ui/colors/amber'
import createMuiTheme from 'material-ui/styles/createMuiTheme'

import AppWrapperBase from '../../urb-base-webapp/components/AppWrapperBase'

export default class AppWrapper extends AppWrapperBase {
  createMUITheme() {
    return createMuiTheme({
      palette: {
        primary: blueGrey,
        secondary: amber,
        type: 'light',
      },
    })
  }

  getWrapperRbCtx(): Object {
    return {}
  }
}
