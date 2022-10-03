import * as vscode from 'vscode'
import { Definition, DefinitionLink, Position, ProviderResult, TextDocument } from 'vscode'
import Parser from '../parser/parser'
import cache from '../cache/cache'

export class DefinitionProvider implements vscode.DefinitionProvider {
  provideDefinition(document: TextDocument, position: Position): ProviderResult<Definition | DefinitionLink[]> {
    Parser(document.uri, document.getText())
    let item
    Array.from(cache.values()).find((elem) => {
      item = elem.provideDefinition(document, position)
      if (item) return true
    })
    return item
  }
}
