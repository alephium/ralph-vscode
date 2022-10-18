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

export function refNode(ctx: TerminalNode): Identifier {
  const node = new SemanticNode(ctx)
  node.setSemanticsKind(SemanticsKind.Ref)
  return node
}

function typeNode(typeNode: TerminalNode): Identifier {
  return <Identifier>refNode(typeNode).setIdentifierKind?.(IdentifierKind.Type)
}

export function primitiveTypeContext(ctx: PrimitiveTypeContext): Identifier {
  const identifiers: Identifier[] = []
  const add = (node: TerminalNode | undefined) => {
    if (node) identifiers.push(typeNode(node))
  }
  add(ctx.I256())
  add(ctx.U256())
  add(ctx.BYTEVEC())
  add(ctx.ADDRESS())
  add(ctx.BYTE())
  add(ctx.BOOL())
  return identifiers[0]
}

export function typeNameContext(ctx: TypeNameContext): Identifier {
  const identifiers: Identifier[] = []
  const primitiveType = ctx.primitiveType()
  if (primitiveType) identifiers.push(primitiveTypeContext(primitiveType))
  const identifier = ctx.IDENTIFIER()
  if (identifier) identifiers.push(typeNode(identifier))
  return identifiers[0]
}

export function resultContext(ctx: ResultContext): Identifier[] {
  const identifiers: Identifier[] = []
  ctx.typeName().forEach((value) => identifiers.push(typeNameContext(value)))
  return identifiers
}

export function arrayExprContext(ctx: ArrayExprContext): Identifier[] {
  const identifiers: Identifier[] = []
  const identifier = ctx.IDENTIFIER()
  if (identifier) identifiers.push(<Identifier>refNode(identifier).setIdentifierKind?.(IdentifierKind.Variable))
  ctx.expression().forEach((value) => identifiers.push(...expressionContext(value)))
  return identifiers
}

export function expressionContext(ctx: ExpressionContext): Identifier[] {
  const identifiers = []
  const varName = ctx.varName()
  if (varName) identifiers.push(<Identifier>varNameContext(varName).setIdentifierKind?.(IdentifierKind.Variable))
  const expr = ctx.primaryExpr()?.arrayExpr()
  if (expr) identifiers.push(...arrayExprContext(expr))
  const call = ctx.call()
  if (call) identifiers.push(...callContext(call))
  return identifiers
}

export function callContext(ctx: CallContext): Identifier[] {
  // TODO
  const identifiers: Identifier[] = []
  ctx
    .callChain()
    .varNames()
    .IDENTIFIER()
    .forEach((value) => identifiers.push(refNode(value)))
  identifiers.push(...expressionListContext(ctx.expressionList()))
  return identifiers
}

export function expressionListContext(ctx: ExpressionListContext): Identifier[] {
  const identifiers: Identifier[] = []
  ctx.expression().forEach((value) => identifiers.push(...expressionContext(value)))
  return identifiers
}

export function emitContext(ctx: EmitContext): Identifier[] {
  const identifiers: Identifier[] = []
  identifiers.push(refNode(ctx.IDENTIFIER()))
  identifiers.push(...expressionListContext(ctx.expressionList()))
  return identifiers
}

export function returnStmtContext(ctx: ReturnStmtContext): Identifier[] {
  const identifiers: Identifier[] = []
  identifiers.push(...expressionListContext(ctx.expressionList()))
  return identifiers
}

export function ifStmtContext(ctx: IfStmtContext): Identifier[] {
  const identifiers: Identifier[] = []
  identifiers.push(...expressionContext(ctx.expression()))
  ctx.block().forEach((value) => identifiers.push(...blockContext(value)))
  const ifStmt = ctx.ifStmt()
  if (ifStmt) identifiers.push(...ifStmtContext(ifStmt))
  return identifiers
}

export function blockContext(ctx: BlockContext): Identifier[] {
  const identifiers: Identifier[] = []
  ctx.statement().forEach((value) => identifiers.push(...statementContext(value)))
  return identifiers
}

// todo
export function varDeclContext(ctx: VarDeclContext): Identifier[] {
  const identifiers: Identifier[] = []
  const varName = ctx.varName()
  if (varName) identifiers.push(<Identifier>varNameContext(varName))
  const expression = ctx.expression()
  if (expression) identifiers.push(...expressionContext(expression))
  ctx
    .identifierList()
    ?.varName()
    .forEach((value) => identifiers.push(<Identifier>varNameContext(value)))
  return identifiers
}

// VarNameContext
export function varNameContext(ctx: VarNameContext): Identifier {
  return <Identifier>refNode(ctx.IDENTIFIER()).setIdentifierKind?.(IdentifierKind.Variable).setSemanticsKind?.(SemanticsKind.Def)
}

export function simpleStmtContext(ctx: SimpleStmtContext): Identifier[] {
  const identifiers: Identifier[] = []
  const emit = ctx.emit()
  if (emit) identifiers.push(...emitContext(emit))
  const expression = ctx.expression()
  if (expression) identifiers.push(...expressionContext(expression))
  const varDecl = ctx.varDecl()
  if (varDecl) identifiers.push(...varDeclContext(varDecl))
  return identifiers
}

export function whileStmtContext(ctx: WhileStmtContext): Identifier[] {
  const identifiers: Identifier[] = []
  const expression = ctx.expression()
  if (expression) identifiers.push(...expressionContext(expression))
  identifiers.push(...blockContext(ctx.block()))
  return identifiers
}

export function forStmtContext(ctx: ForStmtContext): Identifier[] {
  const identifiers: Identifier[] = []
  const varName = ctx.varName()
  if (varName) identifiers.push(varNameContext(varName))
  ctx.expression().forEach((expression) => identifiers.push(...expressionContext(expression)))
  identifiers.push(...blockContext(ctx.block()))
  return identifiers
}

export function statementContext(ctx: StatementContext): Identifier[] {
  const identifiers: Identifier[] = []
  const ifStmt = ctx.ifStmt()
  if (ifStmt) identifiers.push(...ifStmtContext(ifStmt))
  const simpleStmt = ctx.simpleStmt()
  if (simpleStmt) identifiers.push(...simpleStmtContext(simpleStmt))
  const whileStmt = ctx.whileStmt()
  if (whileStmt) identifiers.push(...whileStmtContext(whileStmt))
  const block = ctx.block()
  if (block) identifiers.push(...blockContext(block))
  const returnStmt = ctx.returnStmt()
  if (returnStmt) identifiers.push(...returnStmtContext(returnStmt))
  return identifiers
}
