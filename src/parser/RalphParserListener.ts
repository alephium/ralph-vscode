// Generated from ./src/parser/RalphParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
import { ApsAlphContext } from "./RalphParser";
import { ApsTokenContext } from "./RalphParser";
import { ApsBothContext } from "./RalphParser";
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
import { WhileStmtContext } from "./RalphParser";
import { ForStmtContext } from "./RalphParser";
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
	 * Enter a parse tree produced by `RalphParser.varDeclSingle`.
	 * @param ctx the parse tree
	 */
	enterVarDeclSingle?: (ctx: VarDeclSingleContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.varDeclSingle`.
	 * @param ctx the parse tree
	 */
	exitVarDeclSingle?: (ctx: VarDeclSingleContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.varDeclMulti`.
	 * @param ctx the parse tree
	 */
	enterVarDeclMulti?: (ctx: VarDeclMultiContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.varDeclMulti`.
	 * @param ctx the parse tree
	 */
	exitVarDeclMulti?: (ctx: VarDeclMultiContext) => void;

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
	 * Enter a parse tree produced by `RalphParser.methodCall`.
	 * @param ctx the parse tree
	 */
	enterMethodCall?: (ctx: MethodCallContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.methodCall`.
	 * @param ctx the parse tree
	 */
	exitMethodCall?: (ctx: MethodCallContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.apsAlph`.
	 * @param ctx the parse tree
	 */
	enterApsAlph?: (ctx: ApsAlphContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.apsAlph`.
	 * @param ctx the parse tree
	 */
	exitApsAlph?: (ctx: ApsAlphContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.apsToken`.
	 * @param ctx the parse tree
	 */
	enterApsToken?: (ctx: ApsTokenContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.apsToken`.
	 * @param ctx the parse tree
	 */
	exitApsToken?: (ctx: ApsTokenContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.apsBoth`.
	 * @param ctx the parse tree
	 */
	enterApsBoth?: (ctx: ApsBothContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.apsBoth`.
	 * @param ctx the parse tree
	 */
	exitApsBoth?: (ctx: ApsBothContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.aps`.
	 * @param ctx the parse tree
	 */
	enterAps?: (ctx: ApsContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.aps`.
	 * @param ctx the parse tree
	 */
	exitAps?: (ctx: ApsContext) => void;

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
	 * Enter a parse tree produced by `RalphParser.varNameAssign`.
	 * @param ctx the parse tree
	 */
	enterVarNameAssign?: (ctx: VarNameAssignContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.varNameAssign`.
	 * @param ctx the parse tree
	 */
	exitVarNameAssign?: (ctx: VarNameAssignContext) => void;

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
	 * Enter a parse tree produced by `RalphParser.assetScript`.
	 * @param ctx the parse tree
	 */
	enterAssetScript?: (ctx: AssetScriptContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.assetScript`.
	 * @param ctx the parse tree
	 */
	exitAssetScript?: (ctx: AssetScriptContext) => void;

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
	 * Enter a parse tree produced by `RalphParser.extends`.
	 * @param ctx the parse tree
	 */
	enterExtends?: (ctx: ExtendsContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.extends`.
	 * @param ctx the parse tree
	 */
	exitExtends?: (ctx: ExtendsContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.contractExtends`.
	 * @param ctx the parse tree
	 */
	enterContractExtends?: (ctx: ContractExtendsContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.contractExtends`.
	 * @param ctx the parse tree
	 */
	exitContractExtends?: (ctx: ContractExtendsContext) => void;

	/**
	 * Enter a parse tree produced by `RalphParser.implements`.
	 * @param ctx the parse tree
	 */
	enterImplements?: (ctx: ImplementsContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.implements`.
	 * @param ctx the parse tree
	 */
	exitImplements?: (ctx: ImplementsContext) => void;

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
	 * Enter a parse tree produced by `RalphParser.forStmt`.
	 * @param ctx the parse tree
	 */
	enterForStmt?: (ctx: ForStmtContext) => void;
	/**
	 * Exit a parse tree produced by `RalphParser.forStmt`.
	 * @param ctx the parse tree
	 */
	exitForStmt?: (ctx: ForStmtContext) => void;

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

