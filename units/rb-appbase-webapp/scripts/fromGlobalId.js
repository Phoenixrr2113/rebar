// @flow

export default function fromGlobalId(
  globalId: string
): { type: string, id: string } {
  const unbasedGlobalId = atob( globalId )
  const delimiterPos = unbasedGlobalId.indexOf( ':' )

  return {
    type: unbasedGlobalId.substring( 0, delimiterPos ),
    id: unbasedGlobalId.substring( delimiterPos + 1 ),
  }
}
