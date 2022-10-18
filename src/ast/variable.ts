import { CompletionItemKind, SymbolKind } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { ParamContext } from '../parser/RalphParser'
import { SemanticNode } from './ast'
import { Identifier } from './identifier'
import { IdentifierKind } from './kinder'
import { typeNameContext } from './context'
import caches from '../cache/cache'

export class Variable extends SemanticNode {
  isMut: boolean

  type_: Identifier | undefined

  symbolKind(): SymbolKind {
    return SymbolKind.Variable
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Variable
  }

  constructor(node: TerminalNode) {
    super(node)
    this.isMut = false
    this.identifierKind = IdentifierKind.Variable
  }

  public static FromContext(ctx: ParamContext): Variable {
    const varVal = new Variable(ctx.IDENTIFIER())
    varVal.detail = ctx.text
    varVal.type_ = typeNameContext(ctx.typeName())
    if (ctx.MUT()) varVal.isMut = true
    return varVal
  }

  getType(): Identifier | undefined {
    return caches.get(<string>this.type_?.name)
  }

  label(): string {
    if (this.isMut) return `(mut) ${this.name}`
    return this.name!
  }
}
