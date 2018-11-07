// @flow

import servers_rb_appbase_server from '../../rb-appbase-server/extenders/rb-base-server/servers'

export default function servers( router: Object, firstPathElementIsArtifactName: boolean ) {
  servers_rb_appbase_server( router, firstPathElementIsArtifactName )
}
