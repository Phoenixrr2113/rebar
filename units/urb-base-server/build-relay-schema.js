// @flow

import path from 'path'

import { graphql } from 'graphql'
import { introspectionQuery, printSchema } from 'graphql/utilities'

import schema from '../urb-base-server/graphql/schema'
import ensureFileContent from '../urb-base-tools/ensureFileContent'

// TODO x0500 It is a complete mystery to me why the comments are encased in """ but the relay
// compiler does not like them. Either way, this sanitizes the schema and removes the comment.
const reRemoveComments = new RegExp( '"""[^"]*"""', 'g' )

async function main() {
  const result = await graphql( schema, introspectionQuery )
  if ( result.errors )
    throw new Error( 'Failed introspecting schema: ' + JSON.stringify( result.errors, null, 2 ) )

  const printedSchema = printSchema( schema ).replace( reRemoveComments, '#' )

  const taskPromises = [
    ensureFileContent(
      path.resolve( './units/_configuration/urb-base-server/graphql/schema.json' ),
      null,
      JSON.stringify( result, null, 2 ),
      true,
    ),
    ensureFileContent( path.resolve( 'schema.graphql' ), null, printedSchema, true ),
  ]

  await Promise.all( taskPromises )
}

main().then( () => console.log( 'Fin.' ) )
