// Generated from ./src/parser/RalphParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SourceFileContext } from "./RalphParser";
import { IdentifierListContext } from "./RalphParser";
import { VarDeclContext } from "./RalphParser";
import { VarNameContext } from "./RalphParser";
import { VarNamesContext } from "./RalphParser";
import { ExpressionContext } from "./RalphParser";
import { ExpressionListContext } from "./RalphParser";
import { CallChainContext } from "./RalphParser";
import { CallContext } from "./RalphParser";
import { PrimaryExprContext } from "./RalphParser";
import { PrimitiveTypeContext } from "./RalphParser";
import { ArrayTypeContext } from "./RalphParser";
import { ArrayExprContext } from "./RalphParser";
import { TypeNameContext } from "./RalphParser";
import { ResultContext } from "./RalphParser";
import { ParamAnnotationContext } from "./RalphParser";
import { ParamContext } from "./RalphParser";
import { ParamListContext } from "./RalphParser";
import { MethodDeclContext } from "./RalphParser";
import { BasicLitContext } from "./RalphParser";
import { IntegerContext } from "./RalphParser";
import { String_Context } from "./RalphParser";
import { EnumContext } from "./RalphParser";
import { TypeStructBodyContext } from "./RalphParser";
import { TxScriptContext } from "./RalphParser";
import { ContractContext } from "./RalphParser";
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
import { WhileStmtContext } from "./RalphParser";
import { EosContext } from "./RalphParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `RalphParser`.
 */
export interface RalphParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `RalphParser.sourceFile`.
	 * @param ctx the parse tree
	 */
	enterSourceFile?: (ctx: SourceFileContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.sourceFile`.
	 * @param ctx the parse tree
	 */
	exitSourceFile?: (ctx: SourceFileContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.identifierList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.identifierList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierList?: (ctx: IdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.varDecl`.
	 * @param ctx the parse tree
	 */
	enterVarDecl?: (ctx: VarDeclContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.varDecl`.
	 * @param ctx the parse tree
	 */
	exitVarDecl?: (ctx: VarDeclContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.varName`.
	 * @param ctx the parse tree
	 */
	enterVarName?: (ctx: VarNameContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.varName`.
	 * @param ctx the parse tree
	 */
	exitVarName?: (ctx: VarNameContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.varNames`.
	 * @param ctx the parse tree
	 */
	enterVarNames?: (ctx: VarNamesContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.varNames`.
	 * @param ctx the parse tree
	 */
	exitVarNames?: (ctx: VarNamesContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.callChain`.
	 * @param ctx the parse tree
	 */
	enterCallChain?: (ctx: CallChainContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.callChain`.
	 * @param ctx the parse tree
	 */
	exitCallChain?: (ctx: CallChainContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.call`.
	 * @param ctx the parse tree
	 */
	enterCall?: (ctx: CallContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.call`.
	 * @param ctx the parse tree
	 */
	exitCall?: (ctx: CallContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.primaryExpr`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpr?: (ctx: PrimaryExprContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.primaryExpr`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpr?: (ctx: PrimaryExprContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.arrayType`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.arrayType`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.arrayExpr`.
	 * @param ctx the parse tree
	 */
	enterArrayExpr?: (ctx: ArrayExprContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.arrayExpr`.
	 * @param ctx the parse tree
	 */
	exitArrayExpr?: (ctx: ArrayExprContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.typeName`.
	 * @param ctx the parse tree
	 */
	enterTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.typeName`.
	 * @param ctx the parse tree
	 */
	exitTypeName?: (ctx: TypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.result`.
	 * @param ctx the parse tree
	 */
	enterResult?: (ctx: ResultContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.result`.
	 * @param ctx the parse tree
	 */
	exitResult?: (ctx: ResultContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.paramAnnotation`.
	 * @param ctx the parse tree
	 */
	enterParamAnnotation?: (ctx: ParamAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.paramAnnotation`.
	 * @param ctx the parse tree
	 */
	exitParamAnnotation?: (ctx: ParamAnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.paramList`.
	 * @param ctx the parse tree
	 */
	enterParamList?: (ctx: ParamListContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.paramList`.
	 * @param ctx the parse tree
	 */
	exitParamList?: (ctx: ParamListContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.methodDecl`.
	 * @param ctx the parse tree
	 */
	enterMethodDecl?: (ctx: MethodDeclContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.methodDecl`.
	 * @param ctx the parse tree
	 */
	exitMethodDecl?: (ctx: MethodDeclContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.basicLit`.
	 * @param ctx the parse tree
	 */
	enterBasicLit?: (ctx: BasicLitContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.basicLit`.
	 * @param ctx the parse tree
	 */
	exitBasicLit?: (ctx: BasicLitContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.integer`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.integer`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.string_`.
	 * @param ctx the parse tree
	 */
	enterString_?: (ctx: String_Context) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.string_`.
	 * @param ctx the parse tree
	 */
	exitString_?: (ctx: String_Context) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.enum`.
	 * @param ctx the parse tree
	 */
	enterEnum?: (ctx: EnumContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.enum`.
	 * @param ctx the parse tree
	 */
	exitEnum?: (ctx: EnumContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.typeStructBody`.
	 * @param ctx the parse tree
	 */
	enterTypeStructBody?: (ctx: TypeStructBodyContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.typeStructBody`.
	 * @param ctx the parse tree
	 */
	exitTypeStructBody?: (ctx: TypeStructBodyContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.txScript`.
	 * @param ctx the parse tree
	 */
	enterTxScript?: (ctx: TxScriptContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.txScript`.
	 * @param ctx the parse tree
	 */
	exitTxScript?: (ctx: TxScriptContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.contract`.
	 * @param ctx the parse tree
	 */
	enterContract?: (ctx: ContractContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.contract`.
	 * @param ctx the parse tree
	 */
	exitContract?: (ctx: ContractContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.interface`.
	 * @param ctx the parse tree
	 */
	enterInterface?: (ctx: InterfaceContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.interface`.
	 * @param ctx the parse tree
	 */
	exitInterface?: (ctx: InterfaceContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.event`.
	 * @param ctx the parse tree
	 */
	enterEvent?: (ctx: EventContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.event`.
	 * @param ctx the parse tree
	 */
	exitEvent?: (ctx: EventContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.emit`.
	 * @param ctx the parse tree
	 */
	enterEmit?: (ctx: EmitContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.emit`.
	 * @param ctx the parse tree
	 */
	exitEmit?: (ctx: EmitContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.simpleStmt`.
	 * @param ctx the parse tree
	 */
	enterSimpleStmt?: (ctx: SimpleStmtContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.simpleStmt`.
	 * @param ctx the parse tree
	 */
	exitSimpleStmt?: (ctx: SimpleStmtContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.emptyStmt`.
	 * @param ctx the parse tree
	 */
	enterEmptyStmt?: (ctx: EmptyStmtContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.emptyStmt`.
	 * @param ctx the parse tree
	 */
	exitEmptyStmt?: (ctx: EmptyStmtContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	enterReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	exitReturnStmt?: (ctx: ReturnStmtContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	enterIfStmt?: (ctx: IfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	exitIfStmt?: (ctx: IfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.whileStmt`.
	 * @param ctx the parse tree
	 */
	enterWhileStmt?: (ctx: WhileStmtContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.whileStmt`.
	 * @param ctx the parse tree
	 */
	exitWhileStmt?: (ctx: WhileStmtContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.eos`.
	 * @param ctx the parse tree
	 */
	enterEos?: (ctx: EosContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.eos`.
	 * @param ctx the parse tree
	 */
	exitEos?: (ctx: EosContext) => void;
}

