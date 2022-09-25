import * as vscode from 'vscode'
import { Parser } from '../parser/parser'

export class SymbolProvider implements vscode.DocumentSymbolProvider {
  provideDocumentSymbols(document: vscode.TextDocument): vscode.ProviderResult<vscode.DocumentSymbol[] | vscode.SymbolInformation[]> {
    const parser = new Parser(document.getText())
    let items: vscode.SymbolInformation[] = []
    parser.visitor.structs.forEach((contract) => {
      items = items.concat(contract.documentSymbol(document))
    })
    return items
  }
}
