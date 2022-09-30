import { SymbolKind } from 'vscode'
import { ParamContext } from '../parser/RalphParser'
import { Ast } from './ast'

export class Variable extends Ast {
  symbolKind(): SymbolKind {
    return SymbolKind.Variable
  }

  public static FromContext(ctx: ParamContext): Variable {
    const varVal = new Variable(ctx.IDENTIFIER().text, ctx.IDENTIFIER().symbol)
    varVal.detail = ctx.text
    return varVal
  }
}
