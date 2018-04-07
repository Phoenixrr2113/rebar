// @flow

import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

import ensureFileContent from './ensureFileContent'

// $FlowIssue
const copyFileAsync = promisify( fs.copyFile )
const mkdirAsync = promisify( fs.mkdir )

export default class MasterWriter {
  basePath: string
  directories: Map<string, boolean>
  // $FlowIssue
  arrPromises: Array<Promise>

  constructor( basePath: string ) {
    this.basePath = basePath
    this.directories = new Map()
    this.arrPromises = []
  }

  async ensureRelativePathExistsHelper( filePath: string ) {
    if ( !this.directories.has( filePath ) ) {
      console.log({ creating: true, filePath })

      try {
        await mkdirAsync( path.resolve( this.basePath, filePath ) )
      } catch ( err ) {
        if ( err.code !== 'EEXIST' ) throw err
      }

      this.directories.set( filePath, true )
    }
  }

  async ensureRelativePathExists( destinationRelative: string ) {
    const arrPath = destinationRelative.split( '/' )

    for ( let pathAccumulated = '', ix = 0; ix < arrPath.length; ix++ ) {
      await this.ensureRelativePathExistsHelper( pathAccumulated )
      pathAccumulated += arrPath[ix] + '/'
    }
  }

  async copyFile( sourceAbsolute: string, destinationRelative: string ) {
    await this.ensureRelativePathExists( destinationRelative )

    this.arrPromises.push( copyFileAsync( sourceAbsolute, this.basePath + '/' + destinationRelative ) )
  }

  async writeFile( destinationRelative: string, fileContent: string ) {
    await this.ensureRelativePathExists( destinationRelative )

    this.arrPromises.push(
      ensureFileContent( this.basePath + '/' + destinationRelative, null, fileContent ),
    )
  }

  async executeQueue() {
    console.log({ XXX: { countAtEnd: this.arrPromises.length } })
    await Promise.all( this.arrPromises )
    this.arrPromises = []
  }
}
