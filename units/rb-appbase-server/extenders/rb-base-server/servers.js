// @flow

// Authentication server
import serverAuth from '../../serverAuth'
import serverGraphql from '../../serverGraphQL'
import serverWebApp from '../../serverWebApp'

export default function servers( router: Object, firstPathElementIsArtifactName: boolean ) {
  const firstPathElement = firstPathElementIsArtifactName ? '/:artifact_name' : ''

  router.use( firstPathElement + '/auth', serverAuth )
  router.use( firstPathElement + '/graphql', serverGraphql )
  router.use( serverWebApp )
}
