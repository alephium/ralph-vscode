// Generated from ./src/parser/RalphParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { RalphParserListener } from "./RalphParserListener";
import { RalphParserVisitor } from "./RalphParserVisitor";


export class RalphParser extends Parser {
	public static readonly FN = 1;
	public static readonly PUB = 2;
	public static readonly RETURN = 3;
	public static readonly INTERFACE = 4;
	public static readonly ENUM = 5;
	public static readonly TXSCRIPT = 6;
	public static readonly CONTRACT = 7;
	public static readonly ASSETSCRIPT = 8;
	public static readonly IMPORT = 9;
	public static readonly IF = 10;
	public static readonly ELSE = 11;
	public static readonly WHILE = 12;
	public static readonly FOR = 13;
	public static readonly LET = 14;
	public static readonly CONST = 15;
	public static readonly MUT = 16;
	public static readonly EXTENDS = 17;
	public static readonly ABSTRACT = 18;
	public static readonly IMPLEMENTS = 19;
	public static readonly EVENT = 20;
	public static readonly EMIT = 21;
	public static readonly ATUSING = 22;
	public static readonly USING = 23;
	public static readonly AT = 24;
	public static readonly BOOL = 25;
	public static readonly I256 = 26;
	public static readonly U256 = 27;
	public static readonly BYTE = 28;
	public static readonly BYTEVEC = 29;
	public static readonly ADDRESS = 30;
	public static readonly ATUNUSED = 31;
	public static readonly UNUSED = 32;
	public static readonly R_ARROW = 33;
	public static readonly IDENTIFIER = 34;
	public static readonly IMPORT_PATH = 35;
	public static readonly L_PAREN = 36;
	public static readonly R_PAREN = 37;
	public static readonly L_CURLY = 38;
	public static readonly R_CURLY = 39;
	public static readonly L_BRACKET = 40;
	public static readonly R_BRACKET = 41;
	public static readonly ASSIGN = 42;
	public static readonly COMMA = 43;
	public static readonly SEMI = 44;
	public static readonly COLON = 45;
	public static readonly DOT = 46;
	public static readonly POUND = 47;
	public static readonly DOUBT = 48;
	public static readonly CONCAT = 49;
	public static readonly ADD = 50;
	public static readonly SUB = 51;
	public static readonly MUL = 52;
	public static readonly DIV = 53;
	public static readonly MOD = 54;
	public static readonly EXP = 55;
	public static readonly MOD_EXP = 56;
	public static readonly MODADD = 57;
	public static readonly MODSUB = 58;
	public static readonly MODMUL = 59;
	public static readonly SHL = 60;
	public static readonly SHR = 61;
	public static readonly BITAND = 62;
	public static readonly XOR = 63;
	public static readonly BITOR = 64;
	public static readonly EQ = 65;
	public static readonly NQ = 66;
	public static readonly LT = 67;
	public static readonly LE = 68;
	public static readonly GT = 69;
	public static readonly GE = 70;
	public static readonly AND = 71;
	public static readonly OR = 72;
	public static readonly NOT = 73;
	public static readonly ALPH = 74;
	public static readonly ALPH_TOKEN_ID = 75;
	public static readonly ADDRESS_LIT = 76;
	public static readonly ALPH_LIT = 77;
	public static readonly BOOL_LIT = 78;
	public static readonly BYTEVEC_LIT = 79;
	public static readonly DECIMAL_LIT = 80;
	public static readonly BINARY_LIT = 81;
	public static readonly OCTAL_LIT = 82;
	public static readonly HEX_LIT = 83;
	public static readonly FLOAT_LIT = 84;
	public static readonly DECIMAL_FLOAT_LIT = 85;
	public static readonly HEX_FLOAT_LIT = 86;
	public static readonly IMAGINARY_LIT = 87;
	public static readonly RUNE_LIT = 88;
	public static readonly BYTE_VALUE = 89;
	public static readonly OCTAL_BYTE_VALUE = 90;
	public static readonly HEX_BYTE_VALUE = 91;
	public static readonly LITTLE_U_VALUE = 92;
	public static readonly BIG_U_VALUE = 93;
	public static readonly RAW_STRING_LIT = 94;
	public static readonly INTERPRETED_STRING_LIT = 95;
	public static readonly WS = 96;
	public static readonly COMMENT = 97;
	public static readonly LINE_COMMENT = 98;
	public static readonly TERMINATOR = 99;
	public static readonly EOS = 100;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_identifierList = 1;
	public static readonly RULE_varDeclSingle = 2;
	public static readonly RULE_varDeclMulti = 3;
	public static readonly RULE_varDecl = 4;
	public static readonly RULE_varName = 5;
	public static readonly RULE_expression = 6;
	public static readonly RULE_expressionList = 7;
	public static readonly RULE_callChain = 8;
	public static readonly RULE_methodCall = 9;
	public static readonly RULE_payer = 10;
	public static readonly RULE_apsTokenId = 11;
	public static readonly RULE_aps = 12;
	public static readonly RULE_primaryExpr = 13;
	public static readonly RULE_primitiveType = 14;
	public static readonly RULE_arrayType = 15;
	public static readonly RULE_arrayExpr = 16;
	public static readonly RULE_typeName = 17;
	public static readonly RULE_result = 18;
	public static readonly RULE_param = 19;
	public static readonly RULE_paramList = 20;
	public static readonly RULE_methodDecl = 21;
	public static readonly RULE_basicLit = 22;
	public static readonly RULE_integer = 23;
	public static readonly RULE_string_ = 24;
	public static readonly RULE_varNameAssign = 25;
	public static readonly RULE_enum = 26;
	public static readonly RULE_typeStructBody = 27;
	public static readonly RULE_txScript = 28;
	public static readonly RULE_assetScript = 29;
	public static readonly RULE_importStmt = 30;
	public static readonly RULE_contract = 31;
	public static readonly RULE_extends = 32;
	public static readonly RULE_contractExtends = 33;
	public static readonly RULE_implements = 34;
	public static readonly RULE_interface = 35;
	public static readonly RULE_event = 36;
	public static readonly RULE_emit = 37;
	public static readonly RULE_annotation = 38;
	public static readonly RULE_block = 39;
	public static readonly RULE_statement = 40;
	public static readonly RULE_simpleStmt = 41;
	public static readonly RULE_emptyStmt = 42;
	public static readonly RULE_returnStmt = 43;
	public static readonly RULE_ifStmt = 44;
	public static readonly RULE_elseStmt = 45;
	public static readonly RULE_whileStmt = 46;
	public static readonly RULE_forStmt = 47;
	public static readonly RULE_eos = 48;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "identifierList", "varDeclSingle", "varDeclMulti", "varDecl", 
		"varName", "expression", "expressionList", "callChain", "methodCall", 
		"payer", "apsTokenId", "aps", "primaryExpr", "primitiveType", "arrayType", 
		"arrayExpr", "typeName", "result", "param", "paramList", "methodDecl", 
		"basicLit", "integer", "string_", "varNameAssign", "enum", "typeStructBody", 
		"txScript", "assetScript", "importStmt", "contract", "extends", "contractExtends", 
		"implements", "interface", "event", "emit", "annotation", "block", "statement", 
		"simpleStmt", "emptyStmt", "returnStmt", "ifStmt", "elseStmt", "whileStmt", 
		"forStmt", "eos",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'fn'", "'pub'", "'return'", "'Interface'", "'enum'", "'TxScript'", 
		"'Contract'", "'AssetScript'", "'import'", "'if'", "'else'", "'while'", 
		"'for'", "'let'", "'const'", "'mut'", "'extends'", "'Abstract'", "'implements'", 
		"'event'", "'emit'", "'@using'", "'using'", "'@'", "'Bool'", "'I256'", 
		"'U256'", "'Byte'", "'ByteVec'", "'Address'", "'@unused'", "'unused'", 
		"'->'", undefined, undefined, "'('", "')'", "'{'", "'}'", "'['", "']'", 
		"'='", "','", "';'", "':'", "'.'", "'#'", "'?'", "'++'", "'+'", "'-'", 
		"'*'", "'/'", "'%'", "'**'", "'|**|'", undefined, undefined, undefined, 
		"'<<'", "'>>'", "'&'", "'^'", "'|'", "'=='", "'!='", "'<'", "'<='", "'>'", 
		"'>='", "'&&'", "'||'", "'!'", "'alph'", "'ALPH'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "FN", "PUB", "RETURN", "INTERFACE", "ENUM", "TXSCRIPT", "CONTRACT", 
		"ASSETSCRIPT", "IMPORT", "IF", "ELSE", "WHILE", "FOR", "LET", "CONST", 
		"MUT", "EXTENDS", "ABSTRACT", "IMPLEMENTS", "EVENT", "EMIT", "ATUSING", 
		"USING", "AT", "BOOL", "I256", "U256", "BYTE", "BYTEVEC", "ADDRESS", "ATUNUSED", 
		"UNUSED", "R_ARROW", "IDENTIFIER", "IMPORT_PATH", "L_PAREN", "R_PAREN", 
		"L_CURLY", "R_CURLY", "L_BRACKET", "R_BRACKET", "ASSIGN", "COMMA", "SEMI", 
		"COLON", "DOT", "POUND", "DOUBT", "CONCAT", "ADD", "SUB", "MUL", "DIV", 
		"MOD", "EXP", "MOD_EXP", "MODADD", "MODSUB", "MODMUL", "SHL", "SHR", "BITAND", 
		"XOR", "BITOR", "EQ", "NQ", "LT", "LE", "GT", "GE", "AND", "OR", "NOT", 
		"ALPH", "ALPH_TOKEN_ID", "ADDRESS_LIT", "ALPH_LIT", "BOOL_LIT", "BYTEVEC_LIT", 
		"DECIMAL_LIT", "BINARY_LIT", "OCTAL_LIT", "HEX_LIT", "FLOAT_LIT", "DECIMAL_FLOAT_LIT", 
		"HEX_FLOAT_LIT", "IMAGINARY_LIT", "RUNE_LIT", "BYTE_VALUE", "OCTAL_BYTE_VALUE", 
		"HEX_BYTE_VALUE", "LITTLE_U_VALUE", "BIG_U_VALUE", "RAW_STRING_LIT", "INTERPRETED_STRING_LIT", 
		"WS", "COMMENT", "LINE_COMMENT", "TERMINATOR", "EOS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RalphParser._LITERAL_NAMES, RalphParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return RalphParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "RalphParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return RalphParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return RalphParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(RalphParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourceFile(): SourceFileContext {
		let _localctx: SourceFileContext = new SourceFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, RalphParser.RULE_sourceFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.INTERFACE) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.ASSETSCRIPT) | (1 << RalphParser.IMPORT) | (1 << RalphParser.ABSTRACT))) !== 0)) {
				{
				this.state = 102;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RalphParser.TXSCRIPT:
					{
					this.state = 98;
					this.txScript();
					}
					break;
				case RalphParser.CONTRACT:
				case RalphParser.IMPORT:
				case RalphParser.ABSTRACT:
					{
					this.state = 99;
					this.contract();
					}
					break;
				case RalphParser.INTERFACE:
					{
					this.state = 100;
					this.interface();
					}
					break;
				case RalphParser.ASSETSCRIPT:
					{
					this.state = 101;
					this.assetScript();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 107;
			this.match(RalphParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, RalphParser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.varName();
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 110;
				this.match(RalphParser.COMMA);
				this.state = 111;
				this.varName();
				}
				}
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varDeclSingle(): VarDeclSingleContext {
		let _localctx: VarDeclSingleContext = new VarDeclSingleContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RalphParser.RULE_varDeclSingle);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.CONST:
				{
				this.state = 117;
				this.match(RalphParser.CONST);
				}
				break;
			case RalphParser.LET:
				{
				{
				this.state = 118;
				this.match(RalphParser.LET);
				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.MUT) {
					{
					this.state = 119;
					this.match(RalphParser.MUT);
					}
				}

				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 124;
			this.varName();
			this.state = 125;
			this.match(RalphParser.ASSIGN);
			this.state = 126;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varDeclMulti(): VarDeclMultiContext {
		let _localctx: VarDeclMultiContext = new VarDeclMultiContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RalphParser.RULE_varDeclMulti);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.CONST:
				{
				this.state = 128;
				this.match(RalphParser.CONST);
				}
				break;
			case RalphParser.LET:
				{
				{
				this.state = 129;
				this.match(RalphParser.LET);
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.MUT) {
					{
					this.state = 130;
					this.match(RalphParser.MUT);
					}
				}

				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 135;
			this.match(RalphParser.L_PAREN);
			this.state = 136;
			this.identifierList();
			this.state = 137;
			this.match(RalphParser.R_PAREN);
			this.state = 138;
			this.match(RalphParser.ASSIGN);
			this.state = 139;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varDecl(): VarDeclContext {
		let _localctx: VarDeclContext = new VarDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, RalphParser.RULE_varDecl);
		try {
			this.state = 143;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 141;
				this.varDeclSingle();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 142;
				this.varDeclMulti();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varName(): VarNameContext {
		let _localctx: VarNameContext = new VarNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, RalphParser.RULE_varName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.match(RalphParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, RalphParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 148;
				this.primaryExpr();
				}
				break;

			case 2:
				{
				this.state = 149;
				this.callChain();
				}
				break;

			case 3:
				{
				this.state = 150;
				this.ifStmt();
				}
				break;

			case 4:
				{
				this.state = 151;
				this.match(RalphParser.L_PAREN);
				this.state = 152;
				this.expression(0);
				this.state = 153;
				this.match(RalphParser.R_PAREN);
				}
				break;

			case 5:
				{
				this.state = 155;
				_la = this._input.LA(1);
				if (!(_la === RalphParser.SUB || _la === RalphParser.NOT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 156;
				this.expression(5);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 173;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 171;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 159;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 160;
						_la = this._input.LA(1);
						if (!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (RalphParser.CONCAT - 49)) | (1 << (RalphParser.ADD - 49)) | (1 << (RalphParser.SUB - 49)) | (1 << (RalphParser.MUL - 49)) | (1 << (RalphParser.DIV - 49)) | (1 << (RalphParser.MOD - 49)) | (1 << (RalphParser.EXP - 49)) | (1 << (RalphParser.MOD_EXP - 49)) | (1 << (RalphParser.MODADD - 49)) | (1 << (RalphParser.MODSUB - 49)) | (1 << (RalphParser.MODMUL - 49)) | (1 << (RalphParser.SHL - 49)) | (1 << (RalphParser.SHR - 49)) | (1 << (RalphParser.BITAND - 49)) | (1 << (RalphParser.XOR - 49)) | (1 << (RalphParser.BITOR - 49)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 161;
						this.expression(5);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 162;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 163;
						_la = this._input.LA(1);
						if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (RalphParser.EQ - 65)) | (1 << (RalphParser.NQ - 65)) | (1 << (RalphParser.LT - 65)) | (1 << (RalphParser.LE - 65)) | (1 << (RalphParser.GT - 65)) | (1 << (RalphParser.GE - 65)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 164;
						this.expression(4);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 165;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 166;
						_la = this._input.LA(1);
						if (!(_la === RalphParser.AND || _la === RalphParser.OR)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 167;
						this.expression(3);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 168;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 169;
						this.match(RalphParser.ASSIGN);
						this.state = 170;
						this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, RalphParser.RULE_expressionList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 176;
					this.expression(0);
					this.state = 178;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						this.state = 177;
						this.match(RalphParser.COMMA);
						}
						break;
					}
					}
					}
				}
				this.state = 184;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callChain(): CallChainContext {
		let _localctx: CallChainContext = new CallChainContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, RalphParser.RULE_callChain);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 185;
				this.varName();
				}
				break;

			case 2:
				{
				this.state = 186;
				this.methodCall();
				}
				break;
			}
			this.state = 193;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 189;
					this.match(RalphParser.DOT);
					this.state = 190;
					this.callChain();
					}
					}
				}
				this.state = 195;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodCall(): MethodCallContext {
		let _localctx: MethodCallContext = new MethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, RalphParser.RULE_methodCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(RalphParser.IDENTIFIER);
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_CURLY) {
				{
				this.state = 197;
				this.aps();
				}
			}

			this.state = 200;
			this.match(RalphParser.L_PAREN);
			this.state = 201;
			this.expressionList();
			this.state = 202;
			this.match(RalphParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public payer(): PayerContext {
		let _localctx: PayerContext = new PayerContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, RalphParser.RULE_payer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public apsTokenId(): ApsTokenIdContext {
		let _localctx: ApsTokenIdContext = new ApsTokenIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, RalphParser.RULE_apsTokenId);
		try {
			this.state = 208;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.ALPH_TOKEN_ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 206;
				this.match(RalphParser.ALPH_TOKEN_ID);
				}
				break;
			case RalphParser.IF:
			case RalphParser.IDENTIFIER:
			case RalphParser.L_PAREN:
			case RalphParser.L_BRACKET:
			case RalphParser.SUB:
			case RalphParser.NOT:
			case RalphParser.ADDRESS_LIT:
			case RalphParser.ALPH_LIT:
			case RalphParser.BOOL_LIT:
			case RalphParser.BYTEVEC_LIT:
			case RalphParser.DECIMAL_LIT:
			case RalphParser.BINARY_LIT:
			case RalphParser.OCTAL_LIT:
			case RalphParser.HEX_LIT:
			case RalphParser.IMAGINARY_LIT:
			case RalphParser.RUNE_LIT:
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 207;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aps(): ApsContext {
		let _localctx: ApsContext = new ApsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, RalphParser.RULE_aps);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.match(RalphParser.L_CURLY);
			this.state = 211;
			this.payer();
			this.state = 212;
			this.match(RalphParser.R_ARROW);
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 213;
				this.apsTokenId();
				this.state = 214;
				this.match(RalphParser.COLON);
				this.state = 215;
				this.expression(0);
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.COMMA) {
					{
					this.state = 216;
					this.match(RalphParser.COMMA);
					}
				}

				}
				}
				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RalphParser.IF || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (RalphParser.IDENTIFIER - 34)) | (1 << (RalphParser.L_PAREN - 34)) | (1 << (RalphParser.L_BRACKET - 34)) | (1 << (RalphParser.SUB - 34)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (RalphParser.NOT - 73)) | (1 << (RalphParser.ALPH_TOKEN_ID - 73)) | (1 << (RalphParser.ADDRESS_LIT - 73)) | (1 << (RalphParser.ALPH_LIT - 73)) | (1 << (RalphParser.BOOL_LIT - 73)) | (1 << (RalphParser.BYTEVEC_LIT - 73)) | (1 << (RalphParser.DECIMAL_LIT - 73)) | (1 << (RalphParser.BINARY_LIT - 73)) | (1 << (RalphParser.OCTAL_LIT - 73)) | (1 << (RalphParser.HEX_LIT - 73)) | (1 << (RalphParser.IMAGINARY_LIT - 73)) | (1 << (RalphParser.RUNE_LIT - 73)) | (1 << (RalphParser.RAW_STRING_LIT - 73)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 73)))) !== 0));
			this.state = 223;
			this.match(RalphParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpr(): PrimaryExprContext {
		let _localctx: PrimaryExprContext = new PrimaryExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, RalphParser.RULE_primaryExpr);
		try {
			this.state = 227;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.ADDRESS_LIT:
			case RalphParser.ALPH_LIT:
			case RalphParser.BOOL_LIT:
			case RalphParser.BYTEVEC_LIT:
			case RalphParser.DECIMAL_LIT:
			case RalphParser.BINARY_LIT:
			case RalphParser.OCTAL_LIT:
			case RalphParser.HEX_LIT:
			case RalphParser.IMAGINARY_LIT:
			case RalphParser.RUNE_LIT:
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 225;
				this.basicLit();
				}
				break;
			case RalphParser.IDENTIFIER:
			case RalphParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 226;
				this.arrayExpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, RalphParser.RULE_primitiveType);
		try {
			this.state = 236;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.BOOL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 229;
				this.match(RalphParser.BOOL);
				}
				break;
			case RalphParser.I256:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 230;
				this.match(RalphParser.I256);
				}
				break;
			case RalphParser.BYTE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 231;
				this.match(RalphParser.BYTE);
				}
				break;
			case RalphParser.U256:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 232;
				this.match(RalphParser.U256);
				}
				break;
			case RalphParser.BYTEVEC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 233;
				this.match(RalphParser.BYTEVEC);
				}
				break;
			case RalphParser.ADDRESS:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 234;
				this.match(RalphParser.ADDRESS);
				}
				break;
			case RalphParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 235;
				this.arrayType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, RalphParser.RULE_arrayType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.match(RalphParser.L_BRACKET);
			this.state = 239;
			this.typeName();
			this.state = 240;
			this.match(RalphParser.SEMI);
			this.state = 241;
			this.expression(0);
			this.state = 242;
			this.match(RalphParser.R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayExpr(): ArrayExprContext {
		let _localctx: ArrayExprContext = new ArrayExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, RalphParser.RULE_arrayExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.IDENTIFIER) {
				{
				this.state = 244;
				this.match(RalphParser.IDENTIFIER);
				}
			}

			this.state = 247;
			this.match(RalphParser.L_BRACKET);
			this.state = 248;
			this.expression(0);
			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 249;
				this.match(RalphParser.COMMA);
				this.state = 250;
				this.expression(0);
				}
				}
				this.state = 255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 256;
			this.match(RalphParser.R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, RalphParser.RULE_typeName);
		try {
			this.state = 260;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.BOOL:
			case RalphParser.I256:
			case RalphParser.U256:
			case RalphParser.BYTE:
			case RalphParser.BYTEVEC:
			case RalphParser.ADDRESS:
			case RalphParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 258;
				this.primitiveType();
				}
				break;
			case RalphParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 259;
				this.match(RalphParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public result(): ResultContext {
		let _localctx: ResultContext = new ResultContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, RalphParser.RULE_result);
		let _la: number;
		try {
			let _alt: number;
			this.state = 280;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 262;
				this.match(RalphParser.L_PAREN);
				this.state = 263;
				this.match(RalphParser.R_PAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 264;
				this.typeName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 265;
				this.match(RalphParser.L_PAREN);
				this.state = 277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (RalphParser.BOOL - 25)) | (1 << (RalphParser.I256 - 25)) | (1 << (RalphParser.U256 - 25)) | (1 << (RalphParser.BYTE - 25)) | (1 << (RalphParser.BYTEVEC - 25)) | (1 << (RalphParser.ADDRESS - 25)) | (1 << (RalphParser.IDENTIFIER - 25)) | (1 << (RalphParser.L_BRACKET - 25)))) !== 0)) {
					{
					this.state = 266;
					this.typeName();
					this.state = 271;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 267;
							this.match(RalphParser.COMMA);
							this.state = 268;
							this.typeName();
							}
							}
						}
						this.state = 273;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
					}
					this.state = 275;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RalphParser.COMMA) {
						{
						this.state = 274;
						this.match(RalphParser.COMMA);
						}
					}

					}
				}

				this.state = 279;
				this.match(RalphParser.R_PAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, RalphParser.RULE_param);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.ATUNUSED) {
				{
				this.state = 282;
				this.match(RalphParser.ATUNUSED);
				}
			}

			this.state = 286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.MUT) {
				{
				this.state = 285;
				this.match(RalphParser.MUT);
				}
			}

			this.state = 288;
			this.match(RalphParser.IDENTIFIER);
			this.state = 289;
			this.match(RalphParser.COLON);
			this.state = 290;
			this.typeName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paramList(): ParamListContext {
		let _localctx: ParamListContext = new ParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, RalphParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & ((1 << (RalphParser.MUT - 16)) | (1 << (RalphParser.ATUNUSED - 16)) | (1 << (RalphParser.IDENTIFIER - 16)))) !== 0)) {
				{
				{
				this.state = 292;
				this.param();
				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.COMMA) {
					{
					this.state = 293;
					this.match(RalphParser.COMMA);
					}
				}

				}
				}
				this.state = 300;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDecl(): MethodDeclContext {
		let _localctx: MethodDeclContext = new MethodDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, RalphParser.RULE_methodDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.ATUSING) {
				{
				this.state = 301;
				this.annotation();
				}
			}

			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.PUB) {
				{
				this.state = 304;
				this.match(RalphParser.PUB);
				}
			}

			this.state = 307;
			this.match(RalphParser.FN);
			this.state = 308;
			this.match(RalphParser.IDENTIFIER);
			this.state = 309;
			this.match(RalphParser.L_PAREN);
			this.state = 310;
			this.paramList();
			this.state = 311;
			this.match(RalphParser.R_PAREN);
			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.R_ARROW) {
				{
				this.state = 312;
				this.match(RalphParser.R_ARROW);
				this.state = 313;
				this.result();
				}
			}

			this.state = 317;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 316;
				this.block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basicLit(): BasicLitContext {
		let _localctx: BasicLitContext = new BasicLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, RalphParser.RULE_basicLit);
		try {
			this.state = 324;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.BYTEVEC_LIT:
			case RalphParser.DECIMAL_LIT:
			case RalphParser.BINARY_LIT:
			case RalphParser.OCTAL_LIT:
			case RalphParser.HEX_LIT:
			case RalphParser.IMAGINARY_LIT:
			case RalphParser.RUNE_LIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 319;
				this.integer();
				}
				break;
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 320;
				this.string_();
				}
				break;
			case RalphParser.ADDRESS_LIT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 321;
				this.match(RalphParser.ADDRESS_LIT);
				}
				break;
			case RalphParser.ALPH_LIT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 322;
				this.match(RalphParser.ALPH_LIT);
				}
				break;
			case RalphParser.BOOL_LIT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 323;
				this.match(RalphParser.BOOL_LIT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, RalphParser.RULE_integer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			_la = this._input.LA(1);
			if (!(((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (RalphParser.BYTEVEC_LIT - 79)) | (1 << (RalphParser.DECIMAL_LIT - 79)) | (1 << (RalphParser.BINARY_LIT - 79)) | (1 << (RalphParser.OCTAL_LIT - 79)) | (1 << (RalphParser.HEX_LIT - 79)) | (1 << (RalphParser.IMAGINARY_LIT - 79)) | (1 << (RalphParser.RUNE_LIT - 79)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string_(): String_Context {
		let _localctx: String_Context = new String_Context(this._ctx, this.state);
		this.enterRule(_localctx, 48, RalphParser.RULE_string_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			_la = this._input.LA(1);
			if (!(_la === RalphParser.RAW_STRING_LIT || _la === RalphParser.INTERPRETED_STRING_LIT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varNameAssign(): VarNameAssignContext {
		let _localctx: VarNameAssignContext = new VarNameAssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, RalphParser.RULE_varNameAssign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this.varName();
			this.state = 331;
			this.match(RalphParser.ASSIGN);
			this.state = 332;
			this.basicLit();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enum(): EnumContext {
		let _localctx: EnumContext = new EnumContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, RalphParser.RULE_enum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.match(RalphParser.ENUM);
			this.state = 335;
			this.match(RalphParser.IDENTIFIER);
			this.state = 336;
			this.match(RalphParser.L_CURLY);
			this.state = 340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.IDENTIFIER) {
				{
				{
				this.state = 337;
				this.varNameAssign();
				}
				}
				this.state = 342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 343;
			this.match(RalphParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeStructBody(): TypeStructBodyContext {
		let _localctx: TypeStructBodyContext = new TypeStructBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, RalphParser.RULE_typeStructBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.match(RalphParser.L_CURLY);
			this.state = 352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.FN) | (1 << RalphParser.PUB) | (1 << RalphParser.RETURN) | (1 << RalphParser.ENUM) | (1 << RalphParser.IF) | (1 << RalphParser.WHILE) | (1 << RalphParser.FOR) | (1 << RalphParser.LET) | (1 << RalphParser.CONST) | (1 << RalphParser.EVENT) | (1 << RalphParser.EMIT) | (1 << RalphParser.ATUSING))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (RalphParser.IDENTIFIER - 34)) | (1 << (RalphParser.L_PAREN - 34)) | (1 << (RalphParser.L_BRACKET - 34)) | (1 << (RalphParser.SUB - 34)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (RalphParser.NOT - 73)) | (1 << (RalphParser.ADDRESS_LIT - 73)) | (1 << (RalphParser.ALPH_LIT - 73)) | (1 << (RalphParser.BOOL_LIT - 73)) | (1 << (RalphParser.BYTEVEC_LIT - 73)) | (1 << (RalphParser.DECIMAL_LIT - 73)) | (1 << (RalphParser.BINARY_LIT - 73)) | (1 << (RalphParser.OCTAL_LIT - 73)) | (1 << (RalphParser.HEX_LIT - 73)) | (1 << (RalphParser.IMAGINARY_LIT - 73)) | (1 << (RalphParser.RUNE_LIT - 73)) | (1 << (RalphParser.RAW_STRING_LIT - 73)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 73)) | (1 << (RalphParser.EOS - 73)))) !== 0)) {
				{
				this.state = 350;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RalphParser.RETURN:
				case RalphParser.IF:
				case RalphParser.WHILE:
				case RalphParser.FOR:
				case RalphParser.LET:
				case RalphParser.CONST:
				case RalphParser.EMIT:
				case RalphParser.IDENTIFIER:
				case RalphParser.L_PAREN:
				case RalphParser.L_BRACKET:
				case RalphParser.SUB:
				case RalphParser.NOT:
				case RalphParser.ADDRESS_LIT:
				case RalphParser.ALPH_LIT:
				case RalphParser.BOOL_LIT:
				case RalphParser.BYTEVEC_LIT:
				case RalphParser.DECIMAL_LIT:
				case RalphParser.BINARY_LIT:
				case RalphParser.OCTAL_LIT:
				case RalphParser.HEX_LIT:
				case RalphParser.IMAGINARY_LIT:
				case RalphParser.RUNE_LIT:
				case RalphParser.RAW_STRING_LIT:
				case RalphParser.INTERPRETED_STRING_LIT:
				case RalphParser.EOS:
					{
					this.state = 346;
					this.statement();
					}
					break;
				case RalphParser.EVENT:
					{
					this.state = 347;
					this.event();
					}
					break;
				case RalphParser.FN:
				case RalphParser.PUB:
				case RalphParser.ATUSING:
					{
					this.state = 348;
					this.methodDecl();
					}
					break;
				case RalphParser.ENUM:
					{
					this.state = 349;
					this.enum();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 354;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 355;
			this.match(RalphParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public txScript(): TxScriptContext {
		let _localctx: TxScriptContext = new TxScriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, RalphParser.RULE_txScript);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			this.match(RalphParser.TXSCRIPT);
			this.state = 358;
			this.match(RalphParser.IDENTIFIER);
			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_PAREN) {
				{
				this.state = 359;
				this.match(RalphParser.L_PAREN);
				this.state = 360;
				this.paramList();
				this.state = 361;
				this.match(RalphParser.R_PAREN);
				}
			}

			this.state = 365;
			this.typeStructBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assetScript(): AssetScriptContext {
		let _localctx: AssetScriptContext = new AssetScriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, RalphParser.RULE_assetScript);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 367;
			this.match(RalphParser.ASSETSCRIPT);
			this.state = 368;
			this.match(RalphParser.IDENTIFIER);
			this.state = 373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_PAREN) {
				{
				this.state = 369;
				this.match(RalphParser.L_PAREN);
				this.state = 370;
				this.paramList();
				this.state = 371;
				this.match(RalphParser.R_PAREN);
				}
			}

			this.state = 375;
			this.typeStructBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importStmt(): ImportStmtContext {
		let _localctx: ImportStmtContext = new ImportStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, RalphParser.RULE_importStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this.match(RalphParser.IMPORT);
			this.state = 378;
			this.match(RalphParser.IMPORT_PATH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contract(): ContractContext {
		let _localctx: ContractContext = new ContractContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, RalphParser.RULE_contract);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.IMPORT) {
				{
				{
				this.state = 380;
				this.importStmt();
				}
				}
				this.state = 385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.ABSTRACT) {
				{
				this.state = 386;
				this.match(RalphParser.ABSTRACT);
				}
			}

			this.state = 389;
			this.match(RalphParser.CONTRACT);
			this.state = 390;
			this.match(RalphParser.IDENTIFIER);
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_PAREN) {
				{
				this.state = 391;
				this.match(RalphParser.L_PAREN);
				this.state = 392;
				this.paramList();
				this.state = 393;
				this.match(RalphParser.R_PAREN);
				}
			}

			this.state = 398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.EXTENDS) {
				{
				this.state = 397;
				this.extends();
				}
			}

			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.IMPLEMENTS) {
				{
				this.state = 400;
				this.implements();
				}
			}

			this.state = 403;
			this.typeStructBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extends(): ExtendsContext {
		let _localctx: ExtendsContext = new ExtendsContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, RalphParser.RULE_extends);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			this.match(RalphParser.EXTENDS);
			this.state = 406;
			this.contractExtends();
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 407;
				this.match(RalphParser.COMMA);
				this.state = 408;
				this.contractExtends();
				}
				}
				this.state = 413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractExtends(): ContractExtendsContext {
		let _localctx: ContractExtendsContext = new ContractExtendsContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, RalphParser.RULE_contractExtends);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 414;
			this.match(RalphParser.IDENTIFIER);
			this.state = 415;
			this.match(RalphParser.L_PAREN);
			this.state = 416;
			this.expressionList();
			this.state = 417;
			this.match(RalphParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public implements(): ImplementsContext {
		let _localctx: ImplementsContext = new ImplementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, RalphParser.RULE_implements);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
			this.match(RalphParser.IMPLEMENTS);
			this.state = 420;
			this.match(RalphParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interface(): InterfaceContext {
		let _localctx: InterfaceContext = new InterfaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, RalphParser.RULE_interface);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
			this.match(RalphParser.INTERFACE);
			this.state = 423;
			this.match(RalphParser.IDENTIFIER);
			this.state = 426;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.EXTENDS) {
				{
				this.state = 424;
				this.match(RalphParser.EXTENDS);
				this.state = 425;
				this.match(RalphParser.IDENTIFIER);
				}
			}

			this.state = 428;
			this.typeStructBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public event(): EventContext {
		let _localctx: EventContext = new EventContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, RalphParser.RULE_event);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 430;
			this.match(RalphParser.EVENT);
			this.state = 431;
			this.match(RalphParser.IDENTIFIER);
			this.state = 432;
			this.match(RalphParser.L_PAREN);
			this.state = 433;
			this.paramList();
			this.state = 434;
			this.match(RalphParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emit(): EmitContext {
		let _localctx: EmitContext = new EmitContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, RalphParser.RULE_emit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
			this.match(RalphParser.EMIT);
			this.state = 437;
			this.match(RalphParser.IDENTIFIER);
			this.state = 438;
			this.match(RalphParser.L_PAREN);
			this.state = 439;
			this.expressionList();
			this.state = 440;
			this.match(RalphParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, RalphParser.RULE_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			this.match(RalphParser.ATUSING);
			this.state = 443;
			this.match(RalphParser.L_PAREN);
			this.state = 444;
			this.expressionList();
			this.state = 445;
			this.match(RalphParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, RalphParser.RULE_block);
		let _la: number;
		try {
			this.state = 456;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.L_CURLY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 447;
				this.match(RalphParser.L_CURLY);
				this.state = 451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.RETURN) | (1 << RalphParser.IF) | (1 << RalphParser.WHILE) | (1 << RalphParser.FOR) | (1 << RalphParser.LET) | (1 << RalphParser.CONST) | (1 << RalphParser.EMIT))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (RalphParser.IDENTIFIER - 34)) | (1 << (RalphParser.L_PAREN - 34)) | (1 << (RalphParser.L_BRACKET - 34)) | (1 << (RalphParser.SUB - 34)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (RalphParser.NOT - 73)) | (1 << (RalphParser.ADDRESS_LIT - 73)) | (1 << (RalphParser.ALPH_LIT - 73)) | (1 << (RalphParser.BOOL_LIT - 73)) | (1 << (RalphParser.BYTEVEC_LIT - 73)) | (1 << (RalphParser.DECIMAL_LIT - 73)) | (1 << (RalphParser.BINARY_LIT - 73)) | (1 << (RalphParser.OCTAL_LIT - 73)) | (1 << (RalphParser.HEX_LIT - 73)) | (1 << (RalphParser.IMAGINARY_LIT - 73)) | (1 << (RalphParser.RUNE_LIT - 73)) | (1 << (RalphParser.RAW_STRING_LIT - 73)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 73)) | (1 << (RalphParser.EOS - 73)))) !== 0)) {
					{
					{
					this.state = 448;
					this.statement();
					}
					}
					this.state = 453;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 454;
				this.match(RalphParser.R_CURLY);
				}
				break;
			case RalphParser.RETURN:
			case RalphParser.IF:
			case RalphParser.WHILE:
			case RalphParser.FOR:
			case RalphParser.LET:
			case RalphParser.CONST:
			case RalphParser.EMIT:
			case RalphParser.IDENTIFIER:
			case RalphParser.L_PAREN:
			case RalphParser.L_BRACKET:
			case RalphParser.SUB:
			case RalphParser.NOT:
			case RalphParser.ADDRESS_LIT:
			case RalphParser.ALPH_LIT:
			case RalphParser.BOOL_LIT:
			case RalphParser.BYTEVEC_LIT:
			case RalphParser.DECIMAL_LIT:
			case RalphParser.BINARY_LIT:
			case RalphParser.OCTAL_LIT:
			case RalphParser.HEX_LIT:
			case RalphParser.IMAGINARY_LIT:
			case RalphParser.RUNE_LIT:
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
			case RalphParser.EOS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 455;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, RalphParser.RULE_statement);
		try {
			this.state = 462;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 458;
				this.simpleStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 459;
				this.ifStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 460;
				this.whileStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 461;
				this.forStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleStmt(): SimpleStmtContext {
		let _localctx: SimpleStmtContext = new SimpleStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, RalphParser.RULE_simpleStmt);
		try {
			this.state = 469;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.EOS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 464;
				this.emptyStmt();
				}
				break;
			case RalphParser.RETURN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 465;
				this.returnStmt();
				}
				break;
			case RalphParser.LET:
			case RalphParser.CONST:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 466;
				this.varDecl();
				}
				break;
			case RalphParser.IF:
			case RalphParser.IDENTIFIER:
			case RalphParser.L_PAREN:
			case RalphParser.L_BRACKET:
			case RalphParser.SUB:
			case RalphParser.NOT:
			case RalphParser.ADDRESS_LIT:
			case RalphParser.ALPH_LIT:
			case RalphParser.BOOL_LIT:
			case RalphParser.BYTEVEC_LIT:
			case RalphParser.DECIMAL_LIT:
			case RalphParser.BINARY_LIT:
			case RalphParser.OCTAL_LIT:
			case RalphParser.HEX_LIT:
			case RalphParser.IMAGINARY_LIT:
			case RalphParser.RUNE_LIT:
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 467;
				this.expression(0);
				}
				break;
			case RalphParser.EMIT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 468;
				this.emit();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStmt(): EmptyStmtContext {
		let _localctx: EmptyStmtContext = new EmptyStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, RalphParser.RULE_emptyStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, RalphParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this.match(RalphParser.RETURN);
			this.state = 474;
			this.expressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStmt(): IfStmtContext {
		let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, RalphParser.RULE_ifStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 476;
			this.match(RalphParser.IF);
			this.state = 477;
			this.match(RalphParser.L_PAREN);
			this.state = 478;
			this.expression(0);
			this.state = 479;
			this.match(RalphParser.R_PAREN);
			this.state = 480;
			this.block();
			this.state = 482;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 481;
				this.elseStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseStmt(): ElseStmtContext {
		let _localctx: ElseStmtContext = new ElseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, RalphParser.RULE_elseStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 484;
			this.match(RalphParser.ELSE);
			this.state = 487;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				{
				this.state = 485;
				this.block();
				}
				break;

			case 2:
				{
				this.state = 486;
				this.ifStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStmt(): WhileStmtContext {
		let _localctx: WhileStmtContext = new WhileStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, RalphParser.RULE_whileStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.match(RalphParser.WHILE);
			this.state = 490;
			this.match(RalphParser.L_PAREN);
			this.state = 492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.IF || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (RalphParser.IDENTIFIER - 34)) | (1 << (RalphParser.L_PAREN - 34)) | (1 << (RalphParser.L_BRACKET - 34)) | (1 << (RalphParser.SUB - 34)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (RalphParser.NOT - 73)) | (1 << (RalphParser.ADDRESS_LIT - 73)) | (1 << (RalphParser.ALPH_LIT - 73)) | (1 << (RalphParser.BOOL_LIT - 73)) | (1 << (RalphParser.BYTEVEC_LIT - 73)) | (1 << (RalphParser.DECIMAL_LIT - 73)) | (1 << (RalphParser.BINARY_LIT - 73)) | (1 << (RalphParser.OCTAL_LIT - 73)) | (1 << (RalphParser.HEX_LIT - 73)) | (1 << (RalphParser.IMAGINARY_LIT - 73)) | (1 << (RalphParser.RUNE_LIT - 73)) | (1 << (RalphParser.RAW_STRING_LIT - 73)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 73)))) !== 0)) {
				{
				this.state = 491;
				this.expression(0);
				}
			}

			this.state = 494;
			this.match(RalphParser.R_PAREN);
			this.state = 495;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStmt(): ForStmtContext {
		let _localctx: ForStmtContext = new ForStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, RalphParser.RULE_forStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 497;
			this.match(RalphParser.FOR);
			this.state = 498;
			this.match(RalphParser.L_PAREN);
			this.state = 499;
			this.match(RalphParser.LET);
			this.state = 500;
			this.match(RalphParser.MUT);
			this.state = 501;
			this.varName();
			this.state = 502;
			this.match(RalphParser.ASSIGN);
			this.state = 503;
			this.expression(0);
			this.state = 504;
			this.match(RalphParser.SEMI);
			this.state = 505;
			this.expression(0);
			this.state = 506;
			this.match(RalphParser.SEMI);
			this.state = 507;
			this.expression(0);
			this.state = 508;
			this.match(RalphParser.R_PAREN);
			this.state = 509;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eos(): EosContext {
		let _localctx: EosContext = new EosContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, RalphParser.RULE_eos);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this.match(RalphParser.EOS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 6:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 3);

		case 2:
			return this.precpred(this._ctx, 2);

		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03f\u0204\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x07\x02i\n\x02\f\x02\x0E\x02l\v\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x07\x03s\n\x03\f\x03\x0E\x03v\v\x03\x03\x04\x03\x04" +
		"\x03\x04\x05\x04{\n\x04\x05\x04}\n\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x05\x05\x05\x86\n\x05\x05\x05\x88\n\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06\x92\n\x06" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x05\b\xA0\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x07\b\xAE\n\b\f\b\x0E\b\xB1\v\b\x03\t\x03\t\x05\t" +
		"\xB5\n\t\x07\t\xB7\n\t\f\t\x0E\t\xBA\v\t\x03\n\x03\n\x05\n\xBE\n\n\x03" +
		"\n\x03\n\x07\n\xC2\n\n\f\n\x0E\n\xC5\v\n\x03\v\x03\v\x05\v\xC9\n\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x05\r\xD3\n\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xDC\n\x0E\x06\x0E" +
		"\xDE\n\x0E\r\x0E\x0E\x0E\xDF\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0F\xE6" +
		"\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\xEF\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x05" +
		"\x12\xF8\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\xFE\n\x12\f\x12" +
		"\x0E\x12\u0101\v\x12\x03\x12\x03\x12\x03\x13\x03\x13\x05\x13\u0107\n\x13" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u0110" +
		"\n\x14\f\x14\x0E\x14\u0113\v\x14\x03\x14\x05\x14\u0116\n\x14\x05\x14\u0118" +
		"\n\x14\x03\x14\x05\x14\u011B\n\x14\x03\x15\x05\x15\u011E\n\x15\x03\x15" +
		"\x05\x15\u0121\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x05" +
		"\x16\u0129\n\x16\x07\x16\u012B\n\x16\f\x16\x0E\x16\u012E\v\x16\x03\x17" +
		"\x05\x17\u0131\n\x17\x03\x17\x05\x17\u0134\n\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u013D\n\x17\x03\x17\x05\x17\u0140" +
		"\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0147\n\x18\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x07\x1C\u0155\n\x1C\f\x1C\x0E\x1C\u0158\v\x1C\x03" +
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0161\n\x1D" +
		"\f\x1D\x0E\x1D\u0164\v\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x05\x1E\u016E\n\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0178\n\x1F\x03\x1F\x03\x1F\x03" +
		" \x03 \x03 \x03!\x07!\u0180\n!\f!\x0E!\u0183\v!\x03!\x05!\u0186\n!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x05!\u018E\n!\x03!\x05!\u0191\n!\x03!\x05!" +
		"\u0194\n!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x07\"\u019C\n\"\f\"\x0E\"" +
		"\u019F\v\"\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03%\x03%\x03%\x03" +
		"%\x05%\u01AD\n%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03" +
		"\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03)\x03)\x07)\u01C4\n)" +
		"\f)\x0E)\u01C7\v)\x03)\x03)\x05)\u01CB\n)\x03*\x03*\x03*\x03*\x05*\u01D1" +
		"\n*\x03+\x03+\x03+\x03+\x03+\x05+\u01D8\n+\x03,\x03,\x03-\x03-\x03-\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x05.\u01E5\n.\x03/\x03/\x03/\x05/\u01EA\n/" +
		"\x030\x030\x030\x050\u01EF\n0\x030\x030\x030\x031\x031\x031\x031\x031" +
		"\x031\x031\x031\x031\x031\x031\x031\x031\x031\x032\x032\x032\x02\x02\x03" +
		"\x0E3\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
		"`\x02b\x02\x02\b\x04\x0255KK\x03\x023B\x03\x02CH\x03\x02IJ\x04\x02QUY" +
		"Z\x03\x02`a\x02\u0221\x02j\x03\x02\x02\x02\x04o\x03\x02\x02\x02\x06|\x03" +
		"\x02\x02\x02\b\x87\x03\x02\x02\x02\n\x91\x03\x02\x02\x02\f\x93\x03\x02" +
		"\x02\x02\x0E\x9F\x03\x02\x02\x02\x10\xB8\x03\x02\x02\x02\x12\xBD\x03\x02" +
		"\x02\x02\x14\xC6\x03\x02\x02\x02\x16\xCE\x03\x02\x02\x02\x18\xD2\x03\x02" +
		"\x02\x02\x1A\xD4\x03\x02\x02\x02\x1C\xE5\x03\x02\x02\x02\x1E\xEE\x03\x02" +
		"\x02\x02 \xF0\x03\x02\x02\x02\"\xF7\x03\x02\x02\x02$\u0106\x03\x02\x02" +
		"\x02&\u011A\x03\x02\x02\x02(\u011D\x03\x02\x02\x02*\u012C\x03\x02\x02" +
		"\x02,\u0130\x03\x02\x02\x02.\u0146\x03\x02\x02\x020\u0148\x03\x02\x02" +
		"\x022\u014A\x03\x02\x02\x024\u014C\x03\x02\x02\x026\u0150\x03\x02\x02" +
		"\x028\u015B\x03\x02\x02\x02:\u0167\x03\x02\x02\x02<\u0171\x03\x02\x02" +
		"\x02>\u017B\x03\x02\x02\x02@\u0181\x03\x02\x02\x02B\u0197\x03\x02\x02" +
		"\x02D\u01A0\x03\x02\x02\x02F\u01A5\x03\x02\x02\x02H\u01A8\x03\x02\x02" +
		"\x02J\u01B0\x03\x02\x02\x02L\u01B6\x03\x02\x02\x02N\u01BC\x03\x02\x02" +
		"\x02P\u01CA\x03\x02\x02\x02R\u01D0\x03\x02\x02\x02T\u01D7\x03\x02\x02" +
		"\x02V\u01D9\x03\x02\x02\x02X\u01DB\x03\x02\x02\x02Z\u01DE\x03\x02\x02" +
		"\x02\\\u01E6\x03\x02\x02\x02^\u01EB\x03\x02\x02\x02`\u01F3\x03\x02\x02" +
		"\x02b\u0201\x03\x02\x02\x02di\x05:\x1E\x02ei\x05@!\x02fi\x05H%\x02gi\x05" +
		"<\x1F\x02hd\x03\x02\x02\x02he\x03\x02\x02\x02hf\x03\x02\x02\x02hg\x03" +
		"\x02\x02\x02il\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02km\x03" +
		"\x02\x02\x02lj\x03\x02\x02\x02mn\x07\x02\x02\x03n\x03\x03\x02\x02\x02" +
		"ot\x05\f\x07\x02pq\x07-\x02\x02qs\x05\f\x07\x02rp\x03\x02\x02\x02sv\x03" +
		"\x02\x02\x02tr\x03\x02\x02\x02tu\x03\x02\x02\x02u\x05\x03\x02\x02\x02" +
		"vt\x03\x02\x02\x02w}\x07\x11\x02\x02xz\x07\x10\x02\x02y{\x07\x12\x02\x02" +
		"zy\x03\x02\x02\x02z{\x03\x02\x02\x02{}\x03\x02\x02\x02|w\x03\x02\x02\x02" +
		"|x\x03\x02\x02\x02}~\x03\x02\x02\x02~\x7F\x05\f\x07\x02\x7F\x80\x07,\x02" +
		"\x02\x80\x81\x05\x0E\b\x02\x81\x07\x03\x02\x02\x02\x82\x88\x07\x11\x02" +
		"\x02\x83\x85\x07\x10\x02\x02\x84\x86\x07\x12\x02\x02\x85\x84\x03\x02\x02" +
		"\x02\x85\x86\x03\x02\x02\x02\x86\x88\x03\x02\x02\x02\x87\x82\x03\x02\x02" +
		"\x02\x87\x83\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8A\x07&\x02" +
		"\x02\x8A\x8B\x05\x04\x03\x02\x8B\x8C\x07\'\x02\x02\x8C\x8D\x07,\x02\x02" +
		"\x8D\x8E\x05\x0E\b\x02\x8E\t\x03\x02\x02\x02\x8F\x92\x05\x06\x04\x02\x90" +
		"\x92\x05\b\x05\x02\x91\x8F\x03\x02\x02\x02\x91\x90\x03\x02\x02\x02\x92" +
		"\v\x03\x02\x02\x02\x93\x94\x07$\x02\x02\x94\r\x03\x02\x02\x02\x95\x96" +
		"\b\b\x01\x02\x96\xA0\x05\x1C\x0F\x02\x97\xA0\x05\x12\n\x02\x98\xA0\x05" +
		"Z.\x02\x99\x9A\x07&\x02\x02\x9A\x9B\x05\x0E\b\x02\x9B\x9C\x07\'\x02\x02" +
		"\x9C\xA0\x03\x02\x02\x02\x9D\x9E\t\x02\x02\x02\x9E\xA0\x05\x0E\b\x07\x9F" +
		"\x95\x03\x02\x02\x02\x9F\x97\x03\x02\x02\x02\x9F\x98\x03\x02\x02\x02\x9F" +
		"\x99\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\xA0\xAF\x03\x02\x02\x02\xA1" +
		"\xA2\f\x06\x02\x02\xA2\xA3\t\x03\x02\x02\xA3\xAE\x05\x0E\b\x07\xA4\xA5" +
		"\f\x05\x02\x02\xA5\xA6\t\x04\x02\x02\xA6\xAE\x05\x0E\b\x06\xA7\xA8\f\x04" +
		"\x02\x02\xA8\xA9\t\x05\x02\x02\xA9\xAE\x05\x0E\b\x05\xAA\xAB\f\x03\x02" +
		"\x02\xAB\xAC\x07,\x02\x02\xAC\xAE\x05\x0E\b\x04\xAD\xA1\x03\x02\x02\x02" +
		"\xAD\xA4\x03\x02\x02\x02\xAD\xA7\x03\x02\x02\x02\xAD\xAA\x03\x02\x02\x02" +
		"\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02" +
		"\xB0\x0F\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB4\x05\x0E\b\x02" +
		"\xB3\xB5\x07-\x02\x02\xB4\xB3\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02" +
		"\xB5\xB7\x03\x02\x02\x02\xB6\xB2\x03\x02\x02\x02\xB7\xBA\x03\x02\x02\x02" +
		"\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\x11\x03\x02\x02\x02" +
		"\xBA\xB8\x03\x02\x02\x02\xBB\xBE\x05\f\x07\x02\xBC\xBE\x05\x14\v\x02\xBD" +
		"\xBB\x03\x02\x02\x02\xBD\xBC\x03\x02\x02\x02\xBE\xC3\x03\x02\x02\x02\xBF" +
		"\xC0\x070\x02\x02\xC0\xC2\x05\x12\n\x02\xC1\xBF\x03\x02\x02\x02\xC2\xC5" +
		"\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\x13" +
		"\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC6\xC8\x07$\x02\x02\xC7\xC9" +
		"\x05\x1A\x0E\x02\xC8\xC7\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA" +
		"\x03\x02\x02\x02\xCA\xCB\x07&\x02\x02\xCB\xCC\x05\x10\t\x02\xCC\xCD\x07" +
		"\'\x02\x02\xCD\x15\x03\x02\x02\x02\xCE\xCF\x05\x0E\b\x02\xCF\x17\x03\x02" +
		"\x02\x02\xD0\xD3\x07M\x02\x02\xD1\xD3\x05\x0E\b\x02\xD2\xD0\x03\x02\x02" +
		"\x02\xD2\xD1\x03\x02\x02\x02\xD3\x19\x03\x02\x02\x02\xD4\xD5\x07(\x02" +
		"\x02\xD5\xD6\x05\x16\f\x02\xD6\xDD\x07#\x02\x02\xD7\xD8\x05\x18\r\x02" +
		"\xD8\xD9\x07/\x02\x02\xD9\xDB\x05\x0E\b\x02\xDA\xDC\x07-\x02\x02\xDB\xDA" +
		"\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDE\x03\x02\x02\x02\xDD\xD7" +
		"\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0" +
		"\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE2\x07)\x02\x02\xE2\x1B" +
		"\x03\x02\x02\x02\xE3\xE6\x05.\x18\x02\xE4\xE6\x05\"\x12\x02\xE5\xE3\x03" +
		"\x02\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6\x1D\x03\x02\x02\x02\xE7\xEF\x07" +
		"\x1B\x02\x02\xE8\xEF\x07\x1C\x02\x02\xE9\xEF\x07\x1E\x02\x02\xEA\xEF\x07" +
		"\x1D\x02\x02\xEB\xEF\x07\x1F\x02\x02\xEC\xEF\x07 \x02\x02\xED\xEF\x05" +
		" \x11\x02\xEE\xE7\x03\x02\x02\x02\xEE\xE8\x03\x02\x02\x02\xEE\xE9\x03" +
		"\x02\x02\x02\xEE\xEA\x03\x02\x02\x02\xEE\xEB\x03\x02\x02\x02\xEE\xEC\x03" +
		"\x02\x02\x02\xEE\xED\x03\x02\x02\x02\xEF\x1F\x03\x02\x02\x02\xF0\xF1\x07" +
		"*\x02\x02\xF1\xF2\x05$\x13\x02\xF2\xF3\x07.\x02\x02\xF3\xF4\x05\x0E\b" +
		"\x02\xF4\xF5\x07+\x02\x02\xF5!\x03\x02\x02\x02\xF6\xF8\x07$\x02\x02\xF7" +
		"\xF6\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9" +
		"\xFA\x07*\x02\x02\xFA\xFF\x05\x0E\b\x02\xFB\xFC\x07-\x02\x02\xFC\xFE\x05" +
		"\x0E\b\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0101\x03\x02\x02\x02\xFF\xFD\x03" +
		"\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0102\x03\x02\x02\x02\u0101" +
		"\xFF\x03\x02\x02\x02\u0102\u0103\x07+\x02\x02\u0103#\x03\x02\x02\x02\u0104" +
		"\u0107\x05\x1E\x10\x02\u0105\u0107\x07$\x02\x02\u0106\u0104\x03\x02\x02" +
		"\x02\u0106\u0105\x03\x02\x02\x02\u0107%\x03\x02\x02\x02\u0108\u0109\x07" +
		"&\x02\x02\u0109\u011B\x07\'\x02\x02\u010A\u011B\x05$\x13\x02\u010B\u0117" +
		"\x07&\x02\x02\u010C\u0111\x05$\x13\x02\u010D\u010E\x07-\x02\x02\u010E" +
		"\u0110\x05$\x13\x02\u010F\u010D\x03\x02\x02\x02\u0110\u0113\x03\x02\x02" +
		"\x02\u0111\u010F\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0115" +
		"\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0114\u0116\x07-\x02\x02" +
		"\u0115\u0114\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0118\x03" +
		"\x02\x02\x02\u0117\u010C\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118" +
		"\u0119\x03\x02\x02\x02\u0119\u011B\x07\'\x02\x02\u011A\u0108\x03\x02\x02" +
		"\x02\u011A\u010A\x03\x02\x02\x02\u011A\u010B\x03\x02\x02\x02\u011B\'\x03" +
		"\x02\x02\x02\u011C\u011E\x07!\x02\x02\u011D\u011C\x03\x02\x02\x02\u011D" +
		"\u011E\x03\x02\x02\x02\u011E\u0120\x03\x02\x02\x02\u011F\u0121\x07\x12" +
		"\x02\x02\u0120\u011F\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121" +
		"\u0122\x03\x02\x02\x02\u0122\u0123\x07$\x02\x02\u0123\u0124\x07/\x02\x02" +
		"\u0124\u0125\x05$\x13\x02\u0125)\x03\x02\x02\x02\u0126\u0128\x05(\x15" +
		"\x02\u0127\u0129\x07-\x02\x02\u0128\u0127\x03\x02\x02\x02\u0128\u0129" +
		"\x03\x02\x02\x02\u0129\u012B\x03\x02\x02\x02\u012A\u0126\x03\x02\x02\x02" +
		"\u012B\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C\u012D\x03" +
		"\x02\x02\x02\u012D+\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012F" +
		"\u0131\x05N(\x02\u0130\u012F\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02" +
		"\u0131\u0133\x03\x02\x02\x02\u0132\u0134\x07\x04\x02\x02\u0133\u0132\x03" +
		"\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135" +
		"\u0136\x07\x03\x02\x02\u0136\u0137\x07$\x02\x02\u0137\u0138\x07&\x02\x02" +
		"\u0138\u0139\x05*\x16\x02\u0139\u013C\x07\'\x02\x02\u013A\u013B\x07#\x02" +
		"\x02\u013B\u013D\x05&\x14\x02\u013C\u013A\x03\x02\x02\x02\u013C\u013D" +
		"\x03\x02\x02\x02\u013D\u013F\x03\x02\x02\x02\u013E\u0140\x05P)\x02\u013F" +
		"\u013E\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140-\x03\x02\x02" +
		"\x02\u0141\u0147\x050\x19\x02\u0142\u0147\x052\x1A\x02\u0143\u0147\x07" +
		"N\x02\x02\u0144\u0147\x07O\x02\x02\u0145\u0147\x07P\x02\x02\u0146\u0141" +
		"\x03\x02\x02\x02\u0146\u0142\x03\x02\x02\x02\u0146\u0143\x03\x02\x02\x02" +
		"\u0146\u0144\x03\x02\x02\x02\u0146\u0145\x03\x02\x02\x02\u0147/\x03\x02" +
		"\x02\x02\u0148\u0149\t\x06\x02\x02\u01491\x03\x02\x02\x02\u014A\u014B" +
		"\t\x07\x02\x02\u014B3\x03\x02\x02\x02\u014C\u014D\x05\f\x07\x02\u014D" +
		"\u014E\x07,\x02\x02\u014E\u014F\x05.\x18\x02\u014F5\x03\x02\x02\x02\u0150" +
		"\u0151\x07\x07\x02\x02\u0151\u0152\x07$\x02\x02\u0152\u0156\x07(\x02\x02" +
		"\u0153\u0155\x054\x1B\x02\u0154\u0153\x03\x02\x02\x02\u0155\u0158\x03" +
		"\x02\x02\x02\u0156\u0154\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157" +
		"\u0159\x03\x02\x02\x02\u0158\u0156\x03\x02\x02\x02\u0159\u015A\x07)\x02" +
		"\x02\u015A7\x03\x02\x02\x02\u015B\u0162\x07(\x02\x02\u015C\u0161\x05R" +
		"*\x02\u015D\u0161\x05J&\x02\u015E\u0161\x05,\x17\x02\u015F\u0161\x056" +
		"\x1C\x02\u0160\u015C\x03\x02\x02\x02\u0160\u015D\x03\x02\x02\x02\u0160" +
		"\u015E\x03\x02\x02\x02\u0160\u015F\x03\x02\x02\x02\u0161\u0164\x03\x02" +
		"\x02\x02\u0162\u0160\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163" +
		"\u0165\x03\x02\x02\x02\u0164\u0162\x03\x02\x02\x02\u0165\u0166\x07)\x02" +
		"\x02\u01669\x03\x02\x02\x02\u0167\u0168\x07\b\x02\x02\u0168\u016D\x07" +
		"$\x02\x02\u0169\u016A\x07&\x02\x02\u016A\u016B\x05*\x16\x02\u016B\u016C" +
		"\x07\'\x02\x02\u016C\u016E\x03\x02\x02\x02\u016D\u0169\x03\x02\x02\x02" +
		"\u016D\u016E\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0170\x05" +
		"8\x1D\x02\u0170;\x03\x02\x02\x02\u0171\u0172\x07\n\x02\x02\u0172\u0177" +
		"\x07$\x02\x02\u0173\u0174\x07&\x02\x02\u0174\u0175\x05*\x16\x02\u0175" +
		"\u0176\x07\'\x02\x02\u0176\u0178\x03\x02\x02\x02\u0177\u0173\x03\x02\x02" +
		"\x02\u0177\u0178\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u017A" +
		"\x058\x1D\x02\u017A=\x03\x02\x02\x02\u017B\u017C\x07\v\x02\x02\u017C\u017D" +
		"\x07%\x02\x02\u017D?\x03\x02\x02\x02\u017E\u0180\x05> \x02\u017F\u017E" +
		"\x03\x02\x02\x02\u0180\u0183\x03\x02\x02\x02\u0181\u017F\x03\x02\x02\x02" +
		"\u0181\u0182\x03\x02\x02\x02\u0182\u0185\x03\x02\x02\x02\u0183\u0181\x03" +
		"\x02\x02\x02\u0184\u0186\x07\x14\x02\x02\u0185\u0184\x03\x02\x02\x02\u0185" +
		"\u0186\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0188\x07\t\x02" +
		"\x02\u0188\u018D\x07$\x02\x02\u0189\u018A\x07&\x02\x02\u018A\u018B\x05" +
		"*\x16\x02\u018B\u018C\x07\'\x02\x02\u018C\u018E\x03\x02\x02\x02\u018D" +
		"\u0189\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E\u0190\x03\x02" +
		"\x02\x02\u018F\u0191\x05B\"\x02\u0190\u018F\x03\x02\x02\x02\u0190\u0191" +
		"\x03\x02\x02\x02\u0191\u0193\x03\x02\x02\x02\u0192\u0194\x05F$\x02\u0193" +
		"\u0192\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0195\x03\x02" +
		"\x02\x02\u0195\u0196\x058\x1D\x02\u0196A\x03\x02\x02\x02\u0197\u0198\x07" +
		"\x13\x02\x02\u0198\u019D\x05D#\x02\u0199\u019A\x07-\x02\x02\u019A\u019C" +
		"\x05D#\x02\u019B\u0199\x03\x02\x02\x02\u019C\u019F\x03\x02\x02\x02\u019D" +
		"\u019B\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019EC\x03\x02\x02" +
		"\x02\u019F\u019D\x03\x02\x02\x02\u01A0\u01A1\x07$\x02\x02\u01A1\u01A2" +
		"\x07&\x02\x02\u01A2\u01A3\x05\x10\t\x02\u01A3\u01A4\x07\'\x02\x02\u01A4" +
		"E\x03\x02\x02\x02\u01A5\u01A6\x07\x15\x02\x02\u01A6\u01A7\x07$\x02\x02" +
		"\u01A7G\x03\x02\x02\x02\u01A8\u01A9\x07\x06\x02\x02\u01A9\u01AC\x07$\x02" +
		"\x02\u01AA\u01AB\x07\x13\x02\x02\u01AB\u01AD\x07$\x02\x02\u01AC\u01AA" +
		"\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02" +
		"\u01AE\u01AF\x058\x1D\x02\u01AFI\x03\x02\x02\x02\u01B0\u01B1\x07\x16\x02" +
		"\x02\u01B1\u01B2\x07$\x02\x02\u01B2\u01B3\x07&\x02\x02\u01B3\u01B4\x05" +
		"*\x16\x02\u01B4\u01B5\x07\'\x02\x02\u01B5K\x03\x02\x02\x02\u01B6\u01B7" +
		"\x07\x17\x02\x02\u01B7\u01B8\x07$\x02\x02\u01B8\u01B9\x07&\x02\x02\u01B9" +
		"\u01BA\x05\x10\t\x02\u01BA\u01BB\x07\'\x02\x02\u01BBM\x03\x02\x02\x02" +
		"\u01BC\u01BD\x07\x18\x02\x02\u01BD\u01BE\x07&\x02\x02\u01BE\u01BF\x05" +
		"\x10\t\x02\u01BF\u01C0\x07\'\x02\x02\u01C0O\x03\x02\x02\x02\u01C1\u01C5" +
		"\x07(\x02\x02\u01C2\u01C4\x05R*\x02\u01C3\u01C2\x03\x02\x02\x02\u01C4" +
		"\u01C7\x03\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C5\u01C6\x03\x02" +
		"\x02\x02\u01C6\u01C8\x03\x02\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C8" +
		"\u01CB\x07)\x02\x02\u01C9\u01CB\x05R*\x02\u01CA\u01C1\x03\x02\x02\x02" +
		"\u01CA\u01C9\x03\x02\x02\x02\u01CBQ\x03\x02\x02\x02\u01CC\u01D1\x05T+" +
		"\x02\u01CD\u01D1\x05Z.\x02\u01CE\u01D1\x05^0\x02\u01CF\u01D1\x05`1\x02" +
		"\u01D0\u01CC\x03\x02\x02\x02\u01D0\u01CD\x03\x02\x02\x02\u01D0\u01CE\x03" +
		"\x02\x02\x02\u01D0\u01CF\x03\x02\x02\x02\u01D1S\x03\x02\x02\x02\u01D2" +
		"\u01D8\x05V,\x02\u01D3\u01D8\x05X-\x02\u01D4\u01D8\x05\n\x06\x02\u01D5" +
		"\u01D8\x05\x0E\b\x02\u01D6\u01D8\x05L\'\x02\u01D7\u01D2\x03\x02\x02\x02" +
		"\u01D7\u01D3\x03\x02\x02\x02\u01D7\u01D4\x03\x02\x02\x02\u01D7\u01D5\x03" +
		"\x02\x02\x02\u01D7\u01D6\x03\x02\x02\x02\u01D8U\x03\x02\x02\x02\u01D9" +
		"\u01DA\x05b2\x02\u01DAW\x03\x02\x02\x02\u01DB\u01DC\x07\x05\x02\x02\u01DC" +
		"\u01DD\x05\x10\t\x02\u01DDY\x03\x02\x02\x02\u01DE\u01DF\x07\f\x02\x02" +
		"\u01DF\u01E0\x07&\x02\x02\u01E0\u01E1\x05\x0E\b\x02\u01E1\u01E2\x07\'" +
		"\x02\x02\u01E2\u01E4\x05P)\x02\u01E3\u01E5\x05\\/\x02\u01E4\u01E3\x03" +
		"\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5[\x03\x02\x02\x02\u01E6" +
		"\u01E9\x07\r\x02\x02\u01E7\u01EA\x05P)\x02\u01E8\u01EA\x05Z.\x02\u01E9" +
		"\u01E7\x03\x02\x02\x02\u01E9\u01E8\x03\x02\x02\x02\u01EA]\x03\x02\x02" +
		"\x02\u01EB\u01EC\x07\x0E\x02\x02\u01EC\u01EE\x07&\x02\x02\u01ED\u01EF" +
		"\x05\x0E\b\x02\u01EE\u01ED\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02" +
		"\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F1\x07\'\x02\x02\u01F1\u01F2\x05" +
		"P)\x02\u01F2_\x03\x02\x02\x02\u01F3\u01F4\x07\x0F\x02\x02\u01F4\u01F5" +
		"\x07&\x02\x02\u01F5\u01F6\x07\x10\x02\x02\u01F6\u01F7\x07\x12\x02\x02" +
		"\u01F7\u01F8\x05\f\x07\x02\u01F8\u01F9\x07,\x02\x02\u01F9\u01FA\x05\x0E" +
		"\b\x02\u01FA\u01FB\x07.\x02\x02\u01FB\u01FC\x05\x0E\b\x02\u01FC\u01FD" +
		"\x07.\x02\x02\u01FD\u01FE\x05\x0E\b\x02\u01FE\u01FF\x07\'\x02\x02\u01FF" +
		"\u0200\x05P)\x02\u0200a\x03\x02\x02\x02\u0201\u0202\x07f\x02\x02\u0202" +
		"c\x03\x02\x02\x02:hjtz|\x85\x87\x91\x9F\xAD\xAF\xB4\xB8\xBD\xC3\xC8\xD2" +
		"\xDB\xDF\xE5\xEE\xF7\xFF\u0106\u0111\u0115\u0117\u011A\u011D\u0120\u0128" +
		"\u012C\u0130\u0133\u013C\u013F\u0146\u0156\u0160\u0162\u016D\u0177\u0181" +
		"\u0185\u018D\u0190\u0193\u019D\u01AC\u01C5\u01CA\u01D0\u01D7\u01E4\u01E9" +
		"\u01EE";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RalphParser.__ATN) {
			RalphParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RalphParser._serializedATN));
		}

		return RalphParser.__ATN;
	}

}

export class SourceFileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(RalphParser.EOF, 0); }
	public txScript(): TxScriptContext[];
	public txScript(i: number): TxScriptContext;
	public txScript(i?: number): TxScriptContext | TxScriptContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TxScriptContext);
		} else {
			return this.getRuleContext(i, TxScriptContext);
		}
	}
	public contract(): ContractContext[];
	public contract(i: number): ContractContext;
	public contract(i?: number): ContractContext | ContractContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContractContext);
		} else {
			return this.getRuleContext(i, ContractContext);
		}
	}
	public interface(): InterfaceContext[];
	public interface(i: number): InterfaceContext;
	public interface(i?: number): InterfaceContext | InterfaceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceContext);
		} else {
			return this.getRuleContext(i, InterfaceContext);
		}
	}
	public assetScript(): AssetScriptContext[];
	public assetScript(i: number): AssetScriptContext;
	public assetScript(i?: number): AssetScriptContext | AssetScriptContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssetScriptContext);
		} else {
			return this.getRuleContext(i, AssetScriptContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_sourceFile; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterSourceFile) {
			listener.enterSourceFile(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitSourceFile) {
			listener.exitSourceFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitSourceFile) {
			return visitor.visitSourceFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public varName(): VarNameContext[];
	public varName(i: number): VarNameContext;
	public varName(i?: number): VarNameContext | VarNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarNameContext);
		} else {
			return this.getRuleContext(i, VarNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COMMA);
		} else {
			return this.getToken(RalphParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDeclSingleContext extends ParserRuleContext {
	public varName(): VarNameContext {
		return this.getRuleContext(0, VarNameContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(RalphParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CONST(): TerminalNode | undefined { return this.tryGetToken(RalphParser.CONST, 0); }
	public LET(): TerminalNode | undefined { return this.tryGetToken(RalphParser.LET, 0); }
	public MUT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_varDeclSingle; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterVarDeclSingle) {
			listener.enterVarDeclSingle(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitVarDeclSingle) {
			listener.exitVarDeclSingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitVarDeclSingle) {
			return visitor.visitVarDeclSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDeclMultiContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(RalphParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CONST(): TerminalNode | undefined { return this.tryGetToken(RalphParser.CONST, 0); }
	public LET(): TerminalNode | undefined { return this.tryGetToken(RalphParser.LET, 0); }
	public MUT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_varDeclMulti; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterVarDeclMulti) {
			listener.enterVarDeclMulti(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitVarDeclMulti) {
			listener.exitVarDeclMulti(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitVarDeclMulti) {
			return visitor.visitVarDeclMulti(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDeclContext extends ParserRuleContext {
	public varDeclSingle(): VarDeclSingleContext | undefined {
		return this.tryGetRuleContext(0, VarDeclSingleContext);
	}
	public varDeclMulti(): VarDeclMultiContext | undefined {
		return this.tryGetRuleContext(0, VarDeclMultiContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_varDecl; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterVarDecl) {
			listener.enterVarDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitVarDecl) {
			listener.exitVarDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitVarDecl) {
			return visitor.visitVarDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_varName; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterVarName) {
			listener.enterVarName(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitVarName) {
			listener.exitVarName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitVarName) {
			return visitor.visitVarName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public primaryExpr(): PrimaryExprContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExprContext);
	}
	public callChain(): CallChainContext | undefined {
		return this.tryGetRuleContext(0, CallChainContext);
	}
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(RalphParser.SUB, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.NOT, 0); }
	public CONCAT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.CONCAT, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ADD, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(RalphParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MOD, 0); }
	public EXP(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EXP, 0); }
	public MOD_EXP(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MOD_EXP, 0); }
	public MODADD(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MODADD, 0); }
	public MODSUB(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MODSUB, 0); }
	public MODMUL(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MODMUL, 0); }
	public SHL(): TerminalNode | undefined { return this.tryGetToken(RalphParser.SHL, 0); }
	public SHR(): TerminalNode | undefined { return this.tryGetToken(RalphParser.SHR, 0); }
	public BITAND(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BITAND, 0); }
	public XOR(): TerminalNode | undefined { return this.tryGetToken(RalphParser.XOR, 0); }
	public BITOR(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BITOR, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EQ, 0); }
	public NQ(): TerminalNode | undefined { return this.tryGetToken(RalphParser.NQ, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.LT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(RalphParser.LE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.GT, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(RalphParser.GE, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(RalphParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(RalphParser.OR, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_expression; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COMMA);
		} else {
			return this.getToken(RalphParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallChainContext extends ParserRuleContext {
	public varName(): VarNameContext | undefined {
		return this.tryGetRuleContext(0, VarNameContext);
	}
	public methodCall(): MethodCallContext | undefined {
		return this.tryGetRuleContext(0, MethodCallContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.DOT);
		} else {
			return this.getToken(RalphParser.DOT, i);
		}
	}
	public callChain(): CallChainContext[];
	public callChain(i: number): CallChainContext;
	public callChain(i?: number): CallChainContext | CallChainContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CallChainContext);
		} else {
			return this.getRuleContext(i, CallChainContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_callChain; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterCallChain) {
			listener.enterCallChain(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitCallChain) {
			listener.exitCallChain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitCallChain) {
			return visitor.visitCallChain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodCallContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	public aps(): ApsContext | undefined {
		return this.tryGetRuleContext(0, ApsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_methodCall; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterMethodCall) {
			listener.enterMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitMethodCall) {
			listener.exitMethodCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitMethodCall) {
			return visitor.visitMethodCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PayerContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_payer; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterPayer) {
			listener.enterPayer(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitPayer) {
			listener.exitPayer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitPayer) {
			return visitor.visitPayer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ApsTokenIdContext extends ParserRuleContext {
	public ALPH_TOKEN_ID(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ALPH_TOKEN_ID, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_apsTokenId; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterApsTokenId) {
			listener.enterApsTokenId(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitApsTokenId) {
			listener.exitApsTokenId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitApsTokenId) {
			return visitor.visitApsTokenId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ApsContext extends ParserRuleContext {
	public L_CURLY(): TerminalNode { return this.getToken(RalphParser.L_CURLY, 0); }
	public payer(): PayerContext {
		return this.getRuleContext(0, PayerContext);
	}
	public R_ARROW(): TerminalNode { return this.getToken(RalphParser.R_ARROW, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(RalphParser.R_CURLY, 0); }
	public apsTokenId(): ApsTokenIdContext[];
	public apsTokenId(i: number): ApsTokenIdContext;
	public apsTokenId(i?: number): ApsTokenIdContext | ApsTokenIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ApsTokenIdContext);
		} else {
			return this.getRuleContext(i, ApsTokenIdContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COLON);
		} else {
			return this.getToken(RalphParser.COLON, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COMMA);
		} else {
			return this.getToken(RalphParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_aps; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterAps) {
			listener.enterAps(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitAps) {
			listener.exitAps(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitAps) {
			return visitor.visitAps(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExprContext extends ParserRuleContext {
	public basicLit(): BasicLitContext | undefined {
		return this.tryGetRuleContext(0, BasicLitContext);
	}
	public arrayExpr(): ArrayExprContext | undefined {
		return this.tryGetRuleContext(0, ArrayExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_primaryExpr; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterPrimaryExpr) {
			listener.enterPrimaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitPrimaryExpr) {
			listener.exitPrimaryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitPrimaryExpr) {
			return visitor.visitPrimaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BOOL, 0); }
	public I256(): TerminalNode | undefined { return this.tryGetToken(RalphParser.I256, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BYTE, 0); }
	public U256(): TerminalNode | undefined { return this.tryGetToken(RalphParser.U256, 0); }
	public BYTEVEC(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BYTEVEC, 0); }
	public ADDRESS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ADDRESS, 0); }
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(RalphParser.L_BRACKET, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(RalphParser.SEMI, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public R_BRACKET(): TerminalNode { return this.getToken(RalphParser.R_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_arrayType; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayExprContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(RalphParser.L_BRACKET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public R_BRACKET(): TerminalNode { return this.getToken(RalphParser.R_BRACKET, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COMMA);
		} else {
			return this.getToken(RalphParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_arrayExpr; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterArrayExpr) {
			listener.enterArrayExpr(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitArrayExpr) {
			listener.exitArrayExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitArrayExpr) {
			return visitor.visitArrayExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeName; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResultContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public typeName(): TypeNameContext[];
	public typeName(i: number): TypeNameContext;
	public typeName(i?: number): TypeNameContext | TypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeNameContext);
		} else {
			return this.getRuleContext(i, TypeNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COMMA);
		} else {
			return this.getToken(RalphParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_result; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterResult) {
			listener.enterResult(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitResult) {
			listener.exitResult(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitResult) {
			return visitor.visitResult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public COLON(): TerminalNode { return this.getToken(RalphParser.COLON, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public ATUNUSED(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ATUNUSED, 0); }
	public MUT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_param; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterParam) {
			listener.enterParam(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitParam) {
			listener.exitParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitParam) {
			return visitor.visitParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamListContext extends ParserRuleContext {
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COMMA);
		} else {
			return this.getToken(RalphParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_paramList; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterParamList) {
			listener.enterParamList(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitParamList) {
			listener.exitParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitParamList) {
			return visitor.visitParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclContext extends ParserRuleContext {
	public FN(): TerminalNode { return this.getToken(RalphParser.FN, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public paramList(): ParamListContext {
		return this.getRuleContext(0, ParamListContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUB(): TerminalNode | undefined { return this.tryGetToken(RalphParser.PUB, 0); }
	public R_ARROW(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_ARROW, 0); }
	public result(): ResultContext | undefined {
		return this.tryGetRuleContext(0, ResultContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_methodDecl; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterMethodDecl) {
			listener.enterMethodDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitMethodDecl) {
			listener.exitMethodDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitMethodDecl) {
			return visitor.visitMethodDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicLitContext extends ParserRuleContext {
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	public string_(): String_Context | undefined {
		return this.tryGetRuleContext(0, String_Context);
	}
	public ADDRESS_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ADDRESS_LIT, 0); }
	public ALPH_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ALPH_LIT, 0); }
	public BOOL_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BOOL_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_basicLit; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterBasicLit) {
			listener.enterBasicLit(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitBasicLit) {
			listener.exitBasicLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitBasicLit) {
			return visitor.visitBasicLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	public DECIMAL_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.DECIMAL_LIT, 0); }
	public BINARY_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BINARY_LIT, 0); }
	public OCTAL_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.OCTAL_LIT, 0); }
	public HEX_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.HEX_LIT, 0); }
	public IMAGINARY_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IMAGINARY_LIT, 0); }
	public RUNE_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.RUNE_LIT, 0); }
	public BYTEVEC_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BYTEVEC_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_integer; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitInteger) {
			return visitor.visitInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_Context extends ParserRuleContext {
	public RAW_STRING_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.RAW_STRING_LIT, 0); }
	public INTERPRETED_STRING_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.INTERPRETED_STRING_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_string_; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterString_) {
			listener.enterString_(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitString_) {
			listener.exitString_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitString_) {
			return visitor.visitString_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarNameAssignContext extends ParserRuleContext {
	public varName(): VarNameContext {
		return this.getRuleContext(0, VarNameContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(RalphParser.ASSIGN, 0); }
	public basicLit(): BasicLitContext {
		return this.getRuleContext(0, BasicLitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_varNameAssign; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterVarNameAssign) {
			listener.enterVarNameAssign(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitVarNameAssign) {
			listener.exitVarNameAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitVarNameAssign) {
			return visitor.visitVarNameAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(RalphParser.ENUM, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public L_CURLY(): TerminalNode { return this.getToken(RalphParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(RalphParser.R_CURLY, 0); }
	public varNameAssign(): VarNameAssignContext[];
	public varNameAssign(i: number): VarNameAssignContext;
	public varNameAssign(i?: number): VarNameAssignContext | VarNameAssignContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarNameAssignContext);
		} else {
			return this.getRuleContext(i, VarNameAssignContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_enum; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterEnum) {
			listener.enterEnum(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitEnum) {
			listener.exitEnum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitEnum) {
			return visitor.visitEnum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStructBodyContext extends ParserRuleContext {
	public L_CURLY(): TerminalNode { return this.getToken(RalphParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(RalphParser.R_CURLY, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public event(): EventContext[];
	public event(i: number): EventContext;
	public event(i?: number): EventContext | EventContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EventContext);
		} else {
			return this.getRuleContext(i, EventContext);
		}
	}
	public methodDecl(): MethodDeclContext[];
	public methodDecl(i: number): MethodDeclContext;
	public methodDecl(i?: number): MethodDeclContext | MethodDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodDeclContext);
		} else {
			return this.getRuleContext(i, MethodDeclContext);
		}
	}
	public enum(): EnumContext[];
	public enum(i: number): EnumContext;
	public enum(i?: number): EnumContext | EnumContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumContext);
		} else {
			return this.getRuleContext(i, EnumContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeStructBody; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeStructBody) {
			listener.enterTypeStructBody(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeStructBody) {
			listener.exitTypeStructBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeStructBody) {
			return visitor.visitTypeStructBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TxScriptContext extends ParserRuleContext {
	public TXSCRIPT(): TerminalNode { return this.getToken(RalphParser.TXSCRIPT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public typeStructBody(): TypeStructBodyContext {
		return this.getRuleContext(0, TypeStructBodyContext);
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_txScript; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTxScript) {
			listener.enterTxScript(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTxScript) {
			listener.exitTxScript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTxScript) {
			return visitor.visitTxScript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssetScriptContext extends ParserRuleContext {
	public ASSETSCRIPT(): TerminalNode { return this.getToken(RalphParser.ASSETSCRIPT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public typeStructBody(): TypeStructBodyContext {
		return this.getRuleContext(0, TypeStructBodyContext);
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_assetScript; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterAssetScript) {
			listener.enterAssetScript(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitAssetScript) {
			listener.exitAssetScript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitAssetScript) {
			return visitor.visitAssetScript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStmtContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(RalphParser.IMPORT, 0); }
	public IMPORT_PATH(): TerminalNode { return this.getToken(RalphParser.IMPORT_PATH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_importStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterImportStmt) {
			listener.enterImportStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitImportStmt) {
			listener.exitImportStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitImportStmt) {
			return visitor.visitImportStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractContext extends ParserRuleContext {
	public CONTRACT(): TerminalNode { return this.getToken(RalphParser.CONTRACT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public typeStructBody(): TypeStructBodyContext {
		return this.getRuleContext(0, TypeStructBodyContext);
	}
	public importStmt(): ImportStmtContext[];
	public importStmt(i: number): ImportStmtContext;
	public importStmt(i?: number): ImportStmtContext | ImportStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportStmtContext);
		} else {
			return this.getRuleContext(i, ImportStmtContext);
		}
	}
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ABSTRACT, 0); }
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public extends(): ExtendsContext | undefined {
		return this.tryGetRuleContext(0, ExtendsContext);
	}
	public implements(): ImplementsContext | undefined {
		return this.tryGetRuleContext(0, ImplementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_contract; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterContract) {
			listener.enterContract(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitContract) {
			listener.exitContract(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitContract) {
			return visitor.visitContract(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtendsContext extends ParserRuleContext {
	public EXTENDS(): TerminalNode { return this.getToken(RalphParser.EXTENDS, 0); }
	public contractExtends(): ContractExtendsContext[];
	public contractExtends(i: number): ContractExtendsContext;
	public contractExtends(i?: number): ContractExtendsContext | ContractExtendsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContractExtendsContext);
		} else {
			return this.getRuleContext(i, ContractExtendsContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COMMA);
		} else {
			return this.getToken(RalphParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_extends; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterExtends) {
			listener.enterExtends(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitExtends) {
			listener.exitExtends(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitExtends) {
			return visitor.visitExtends(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractExtendsContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_contractExtends; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterContractExtends) {
			listener.enterContractExtends(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitContractExtends) {
			listener.exitContractExtends(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitContractExtends) {
			return visitor.visitContractExtends(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplementsContext extends ParserRuleContext {
	public IMPLEMENTS(): TerminalNode { return this.getToken(RalphParser.IMPLEMENTS, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_implements; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterImplements) {
			listener.enterImplements(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitImplements) {
			listener.exitImplements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitImplements) {
			return visitor.visitImplements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(RalphParser.INTERFACE, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.IDENTIFIER);
		} else {
			return this.getToken(RalphParser.IDENTIFIER, i);
		}
	}
	public typeStructBody(): TypeStructBodyContext {
		return this.getRuleContext(0, TypeStructBodyContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EXTENDS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_interface; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterInterface) {
			listener.enterInterface(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitInterface) {
			listener.exitInterface(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitInterface) {
			return visitor.visitInterface(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventContext extends ParserRuleContext {
	public EVENT(): TerminalNode { return this.getToken(RalphParser.EVENT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public paramList(): ParamListContext {
		return this.getRuleContext(0, ParamListContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_event; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterEvent) {
			listener.enterEvent(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitEvent) {
			listener.exitEvent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitEvent) {
			return visitor.visitEvent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmitContext extends ParserRuleContext {
	public EMIT(): TerminalNode { return this.getToken(RalphParser.EMIT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_emit; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterEmit) {
			listener.enterEmit(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitEmit) {
			listener.exitEmit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitEmit) {
			return visitor.visitEmit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public ATUSING(): TerminalNode { return this.getToken(RalphParser.ATUSING, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_annotation; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public L_CURLY(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_CURLY, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_block; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public simpleStmt(): SimpleStmtContext | undefined {
		return this.tryGetRuleContext(0, SimpleStmtContext);
	}
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	public whileStmt(): WhileStmtContext | undefined {
		return this.tryGetRuleContext(0, WhileStmtContext);
	}
	public forStmt(): ForStmtContext | undefined {
		return this.tryGetRuleContext(0, ForStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_statement; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleStmtContext extends ParserRuleContext {
	public emptyStmt(): EmptyStmtContext | undefined {
		return this.tryGetRuleContext(0, EmptyStmtContext);
	}
	public returnStmt(): ReturnStmtContext | undefined {
		return this.tryGetRuleContext(0, ReturnStmtContext);
	}
	public varDecl(): VarDeclContext | undefined {
		return this.tryGetRuleContext(0, VarDeclContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public emit(): EmitContext | undefined {
		return this.tryGetRuleContext(0, EmitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_simpleStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterSimpleStmt) {
			listener.enterSimpleStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitSimpleStmt) {
			listener.exitSimpleStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitSimpleStmt) {
			return visitor.visitSimpleStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStmtContext extends ParserRuleContext {
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_emptyStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterEmptyStmt) {
			listener.enterEmptyStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitEmptyStmt) {
			listener.exitEmptyStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitEmptyStmt) {
			return visitor.visitEmptyStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStmtContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(RalphParser.RETURN, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_returnStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterReturnStmt) {
			listener.enterReturnStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitReturnStmt) {
			listener.exitReturnStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStmtContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(RalphParser.IF, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public elseStmt(): ElseStmtContext | undefined {
		return this.tryGetRuleContext(0, ElseStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_ifStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterIfStmt) {
			listener.enterIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitIfStmt) {
			listener.exitIfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseStmtContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(RalphParser.ELSE, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_elseStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterElseStmt) {
			listener.enterElseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitElseStmt) {
			listener.exitElseStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitElseStmt) {
			return visitor.visitElseStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStmtContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(RalphParser.WHILE, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_whileStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterWhileStmt) {
			listener.enterWhileStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitWhileStmt) {
			listener.exitWhileStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitWhileStmt) {
			return visitor.visitWhileStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(RalphParser.FOR, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public LET(): TerminalNode { return this.getToken(RalphParser.LET, 0); }
	public MUT(): TerminalNode { return this.getToken(RalphParser.MUT, 0); }
	public varName(): VarNameContext {
		return this.getRuleContext(0, VarNameContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(RalphParser.ASSIGN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.SEMI);
		} else {
			return this.getToken(RalphParser.SEMI, i);
		}
	}
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_forStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterForStmt) {
			listener.enterForStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitForStmt) {
			listener.exitForStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitForStmt) {
			return visitor.visitForStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EosContext extends ParserRuleContext {
	public EOS(): TerminalNode { return this.getToken(RalphParser.EOS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_eos; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterEos) {
			listener.enterEos(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitEos) {
			listener.exitEos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitEos) {
			return visitor.visitEos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


