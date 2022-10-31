import { Uri } from 'vscode'
import * as vscode from 'vscode'

export interface Position {
  point?: vscode.Position

  uri?: Uri
}
