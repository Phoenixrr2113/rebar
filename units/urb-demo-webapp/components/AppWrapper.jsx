// @flow

import blueGrey from '@material-ui/core/colors/blueGrey'

import amber from '@material-ui/core/colors/amber'

import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import AppWrapperBase from '../../urb-appbase-webapp/components/AppWrapperBase'

export default class AppWrapper extends AppWrapperBase {
  createMUITheme() {
    return createMuiTheme({
      palette: {
        primary: blueGrey,
        secondary: amber,
        type: 'light',
      },
      typography: {
        fontFamily: 'Raleway, Open Sans, Helvetica Neue, Helvetica, sans-serif',
      },
    })
  }

  getWrapperRbCtx(): Object {
    return {}
  }
}
