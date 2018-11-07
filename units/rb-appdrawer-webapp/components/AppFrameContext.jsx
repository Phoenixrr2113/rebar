// @flow

import React from 'react'

export default React.createContext<{ setTitle: Function, clearTitle: Function }>({
  setTitle: ( title: string ) => {},
  clearTitle: () => {},
})
