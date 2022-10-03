import * as vscode from 'vscode'
import Parser from '../../parser/parser'
import cache from '../../cache/cache'

export class HoverProvider implements vscode.HoverProvider {
  provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    Parser(document.uri, document.getText())
    let item
    Array.from(cache).find((elem) => {
      item = elem[1].provideHover(document, position)
      if (item) return true
    })
    return item
  }
}
