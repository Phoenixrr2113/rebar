// @flow

import fsWithCallbacks from 'fs'

// $FlowIssue
const fs = fsWithCallbacks.promises

class FileBase {
  arrRelativePath: Array<string>
  relativePath: string
  name: string

  constructor( arrRelativePath: Array<string> ) {
    this.arrRelativePath = arrRelativePath
    this.relativePath = arrRelativePath.join( '/' )
    this.name = arrRelativePath[arrRelativePath.length - 1]
  }
}

export class File extends FileBase {
  contentAsString: ?string
}

export class Directory extends FileBase {
  arrContents: Array<FileBase>
  arrAllFiles: Array<File>

  constructor( arrRelativePath: Array<string> ) {
    super( arrRelativePath )

    this.arrContents = []
  }
}

export default class MasterReader {
  arrAllFiles: Array<File>
  baseDir: ?Directory
  basePath: string
  directoriesByRelativePath: Map<string, Directory>
  fileContentsByRelativePath: Map<string, string>
  skipFile: Function

  constructor( basePath: string ) {
    this.basePath = basePath

    this.directoriesByRelativePath = new Map()
    this.fileContentsByRelativePath = new Map()

    this.skipFile = () => false
    this.arrAllFiles = []
  }

  setSkipFile( skipFile: Function ) {
    this.skipFile = skipFile
  }

  async initialize() {
    // And read
    this.baseDir = await this.readDirectory([])
  }

  async readDirectory( arrRelativePath: Array<string> ) {
    const dir = new Directory( arrRelativePath )
    this.directoriesByRelativePath.set( dir.relativePath, dir )

    const dirContent = await fs.readdir( this.basePath + '/' + dir.relativePath )
    for ( let fileName of dirContent ) {
      // Skip DS store iles on mac
      if ( fileName === '.DS_Store' ) continue

      // Skip files according to passed function
      if ( this.skipFile( fileName ) ) {
        continue
      }

      // Skip . and .. directories
      if ( fileName.substr( 0, 1 ) === '.' ) {
        continue
      }

      const stat = await fs.stat( this.basePath + '/' + dir.relativePath + '/' + fileName )

      let fileOrDirToAdd

      if ( stat.isFile() ) {
        const file = new File( arrRelativePath.concat( fileName ) )

        fileOrDirToAdd = file
      } else if ( stat.isDirectory() ) {
        const subDir = await this.readDirectory( arrRelativePath.concat( fileName ) )

        fileOrDirToAdd = subDir
      } else
        throw new Error(
          'MasterReader: Neither file nor directory' + JSON.stringify( arrRelativePath ),
        )

      dir.arrContents.push( fileOrDirToAdd )
    }

    return dir
  }

  async readFile( fileName: string ): Promise<string> {
    const currentContent = this.fileContentsByRelativePath.get( fileName )

    if ( currentContent ) return currentContent

    const newContent = ( await fs.readFile( this.basePath + '/' + fileName, 'utf8' ) ).toString()
    this.fileContentsByRelativePath.set( fileName, newContent )

    return newContent
  }

  getAllFiles() {
    if ( !this.baseDir ) throw new Error()

    if ( this.arrAllFiles.length > 0 ) return this.arrAllFiles

    this.getAllFiledHelper( this.baseDir )

    return this.arrAllFiles
  }

  getAllFiledHelper( dir: Directory ) {
    for ( let fileOrDirectory of dir.arrContents ) {
      if ( fileOrDirectory instanceof Directory ) {
        // Sub-dir
        this.getAllFiledHelper( fileOrDirectory )
      } else if ( fileOrDirectory instanceof File ) {
        this.arrAllFiles.push( fileOrDirectory )
      }
    }
  }
}
