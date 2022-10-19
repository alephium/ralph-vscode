import * as vscode from 'vscode'
import Parser from '../../parser/parser'
import cache from '../../cache/cache'
import { Filter } from '../filter'

export class HoverProvider extends Filter implements vscode.HoverProvider {
  provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    const word = this.word(document, position)
    if (word) {
      Parser(document.uri, document.getText())
      for (const value of cache.values()) {
        const member = value.def(word)
        if (member) return member.hover?.()
      }
    }
    return undefined
  }
}
