import { CompletionItemKind, SymbolKind } from 'vscode'
import { ParamContext } from '../parser/RalphParser'
import { SemanticNode } from './ast'
import { Identifier } from './identifier'

export class Variable extends SemanticNode {
  type_: Identifier | undefined

  symbolKind(): SymbolKind {
    return SymbolKind.Variable
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Variable
  }

  public static FromContext(ctx: ParamContext): Variable {
    const varVal = new Variable(ctx.IDENTIFIER().text, ctx.IDENTIFIER().symbol)
    varVal.detail = ctx.text
    return varVal
  }

  getType(): Identifier | undefined {
    return this.type_
  }
}
