import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import {
  ArrayExprContext,
  BlockContext,
  CallContext,
  EmitContext,
  ExpressionContext,
  ExpressionListContext,
  ForStmtContext,
  IfStmtContext,
  ParamContext,
  ParamListContext,
  PrimitiveTypeContext,
  ResultContext,
  ReturnStmtContext,
  SimpleStmtContext,
  StatementContext,
  TypeNameContext,
  VarDeclContext,
  VarNameContext,
  WhileStmtContext,
} from '../parser/RalphParser'
import { Identifier } from './identifier'
import { IdentifierKind, SemanticsKind } from './kinder'
import { SemanticNode } from './ast'
import { Variable } from './variable'
import { Property } from './property'

export class Context {
  parent: Identifier

  constructor(parent: Identifier) {
    this.parent = parent
  }

  node(ctx: TerminalNode): Identifier {
    const node = new SemanticNode(ctx).setParent(this.parent)
    return node
  }

  refNode(ctx: TerminalNode): Identifier {
    return this.node(ctx).setSemanticsKind!(SemanticsKind.Ref)
  }

  defNode(ctx: TerminalNode): Identifier {
    return this.node(ctx).setSemanticsKind!(SemanticsKind.Def)
  }

  typeNode(typeNode: TerminalNode): Identifier {
    return <Identifier>this.refNode(typeNode).setIdentifierKind?.(IdentifierKind.Type).setSemanticsKind?.(SemanticsKind.Ref)
  }

  paramListContext(ctx: ParamListContext): Identifier[] {
    const identifiers: Identifier[] = []
    ctx.param().forEach((param) => identifiers.push(...this.paramContext(param)))
    return identifiers
  }

  paramContext(ctx: ParamContext): Identifier[] {
    let value
    if (this.parent.identifierKind === IdentifierKind.Method) {
      value = new Variable(ctx.IDENTIFIER())
    } else {
      value = new Property(ctx.IDENTIFIER())
    }
    value.setRuleContext(ctx)
    value.detail = ctx.text
    value.type_ = this.typeNameContext(ctx.typeName())
    value.setParent(this.parent)
    if (ctx.MUT()) value.isMut = true
    this.parent.add?.(value)
    return [value.type_]
  }

  primitiveTypeContext(ctx: PrimitiveTypeContext): Identifier {
    const identifiers: Identifier[] = []
    const add = (node: TerminalNode | undefined) => {
      if (node) identifiers.push(this.typeNode(node))
    }
    add(ctx.I256())
    add(ctx.U256())
    add(ctx.BYTEVEC())
    add(ctx.ADDRESS())
    add(ctx.BYTE())
    add(ctx.BOOL())
    return identifiers[0]
  }

  typeNameContext(ctx: TypeNameContext): Identifier {
    const identifiers: Identifier[] = []
    const primitiveType = ctx.primitiveType()
    if (primitiveType) identifiers.push(this.primitiveTypeContext(primitiveType))
    const identifier = ctx.IDENTIFIER()
    if (identifier) identifiers.push(this.typeNode(identifier))
    return identifiers[0]
  }

  resultContext(ctx: ResultContext): Identifier[] {
    const identifiers: Identifier[] = []
    ctx.typeName().forEach((value) => identifiers.push(this.typeNameContext(value)))
    return identifiers
  }

  arrayExprContext(ctx: ArrayExprContext): Identifier[] {
    const identifiers: Identifier[] = []
    const identifier = ctx.IDENTIFIER()
    if (identifier) identifiers.push(<Identifier>this.refNode(identifier).setIdentifierKind?.(IdentifierKind.Variable))
    ctx.expression().forEach((value) => identifiers.push(...this.expressionContext(value)))
    return identifiers
  }

  expressionContext(ctx: ExpressionContext): Identifier[] {
    const identifiers = []
    const varName = ctx.varName()
    if (varName) identifiers.push(<Identifier>this.varNameContext(varName).setSemanticsKind?.(SemanticsKind.Ref))
    const expr = ctx.primaryExpr()?.arrayExpr()
    if (expr) identifiers.push(...this.arrayExprContext(expr))
    const call = ctx.call()
    if (call) identifiers.push(...this.callContext(call))
    return identifiers
  }

  callContext(ctx: CallContext): Identifier[] {
    // TODO
    const identifiers: Identifier[] = []
    ctx
      .callChain()
      .varNames()
      .IDENTIFIER()
      .forEach((value) => identifiers.push(this.refNode(value)))
    identifiers.push(...this.expressionListContext(ctx.expressionList()))
    return identifiers
  }

  expressionListContext(ctx: ExpressionListContext): Identifier[] {
    const identifiers: Identifier[] = []
    ctx.expression().forEach((value) => identifiers.push(...this.expressionContext(value)))
    return identifiers
  }

  emitContext(ctx: EmitContext): Identifier[] {
    const identifiers: Identifier[] = []
    identifiers.push(this.refNode(ctx.IDENTIFIER()))
    identifiers.push(...this.expressionListContext(ctx.expressionList()))
    return identifiers
  }

  returnStmtContext(ctx: ReturnStmtContext): Identifier[] {
    const identifiers: Identifier[] = []
    identifiers.push(...this.expressionListContext(ctx.expressionList()))
    return identifiers
  }

  ifStmtContext(ctx: IfStmtContext): Identifier[] {
    const identifiers: Identifier[] = []
    identifiers.push(...this.expressionContext(ctx.expression()))
    ctx.block().forEach((value) => identifiers.push(...this.blockContext(value)))
    const ifStmt = ctx.ifStmt()
    if (ifStmt) identifiers.push(...this.ifStmtContext(ifStmt))
    return identifiers
  }

  blockContext(ctx: BlockContext): Identifier[] {
    return this.statementContexts(ctx.statement())
  }

  // todo
  varDeclContext(ctx: VarDeclContext): Identifier[] {
    const identifiers: Identifier[] = []
    const varName = ctx.varName()
    if (varName) identifiers.push(<Identifier>this.varNameContext(varName))
    const expression = ctx.expression()
    if (expression) identifiers.push(...this.expressionContext(expression))
    ctx
      .identifierList()
      ?.varName()
      .forEach((value) => identifiers.push(<Identifier>this.varNameContext(value)))
    return identifiers
  }

  // VarNameContext
  varNameContext(ctx: VarNameContext): Identifier {
    return <Identifier>this.defNode(ctx.IDENTIFIER()).setIdentifierKind?.(IdentifierKind.Variable)
  }

  simpleStmtContext(ctx: SimpleStmtContext): Identifier[] {
    const identifiers: Identifier[] = []
    const emit = ctx.emit()
    if (emit) identifiers.push(...this.emitContext(emit))
    const expression = ctx.expression()
    if (expression) identifiers.push(...this.expressionContext(expression))
    const varDecl = ctx.varDecl()
    if (varDecl) identifiers.push(...this.varDeclContext(varDecl))
    return identifiers
  }

  whileStmtContext(ctx: WhileStmtContext): Identifier[] {
    const identifiers: Identifier[] = []
    const expression = ctx.expression()
    if (expression) identifiers.push(...this.expressionContext(expression))
    identifiers.push(...this.blockContext(ctx.block()))
    return identifiers
  }

  forStmtContext(ctx: ForStmtContext): Identifier[] {
    const identifiers: Identifier[] = []
    const varName = ctx.varName()
    if (varName) identifiers.push(this.varNameContext(varName).setSemanticsKind!(SemanticsKind.Ref))
    ctx.expression().forEach((expression) => identifiers.push(...this.expressionContext(expression)))
    identifiers.push(...this.blockContext(ctx.block()))
    return identifiers
  }

  statementContexts(ctx: StatementContext[]): Identifier[] {
    const identifiers: Identifier[] = []
    ctx.forEach((value) => identifiers.push(...this.statementContext(value)))
    return identifiers
  }

  statementContext(ctx: StatementContext): Identifier[] {
    const identifiers: Identifier[] = []
    const ifStmt = ctx.ifStmt()
    if (ifStmt) identifiers.push(...this.ifStmtContext(ifStmt))
    const simpleStmt = ctx.simpleStmt()
    if (simpleStmt) identifiers.push(...this.simpleStmtContext(simpleStmt))
    const whileStmt = ctx.whileStmt()
    if (whileStmt) identifiers.push(...this.whileStmtContext(whileStmt))
    const block = ctx.block()
    if (block) identifiers.push(...this.blockContext(block))
    const returnStmt = ctx.returnStmt()
    if (returnStmt) identifiers.push(...this.returnStmtContext(returnStmt))
    return identifiers
  }
}
