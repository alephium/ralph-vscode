import * as vscode from 'vscode'
import { Filter } from '../filter'

export class HoverProvider extends Filter implements vscode.HoverProvider {
  provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    return this.callChain(document, position)?.hover?.()
  }
}
