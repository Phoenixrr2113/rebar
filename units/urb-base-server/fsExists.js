// @flow

import fsWithCallbacks from 'fs'

// $FlowIssue
const fs = fsWithCallbacks.promises

export default ( async function fsExists( path: string ) {
  try {
    await fs.access( path )
    return true
  } catch ( err ) {
    if ( err.code === 'ENOENT' ) return false
    else throw err
  }
})
