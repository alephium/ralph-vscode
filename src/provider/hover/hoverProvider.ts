import * as vscode from 'vscode'
import { Parser } from '../../parser/parser'

export class HoverProvider implements vscode.HoverProvider {
  provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    const parser = new Parser(document.uri, document.getText())
    let item
    Array.from(parser.visitor.structs).find((elem) => {
      item = elem[1].provideHover(document, position)
      if (item) return true
    })
    return item
  }
}
