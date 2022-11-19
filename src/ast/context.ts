import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import {
  ArrayExprContext,
  BlockContext,
  CallChainContext,
  ElseStmtContext,
  EmitContext,
  ExpressionContext,
  ExpressionListContext,
  ForStmtContext,
  IfStmtContext,
  MethodCallContext,
  ParamContext,
  ParamListContext,
  PrimitiveTypeContext,
  ResultContext,
  ReturnStmtContext,
  SimpleStmtContext,
  StatementContext,
  TypeNameContext,
  VarDeclContext,
  VarDeclMultiContext,
  VarDeclSingleContext,
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
    return new SemanticNode(ctx).setParent(this.parent)
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
    const expr = ctx.primaryExpr()?.arrayExpr()
    if (expr) identifiers.push(...this.arrayExprContext(expr))
    const call = ctx.callChain()
    if (call) identifiers.push(...this.callChain(call))
    const ifStmt = ctx.ifStmt()
    if (ifStmt) identifiers.push(...this.ifStmtContext(ifStmt))
    const expression = ctx.expression()
    if (expression) expression.forEach((value) => identifiers.push(...this.expressionContext(value)))
    return identifiers
  }

  callChain(ctx: CallChainContext): Identifier[] {
    const identifiers: Identifier[] = []

    const varName = ctx.varName()
    if (varName) identifiers.push(<Identifier>this.varNameContext(varName).setSemanticsKind?.(SemanticsKind.Ref))

    const methodCall = ctx.methodCall()
    if (methodCall) identifiers.push(...this.methodCall(methodCall))

    let caller = identifiers[0]
    const callChains = ctx.callChain()
    if (callChains) {
      callChains.forEach((value) => {
        const callee = this.callChain(value)
        callee[0].setParent?.(caller) // TODO
        caller = callee[0]
        identifiers.push(...callee)
      })
    }
    return identifiers
  }

  methodCall(ctx: MethodCallContext): Identifier[] {
    const identifiers: Identifier[] = []
    identifiers.push(this.refNode(ctx.IDENTIFIER()).setIdentifierKind!(IdentifierKind.Method))
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
    identifiers.push(...this.blockContext(ctx.block()))
    const elseStmt = ctx.elseStmt()
    if (elseStmt) identifiers.push(...this.elseStmtContext(elseStmt))
    return identifiers
  }

  elseStmtContext(ctx: ElseStmtContext): Identifier[] {
    const identifiers: Identifier[] = []
    const block = ctx.block()
    if (block) identifiers.push(...this.blockContext(block))
    const ifStmt = ctx.ifStmt()
    if (ifStmt) identifiers.push(...this.ifStmtContext(ifStmt))
    return identifiers
  }

  blockContext(ctx: BlockContext): Identifier[] {
    return this.statementContexts(ctx.statement())
  }

  varDeclSingleContext(ctx: VarDeclSingleContext): Identifier[] {
    const identifiers: Identifier[] = []
    const value = new Variable(ctx.varName().IDENTIFIER())
    value.setRuleContext(ctx)
    value.setParent(this.parent)
    if (ctx.MUT()) value.isMut = true
    this.parent.add?.(value)
    identifiers.push(...this.expressionContext(ctx.expression()))
    return identifiers
  }

  varDeclMultiContext(ctx: VarDeclMultiContext): Identifier[] {
    const identifiers: Identifier[] = []
    ctx
      .identifierList()
      .varName()
      .forEach((varName) => {
        const value = new Variable(varName.IDENTIFIER())
        value.setRuleContext(ctx)
        value.setParent(this.parent)
        this.parent.add?.(value)
      })
    identifiers.push(...this.expressionContext(ctx.expression()))
    return identifiers
  }

  // todo
  varDeclContext(ctx: VarDeclContext): Identifier[] {
    const identifiers: Identifier[] = []
    const varDeclSingle = ctx.varDeclSingle()
    if (varDeclSingle) identifiers.push(...this.varDeclSingleContext(varDeclSingle))
    const varDeclMulti = ctx.varDeclMulti()
    if (varDeclMulti) identifiers.push(...this.varDeclMultiContext(varDeclMulti))
    return identifiers
  }

  // VarNameContext
  varNameContext(ctx: VarNameContext): Identifier {
    return <Identifier>this.defNode(ctx.IDENTIFIER()).setIdentifierKind?.(IdentifierKind.Variable)
  }

  simpleStmtContext(ctx: SimpleStmtContext): Identifier[] {
    const identifiers: Identifier[] = []
    const varDecl = ctx.varDecl()
    if (varDecl) identifiers.push(...this.varDeclContext(varDecl))
    const emit = ctx.emit()
    if (emit) identifiers.push(...this.emitContext(emit))
    const expression = ctx.expression()
    if (expression) identifiers.push(...this.expressionContext(expression))
    const returnStmt = ctx.returnStmt()
    if (returnStmt) identifiers.push(...this.returnStmtContext(returnStmt))
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

    const simpleStmt = ctx.simpleStmt()
    if (simpleStmt) identifiers.push(...this.simpleStmtContext(simpleStmt))

    const ifStmt = ctx.ifStmt()
    if (ifStmt) identifiers.push(...this.ifStmtContext(ifStmt))

    const whileStmt = ctx.whileStmt()
    if (whileStmt) identifiers.push(...this.whileStmtContext(whileStmt))

    const forStmt = ctx.forStmt()
    if (forStmt) identifiers.push(...this.forStmtContext(forStmt))

    return identifiers
  }
}
