import { SymbolKind } from 'vscode'
import { Ast, IAst } from './ast'
import { ParamContext } from '../parser/RalphParser'

export class Variable extends Ast {
  kind(): SymbolKind {
    return SymbolKind.Variable
  }

  public static FromContext(ctx: ParamContext): Variable {
    const varVal = new Variable(ctx.IDENTIFIER().text, ctx.IDENTIFIER().symbol)
    varVal.detail = ctx.text
    return varVal
  }
}
