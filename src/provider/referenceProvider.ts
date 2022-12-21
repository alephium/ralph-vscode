import { CancellationToken, Location, Position, ProviderResult, ReferenceContext, ReferenceProvider, TextDocument } from 'vscode'
import { Filter } from './filter'
import cache from '../cache/cache'

export class RalphReferenceProvider extends Filter implements ReferenceProvider {
  /**
   * Provide a set of project-wide references for the given position and document.
   *
   * @param document The document in which the command was invoked.
   * @param position The position at which the command was invoked.
   * @param token A cancellation token.
   *
   * @return An array of locations or a thenable that resolves to such. The lack of a result can be
   * signaled by returning `undefined`, `null`, or an empty array.
   */
  provideReferences(
    document: TextDocument,
    position: Position,
    context: ReferenceContext,
    token: CancellationToken
  ): ProviderResult<Location[]> {
    if (this.isSkip(document, position)) return undefined
    const word = document.getText(document.getWordRangeAtPosition(position, /[a-zA-Z_][0-9a-zA-Z_]*/i))
    return cache.findAll(document.uri, { name: word }).map((value) => value.location!())
  }
}
