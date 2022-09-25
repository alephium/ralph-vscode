import { Position, Uri } from 'vscode'
import * as vscode from 'vscode'
import { IAst } from './ast'

export class Identifier implements IAst {
  name: string

  point: Position

  uri: Uri | undefined

  constructor(word: string, point: Position, uri?: Uri) {
    this.uri = uri
    this.name = word
    this.point = point
  }

  word(): string {
    return this.name
  }

  identifier(): Identifier {
    return this
  }

  position(): vscode.Position {
    return this.point
  }
}
