// @flow

import fsWithCallbacks from 'fs'

const fs = fsWithCallbacks.promises

export default ( async function ensurePathExists( filePath: string ) {
  try {
    await fs.mkdir( filePath )
  } catch ( err ) {
    if ( err.code !== 'EEXIST' ) throw err
  }
})
