import { RenameProvider, WorkspaceEdit, TextDocument, Position, ProviderResult, Uri } from 'vscode'
import * as vscode from 'vscode'
import Parser from '../parser/parser'
import { Filter } from './filter'

export class RalphRenameProvider extends Filter implements RenameProvider {
  provideRenameEdits(document: TextDocument, position: Position, newName: string): ProviderResult<WorkspaceEdit> {
    const identifier = this.callChain(document, position)
    if (identifier) {
      Parser(document.uri, document.getText())
      const edit = new WorkspaceEdit()
      if (identifier.parent) {
        const members = identifier.parent.findAll?.({ name: identifier.name })
        if (members) {
          members.forEach((member) =>
            edit.replace(<Uri>member.getUri?.(), <vscode.Range>member.getWordRange?.(), newName, {
              label: member.name!,
              needsConfirmation: true,
            })
          )
        }
      }
      return edit
    }
    return undefined
  }
}
