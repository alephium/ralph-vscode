import * as vscode from 'vscode'
import { Definition, DefinitionLink, Position, ProviderResult, TextDocument } from 'vscode'
import Parser from '../parser/parser'
import cache from '../cache/cache'
import { Filter } from './filter'

export class DefinitionProvider extends Filter implements vscode.DefinitionProvider {
  provideDefinition(document: TextDocument, position: Position): ProviderResult<Definition | DefinitionLink[]> {
    const word = this.word(document, position)
    if (word) {
      Parser(document.uri, document.getText())
      for (const value of cache.values()) {
        const member = value.def(word)
        if (member) return member.location?.()
      }
    }
    return undefined
  }
}
