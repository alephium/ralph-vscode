import { CompletionItemKind, SymbolKind } from 'vscode'
import { ParamContext } from '../parser/RalphParser'
import { SemanticNode } from './ast'
import { Identifier } from './identifier'

export class Field extends SemanticNode {
  type_: Identifier | undefined

  symbolKind(): SymbolKind {
    return SymbolKind.Field
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Field
  }

  public static FromContext(ctx: ParamContext): Field {
    const field = new Field(ctx.IDENTIFIER().text, ctx.IDENTIFIER().symbol)
    field.detail = ctx.text
    return field
  }

  getType(): Identifier | undefined {
    return this.type_
  }
}
