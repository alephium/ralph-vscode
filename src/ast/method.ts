import { CompletionItemKind, SymbolKind } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Base } from './base'
import { MethodDeclContext } from '../parser/RalphParser'
import { Variable } from './variable'
import { blockContext } from './context'

export class Method extends Base {
  isPub: boolean

  constructor(node: TerminalNode) {
    super(node)
    this.isPub = false
  }

  symbolKind(): SymbolKind {
    return SymbolKind.Method
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Method
  }

  label(): string {
    if (this.isPub) {
      return `🔓 ${this.name}`
    }
    return `🔐 ${this.name}`
  }

  public static FromContext(ctx: MethodDeclContext): Method {
    const method = new Method(ctx.IDENTIFIER())
    ctx
      .paramList()
      ?.param()
      .forEach((varCtx) => {
        const value = Variable.FromContext(varCtx)
        value.setParent(method)
        method.append(value.type_!)
        method.add(value)
      })

    method.detail = ''
    if (ctx.annotation()) {
      method.detail += `${ctx.annotation()?.text} `
    }
    if (ctx.PUB()) {
      method.isPub = true
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

    method.setRange(ctx.IDENTIFIER().symbol, ctx.block()?.R_CURLY().symbol)

    const block = ctx.block()
    if (block) method.append(...blockContext(block))
    return method
  }
}
