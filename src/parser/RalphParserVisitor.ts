// Generated from ./src/parser/RalphParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SourceFileContext } from "./RalphParser";
import { IdentifierListContext } from "./RalphParser";
import { VarDeclSingleContext } from "./RalphParser";
import { VarDeclMultiContext } from "./RalphParser";
import { VarDeclContext } from "./RalphParser";
import { VarNameContext } from "./RalphParser";
import { ExpressionContext } from "./RalphParser";
import { ExpressionListContext } from "./RalphParser";
import { CallChainContext } from "./RalphParser";
import { MethodCallContext } from "./RalphParser";
import { PayerContext } from "./RalphParser";
import { ApsTokenIdContext } from "./RalphParser";
import { ApsContext } from "./RalphParser";
import { PrimaryExprContext } from "./RalphParser";
import { PrimitiveTypeContext } from "./RalphParser";
import { ArrayTypeContext } from "./RalphParser";
import { ArrayExprContext } from "./RalphParser";
import { TypeNameContext } from "./RalphParser";
import { ResultContext } from "./RalphParser";
import { ParamContext } from "./RalphParser";
import { ParamListContext } from "./RalphParser";
import { MethodDeclContext } from "./RalphParser";
import { BasicLitContext } from "./RalphParser";
import { IntegerContext } from "./RalphParser";
import { String_Context } from "./RalphParser";
import { VarNameAssignContext } from "./RalphParser";
import { EnumContext } from "./RalphParser";
import { TypeStructBodyContext } from "./RalphParser";
import { TxScriptContext } from "./RalphParser";
import { AssetScriptContext } from "./RalphParser";
import { ImportStmtContext } from "./RalphParser";
import { ContractContext } from "./RalphParser";
import { ExtendsContext } from "./RalphParser";
import { ContractExtendsContext } from "./RalphParser";
import { ImplementsContext } from "./RalphParser";
import { InterfaceContext } from "./RalphParser";
import { EventContext } from "./RalphParser";
import { EmitContext } from "./RalphParser";
import { AnnotationContext } from "./RalphParser";
import { BlockContext } from "./RalphParser";
import { StatementContext } from "./RalphParser";
import { SimpleStmtContext } from "./RalphParser";
import { EmptyStmtContext } from "./RalphParser";
import { ReturnStmtContext } from "./RalphParser";
import { IfStmtContext } from "./RalphParser";
import { ElseStmtContext } from "./RalphParser";
import { WhileStmtContext } from "./RalphParser";
import { ForStmtContext } from "./RalphParser";
import { EosContext } from "./RalphParser";


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
	visitSourceFile?: (ctx: SourceFileContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.varDeclSingle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDeclSingle?: (ctx: VarDeclSingleContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.varDeclMulti`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDeclMulti?: (ctx: VarDeclMultiContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.varDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDecl?: (ctx: VarDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.varName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarName?: (ctx: VarNameContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.callChain`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallChain?: (ctx: CallChainContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.methodCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodCall?: (ctx: MethodCallContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.payer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPayer?: (ctx: PayerContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.apsTokenId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApsTokenId?: (ctx: ApsTokenIdContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.aps`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAps?: (ctx: ApsContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.primaryExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpr?: (ctx: PrimaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.arrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.arrayExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayExpr?: (ctx: ArrayExprContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.result`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResult?: (ctx: ResultContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam?: (ctx: ParamContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.paramList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamList?: (ctx: ParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.methodDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDecl?: (ctx: MethodDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.basicLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicLit?: (ctx: BasicLitContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.string_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_?: (ctx: String_Context) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.varNameAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarNameAssign?: (ctx: VarNameAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.enum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum?: (ctx: EnumContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.typeStructBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeStructBody?: (ctx: TypeStructBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.txScript`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTxScript?: (ctx: TxScriptContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.assetScript`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssetScript?: (ctx: AssetScriptContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.importStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStmt?: (ctx: ImportStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.contract`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContract?: (ctx: ContractContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.extends`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtends?: (ctx: ExtendsContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.contractExtends`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContractExtends?: (ctx: ContractExtendsContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.implements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplements?: (ctx: ImplementsContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.interface`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterface?: (ctx: InterfaceContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.event`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent?: (ctx: EventContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.emit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmit?: (ctx: EmitContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.simpleStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleStmt?: (ctx: SimpleStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.emptyStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStmt?: (ctx: EmptyStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.returnStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.ifStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt?: (ctx: IfStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.elseStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseStmt?: (ctx: ElseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.whileStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStmt?: (ctx: WhileStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.forStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStmt?: (ctx: ForStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.eos`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEos?: (ctx: EosContext) => Result;
}

