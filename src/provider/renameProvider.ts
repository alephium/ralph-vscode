import { RenameProvider, WorkspaceEdit, TextDocument, Position, ProviderResult, Uri } from 'vscode'
import * as vscode from 'vscode'
import { Filter } from './filter'
import cache from '../cache/cache'

export class RalphRenameProvider extends Filter implements RenameProvider {
  /**
   * Provide an edit that describes changes that have to be made to one
   * or many resources to rename a symbol to a different name.
   *
   * @param document The document in which the command was invoked.
   * @param position The position at which the command was invoked.
   * @param newName The new name of the symbol. If the given name is not valid, the provider must return a rejected promise.
   * @param token A cancellation token.
   * @return A workspace edit or a thenable that resolves to such. The lack of a result can be
   * signaled by returning `undefined` or `null`.
   */
  provideRenameEdits(document: TextDocument, position: Position, newName: string): ProviderResult<WorkspaceEdit> {
    // const identifier = this.callChain(document, position)
    const edit = new WorkspaceEdit()
    // if (identifier) {
    //   if (identifier.parent) {
    //     identifier.parent.findAll?.({ name: identifier.name }).forEach((member) =>
    //       edit.replace(<Uri>member.getUri?.(), <vscode.Range>member.getWordRange?.(), newName, {
    //         label: member.name!,
    //         needsConfirmation: true,
    //       })
    //     )
    //   }
    // }
    const word = document.getText(document.getWordRangeAtPosition(position, /[a-zA-Z][0-9a-zA-Z]*/i))
    cache.findAll(document.uri, { name: word }).forEach((member) =>
      edit.replace(<Uri>member.getUri?.(), <vscode.Range>member.getWordRange?.(), newName, {
        label: member.name!,
        needsConfirmation: true,
      })
    )
    return edit
  }
}
