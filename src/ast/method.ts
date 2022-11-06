import { CompletionItem, CompletionItemKind, SignatureInformation, SnippetString, SymbolKind } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Interval } from 'antlr4ts/misc/Interval'
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

  paramList(): string {
    let text = ''
    let { size } = this.members
    this.members.forEach((value) => {
      text += `${value.name}: ${value.type_?.name}`
      size -= 1
      if (size !== 0) {
        text += ', '
      }
    })
    return text
  }

  symbolKind(): SymbolKind {
    return SymbolKind.Method
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Method
  }

  signatureInformation(): SignatureInformation {
    return new SignatureInformation(this.paramList())
  }

  completionItem(): CompletionItem {
    const item = new CompletionItem(this.completionItemLabel(), this.completionItemKind())
    item.preselect = true
    item.commitCharacters = ['.']
    const text = new SnippetString(`${this.name}`)
    text.appendText('(')
    let { size } = this.members
    this.members.forEach((value) => {
      text.appendTabstop().appendPlaceholder(`${value.name}: ${value.type_?.name}`)
      size -= 1
      if (size !== 0) {
        text.appendText(', ')
      }
    })
    text.appendText(')')
    item.insertText = text
    return item
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
    method.setRuleContext(ctx)
    if (ctx.PUB()) {
      method.isPub = true
    }
    const context = new Context(method)
    context.paramListContext(ctx.paramList())
    const block = ctx.block()
    if (block) method.append(...context.blockContext(block))
    method._sourceInterval = new Interval((ctx.PUB() ?? ctx.FN()).sourceInterval.a, (ctx.result() ?? ctx.R_PAREN()).sourceInterval.b)
    return method
  }
}
