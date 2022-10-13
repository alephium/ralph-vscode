import * as vscode from 'vscode'
import Parser from '../../parser/parser'
import cache from '../../cache/cache'
import { Filter } from '../filter'

export class HoverProvider extends Filter implements vscode.HoverProvider {
  provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    if (this.isSkip(document, position)) return undefined
    Parser(document.uri, document.getText())
    let item
    Array.from(cache).find((elem) => {
      item = elem[1].provideHover(document, position)
      if (item) return true
    })
    return item
  }
}
