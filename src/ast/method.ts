import { CompletionItemKind, SymbolKind } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Base } from './base'
import { MethodDeclContext } from '../parser/RalphParser'
import { Context } from './context'
import { IdentifierKind } from './kinder'

export class Method extends Base {
  isPub: boolean

  constructor(node: TerminalNode) {
    super(node)
    this.identifierKind = IdentifierKind.Method
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
    method.setRange(ctx.start, ctx.stop)
    const context = new Context(method)
    context.paramListContext(ctx.paramList())

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

    const block = ctx.block()
    if (block) method.append(...context.blockContext(block))
    return method
  }
}
