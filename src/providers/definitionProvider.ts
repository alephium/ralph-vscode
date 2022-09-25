import * as vscode from 'vscode'
import { CancellationToken, Definition, DefinitionLink, Position, ProviderResult, TextDocument } from 'vscode'
import { Parser } from '../parser/parser'

export class DefinitionProvider implements vscode.DefinitionProvider {
  provideDefinition(document: TextDocument, position: Position): ProviderResult<Definition | DefinitionLink[]> {
    const parser = new Parser(document.getText())
    let item
    Array.from(parser.visitor.structs).find((elem) => {
      item = elem[1].provideDefinition(document, position)
      if (item) return true
    })
    return item
  }
}
