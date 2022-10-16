import { CompletionItemKind, SymbolKind } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { ParamContext } from '../parser/RalphParser'
import { SemanticNode } from './ast'
import { Identifier, IdentifierKind } from './identifier'

export class Variable extends SemanticNode {
  type_: Identifier | undefined

  symbolKind(): SymbolKind {
    return SymbolKind.Variable
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Variable
  }

  constructor(node: TerminalNode) {
    super(node)
    this.identifierKind = IdentifierKind.Variable
  }

  public static FromContext(ctx: ParamContext): Variable {
    const varVal = new Variable(ctx.IDENTIFIER())
    varVal.detail = ctx.text
    // varVal.type_ = ctx.typeName()
    return varVal
  }

  getType(): Identifier | undefined {
    // eslint-disable-next-line no-underscore-dangle
    return this.type_
  }
}
