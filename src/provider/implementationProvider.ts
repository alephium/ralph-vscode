import * as vscode from 'vscode'
import { CancellationToken, Definition, DefinitionLink, Position, ProviderResult, TextDocument } from 'vscode'
import { Filter } from './filter'
import cache from '../cache/cache'
import { Interface } from '../ast/interface'

export class RalphImplementationProvider extends Filter implements vscode.ImplementationProvider {
  provideImplementation(
    document: TextDocument,
    position: Position,
    token: CancellationToken
  ): ProviderResult<Definition | DefinitionLink[]> {
    const word = this.word(document, position)
    if (word && word.name) {
      console.log(`--------------`)
      console.log(word)
      const base = cache.get(word.name)
      console.log(base)
      if (base instanceof Interface) {
        return Array.from(base.implementer.values()).map((value) => value.location())
      }
    }
    return undefined
  }
}
