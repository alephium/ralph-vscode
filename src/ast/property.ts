import { CompletionItemKind, SymbolKind } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { ParamContext } from '../parser/RalphParser'
import { SemanticNode } from './ast'
import { Identifier, IdentifierKind } from './identifier'
import { typeNameContext } from './context'

export class Property extends SemanticNode {
  type_: Identifier | undefined

  symbolKind(): SymbolKind {
    return SymbolKind.Property
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Property
  }

  constructor(node: TerminalNode) {
    super(node)
    this.identifierKind = IdentifierKind.Variable
  }

  public static FromContext(ctx: ParamContext): Property {
    const field = new Property(ctx.IDENTIFIER())
    field.detail = ctx.text
    field.type_ = typeNameContext(ctx.typeName())
    return field
  }

  getType(): Identifier | undefined {
    return this.type_
  }
}
