import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { Uri } from 'vscode'
import { EventContext } from '../parser/RalphParser'
import { RalphParserVisitor } from '../parser/RalphParserVisitor'
import { Base } from '../ast/base'
import cache from '../cache/cache'

export class EmitVisitor extends AbstractParseTreeVisitor<number> implements RalphParserVisitor<number> {
  cache!: Map<string, Base>

  uri: Uri

  constructor(uri: Uri) {
    super()
    this.uri = uri
    this.cache = cache
  }

  protected defaultResult(): number {
    return this.cache.size
  }

  visitEvent(ctx: EventContext): number {
    console.log(`visitEvent = ${ctx.text}`)

    return this.cache.size
  }
}
