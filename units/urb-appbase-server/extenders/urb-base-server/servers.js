// @flow

// Authentication server
import serverAuth from '../../serverAuth'
import serverGraphql from '../../serverGraphQL'
import serverWebApp from '../../serverWebApp'

export default function servers( router: Object ) {
  router.use( '/auth', serverAuth )
  router.use( '/graphql', serverGraphql )
  router.use( serverWebApp )
}
