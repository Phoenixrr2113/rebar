// @flow

import rb_example_ensayo_server from '../../../rb-example-ensayo-server/graphql/type/_ViewerFields'
import rb_example_inscriptio_server from '../../../rb-example-inscriptio-server/graphql/type/_ViewerFields'
import rb_example_todo_server from '../../../rb-example-todo-server/graphql/type/_ViewerFields'
import rb_example_translaticiarum_server from '../../../rb-example-translaticiarum-server/graphql/type/_ViewerFields'

export default {
  ...rb_example_ensayo_server,
  ...rb_example_inscriptio_server,
  ...rb_example_todo_server,
  ...rb_example_translaticiarum_server,
}
