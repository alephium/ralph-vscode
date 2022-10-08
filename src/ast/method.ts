import { CompletionItemKind, SymbolKind } from 'vscode'
import { Token } from 'antlr4ts/Token'
import { Base } from './base'
import { MethodDeclContext } from '../parser/RalphParser'
import { Variable } from './variable'
import { Word } from './word'

export class Method extends Base {
  identifiers: Map<string, Word>

  symbolKind(): SymbolKind {
    return SymbolKind.Function
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Function
  }

  constructor(name: string, token: Token) {
    super(name, token)
    this.identifiers = new Map()
  }

  public static FromContext(ctx: MethodDeclContext): Method {
    const method = new Method(ctx.IDENTIFIER().text, ctx.IDENTIFIER().symbol)
    ctx
      .paramList()
      ?.param()
      .forEach((varCtx) => {
        method.add(Variable.FromContext(varCtx).setParent(method))
      })

    method.detail = ''
    if (ctx.annotation()) {
      method.detail += `${ctx.annotation()?.text} `
    }
    if (ctx.PUB()) {
      method.detail += `${ctx.PUB()?.text} `
    }
    method.detail += `${ctx.FN().text} `
    method.detail += `${ctx.IDENTIFIER().text}`

    if (ctx.L_PAREN()) {
      method.detail += `${ctx.L_PAREN()?.text} `
    }

    if (ctx.paramList()) {
      method.detail += `${ctx.paramList()?.text}`
    }

    if (ctx.R_PAREN()) {
      method.detail += `${ctx.R_PAREN()?.text} `
    }

    if (ctx.R_ARROW()) {
      method.detail += `${ctx.R_ARROW()?.text} `
    }

    if (ctx.result()) {
      method.detail += `${ctx.result()?.text} `
    }

    method.range(ctx.IDENTIFIER().symbol, ctx.block()?.R_CURLY().symbol)

    // ctx
    //   .block()
    //   ?.statement()
    //   .forEach((stm) => {
    //     stm.simpleStmt().emit().IDENTIFIER()
    //   })
    return method
  }
}
