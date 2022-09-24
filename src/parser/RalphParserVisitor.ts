// Generated from ./src/parser/RalphParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'

import {
  SourceFileContext,
  ImportDeclContext,
  DeclarationContext,
  IdentifierListContext,
  VarDeclContext,
  ExpressionContext,
  ExpressionListContext,
  MethodCallContext,
  PrimaryExprContext,
  PrimitiveTypeContext,
  ArrayTypeContext,
  ArrayExprContext,
  Type_Context,
  TypeDeclStmtContext,
  ResultContext,
  ParamAnnotationContext,
  ParamContext,
  ParamListContext,
  MethodDeclContext,
  BasicLitContext,
  IntegerContext,
  String_Context,
  TypeStructContext,
  TypeStructBodyContext,
  TxScriptContext,
  ContractContext,
  InterfaceContext,
  EventContext,
  EmitContext,
  AnnotationContext,
  BlockContext,
  StatementContext,
  SimpleStmtContext,
  ExpressionStmtContext,
  EmptyStmtContext,
  ReturnStmtContext,
  IfStmtContext,
  WhileStmtContext,
  EosContext,
} from './RalphParser'

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RalphParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface RalphParserVisitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by `RalphParser.sourceFile`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSourceFile?: (ctx: SourceFileContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.importDecl`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitImportDecl?: (ctx: ImportDeclContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclaration?: (ctx: DeclarationContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.identifierList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdentifierList?: (ctx: IdentifierListContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.varDecl`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVarDecl?: (ctx: VarDeclContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression?: (ctx: ExpressionContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.expressionList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionList?: (ctx: ExpressionListContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.methodCall`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMethodCall?: (ctx: MethodCallContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.primaryExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimaryExpr?: (ctx: PrimaryExprContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.primitiveType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.arrayType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArrayType?: (ctx: ArrayTypeContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.arrayExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArrayExpr?: (ctx: ArrayExprContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.type_`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitType_?: (ctx: Type_Context) => Result

  /**
   * Visit a parse tree produced by `RalphParser.typeDeclStmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeDeclStmt?: (ctx: TypeDeclStmtContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.result`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitResult?: (ctx: ResultContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.paramAnnotation`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParamAnnotation?: (ctx: ParamAnnotationContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.param`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParam?: (ctx: ParamContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.paramList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParamList?: (ctx: ParamListContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.methodDecl`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMethodDecl?: (ctx: MethodDeclContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.basicLit`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBasicLit?: (ctx: BasicLitContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.integer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInteger?: (ctx: IntegerContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.string_`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitString_?: (ctx: String_Context) => Result

  /**
   * Visit a parse tree produced by `RalphParser.typeStruct`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeStruct?: (ctx: TypeStructContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.typeStructBody`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeStructBody?: (ctx: TypeStructBodyContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.txScript`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTxScript?: (ctx: TxScriptContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.contract`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitContract?: (ctx: ContractContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.interface`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInterface?: (ctx: InterfaceContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.event`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEvent?: (ctx: EventContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.emit`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEmit?: (ctx: EmitContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.annotation`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAnnotation?: (ctx: AnnotationContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.block`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBlock?: (ctx: BlockContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatement?: (ctx: StatementContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.simpleStmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSimpleStmt?: (ctx: SimpleStmtContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.expressionStmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionStmt?: (ctx: ExpressionStmtContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.emptyStmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEmptyStmt?: (ctx: EmptyStmtContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.returnStmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitReturnStmt?: (ctx: ReturnStmtContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.ifStmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIfStmt?: (ctx: IfStmtContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.whileStmt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWhileStmt?: (ctx: WhileStmtContext) => Result

  /**
   * Visit a parse tree produced by `RalphParser.eos`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEos?: (ctx: EosContext) => Result
}
