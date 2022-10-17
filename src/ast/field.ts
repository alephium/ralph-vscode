import { CompletionItemKind, SymbolKind } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { ParamContext } from '../parser/RalphParser'
import { SemanticNode } from './ast'
import { Identifier, IdentifierKind } from './identifier'
import { typeNameContext } from './context'

export class Field extends SemanticNode {
  type_: Identifier | undefined

  symbolKind(): SymbolKind {
    return SymbolKind.Field
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Field
  }

  constructor(node: TerminalNode) {
    super(node)
    this.identifierKind = IdentifierKind.Variable
  }

  public static FromContext(ctx: ParamContext): Field {
    const field = new Field(ctx.IDENTIFIER())
    field.detail = ctx.text
    field.type_ = typeNameContext(ctx.typeName())
    return field
  }

  getType(): Identifier | undefined {
    return this.type_
  }
}
