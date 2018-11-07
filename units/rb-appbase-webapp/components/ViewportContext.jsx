// @flow

import React from 'react'

export default React.createContext<{ totalWidth: number, totalHeight: number }>({
  totalWidth: 100,
  totalHeight: 100,
})
