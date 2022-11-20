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
	public static readonly IF = 9;
	public static readonly ELSE = 10;
	public static readonly WHILE = 11;
	public static readonly FOR = 12;
	public static readonly LET = 13;
	public static readonly CONST = 14;
	public static readonly MUT = 15;
	public static readonly EXTENDS = 16;
	public static readonly ABSTRACT = 17;
	public static readonly IMPLEMENTS = 18;
	public static readonly EVENT = 19;
	public static readonly EMIT = 20;
	public static readonly ATUSING = 21;
	public static readonly USING = 22;
	public static readonly AT = 23;
	public static readonly BOOL = 24;
	public static readonly I256 = 25;
	public static readonly U256 = 26;
	public static readonly BYTE = 27;
	public static readonly BYTEVEC = 28;
	public static readonly ADDRESS = 29;
	public static readonly ATUNUSED = 30;
	public static readonly UNUSED = 31;
	public static readonly R_ARROW = 32;
	public static readonly IDENTIFIER = 33;
	public static readonly L_PAREN = 34;
	public static readonly R_PAREN = 35;
	public static readonly L_CURLY = 36;
	public static readonly R_CURLY = 37;
	public static readonly L_BRACKET = 38;
	public static readonly R_BRACKET = 39;
	public static readonly ASSIGN = 40;
	public static readonly COMMA = 41;
	public static readonly SEMI = 42;
	public static readonly COLON = 43;
	public static readonly DOT = 44;
	public static readonly POUND = 45;
	public static readonly DOUBT = 46;
	public static readonly CONCAT = 47;
	public static readonly ADD = 48;
	public static readonly SUB = 49;
	public static readonly MUL = 50;
	public static readonly DIV = 51;
	public static readonly MOD = 52;
	public static readonly MODADD = 53;
	public static readonly MODSUB = 54;
	public static readonly MODMUL = 55;
	public static readonly SHL = 56;
	public static readonly SHR = 57;
	public static readonly BITAND = 58;
	public static readonly XOR = 59;
	public static readonly BITOR = 60;
	public static readonly EQ = 61;
	public static readonly NQ = 62;
	public static readonly LT = 63;
	public static readonly LE = 64;
	public static readonly GT = 65;
	public static readonly GE = 66;
	public static readonly AND = 67;
	public static readonly OR = 68;
	public static readonly NOT = 69;
	public static readonly ALPH = 70;
	public static readonly ADDRESS_LIT = 71;
	public static readonly ALPH_LIT = 72;
	public static readonly BOOL_LIT = 73;
	public static readonly DECIMAL_LIT = 74;
	public static readonly BINARY_LIT = 75;
	public static readonly OCTAL_LIT = 76;
	public static readonly HEX_LIT = 77;
	public static readonly FLOAT_LIT = 78;
	public static readonly DECIMAL_FLOAT_LIT = 79;
	public static readonly HEX_FLOAT_LIT = 80;
	public static readonly IMAGINARY_LIT = 81;
	public static readonly RUNE_LIT = 82;
	public static readonly BYTE_VALUE = 83;
	public static readonly OCTAL_BYTE_VALUE = 84;
	public static readonly HEX_BYTE_VALUE = 85;
	public static readonly LITTLE_U_VALUE = 86;
	public static readonly BIG_U_VALUE = 87;
	public static readonly RAW_STRING_LIT = 88;
	public static readonly INTERPRETED_STRING_LIT = 89;
	public static readonly WS = 90;
	public static readonly COMMENT = 91;
	public static readonly LINE_COMMENT = 92;
	public static readonly TERMINATOR = 93;
	public static readonly EOS = 94;
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
	public static readonly RULE_apsAlph = 10;
	public static readonly RULE_apsToken = 11;
	public static readonly RULE_apsBoth = 12;
	public static readonly RULE_aps = 13;
	public static readonly RULE_primaryExpr = 14;
	public static readonly RULE_primitiveType = 15;
	public static readonly RULE_arrayType = 16;
	public static readonly RULE_arrayExpr = 17;
	public static readonly RULE_typeName = 18;
	public static readonly RULE_result = 19;
	public static readonly RULE_param = 20;
	public static readonly RULE_paramList = 21;
	public static readonly RULE_methodDecl = 22;
	public static readonly RULE_basicLit = 23;
	public static readonly RULE_integer = 24;
	public static readonly RULE_string_ = 25;
	public static readonly RULE_varNameAssign = 26;
	public static readonly RULE_enum = 27;
	public static readonly RULE_typeStructBody = 28;
	public static readonly RULE_txScript = 29;
	public static readonly RULE_assetScript = 30;
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
		"apsAlph", "apsToken", "apsBoth", "aps", "primaryExpr", "primitiveType", 
		"arrayType", "arrayExpr", "typeName", "result", "param", "paramList", 
		"methodDecl", "basicLit", "integer", "string_", "varNameAssign", "enum", 
		"typeStructBody", "txScript", "assetScript", "contract", "extends", "contractExtends", 
		"implements", "interface", "event", "emit", "annotation", "block", "statement", 
		"simpleStmt", "emptyStmt", "returnStmt", "ifStmt", "elseStmt", "whileStmt", 
		"forStmt", "eos",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'fn'", "'pub'", "'return'", "'Interface'", "'enum'", "'TxScript'", 
		"'Contract'", "'AssetScript'", "'if'", "'else'", "'while'", "'for'", "'let'", 
		"'const'", "'mut'", "'extends'", "'Abstract'", "'implements'", "'event'", 
		"'emit'", "'@using'", "'using'", "'@'", "'Bool'", "'I256'", "'U256'", 
		"'Byte'", "'ByteVec'", "'Address'", "'@unused'", "'unused'", "'->'", undefined, 
		"'('", "')'", "'{'", "'}'", "'['", "']'", "'='", "','", "';'", "':'", 
		"'.'", "'#'", "'?'", "'++'", "'+'", "'-'", "'*'", "'/'", "'%'", undefined, 
		undefined, undefined, "'<<'", "'>>'", "'&'", "'^'", "'|'", "'=='", "'!='", 
		"'<'", "'<='", "'>'", "'>='", "'&&'", "'||'", "'!'", "'alph'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "FN", "PUB", "RETURN", "INTERFACE", "ENUM", "TXSCRIPT", "CONTRACT", 
		"ASSETSCRIPT", "IF", "ELSE", "WHILE", "FOR", "LET", "CONST", "MUT", "EXTENDS", 
		"ABSTRACT", "IMPLEMENTS", "EVENT", "EMIT", "ATUSING", "USING", "AT", "BOOL", 
		"I256", "U256", "BYTE", "BYTEVEC", "ADDRESS", "ATUNUSED", "UNUSED", "R_ARROW", 
		"IDENTIFIER", "L_PAREN", "R_PAREN", "L_CURLY", "R_CURLY", "L_BRACKET", 
		"R_BRACKET", "ASSIGN", "COMMA", "SEMI", "COLON", "DOT", "POUND", "DOUBT", 
		"CONCAT", "ADD", "SUB", "MUL", "DIV", "MOD", "MODADD", "MODSUB", "MODMUL", 
		"SHL", "SHR", "BITAND", "XOR", "BITOR", "EQ", "NQ", "LT", "LE", "GT", 
		"GE", "AND", "OR", "NOT", "ALPH", "ADDRESS_LIT", "ALPH_LIT", "BOOL_LIT", 
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
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.INTERFACE) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.ASSETSCRIPT) | (1 << RalphParser.ABSTRACT))) !== 0)) {
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
						if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (RalphParser.CONCAT - 47)) | (1 << (RalphParser.ADD - 47)) | (1 << (RalphParser.SUB - 47)) | (1 << (RalphParser.MUL - 47)) | (1 << (RalphParser.DIV - 47)) | (1 << (RalphParser.MOD - 47)) | (1 << (RalphParser.MODADD - 47)) | (1 << (RalphParser.MODSUB - 47)) | (1 << (RalphParser.MODMUL - 47)) | (1 << (RalphParser.SHL - 47)) | (1 << (RalphParser.SHR - 47)) | (1 << (RalphParser.BITAND - 47)) | (1 << (RalphParser.XOR - 47)) | (1 << (RalphParser.BITOR - 47)))) !== 0))) {
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
						if (!(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (RalphParser.EQ - 61)) | (1 << (RalphParser.NQ - 61)) | (1 << (RalphParser.LT - 61)) | (1 << (RalphParser.LE - 61)) | (1 << (RalphParser.GT - 61)) | (1 << (RalphParser.GE - 61)))) !== 0))) {
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
	public apsAlph(): ApsAlphContext {
		let _localctx: ApsAlphContext = new ApsAlphContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, RalphParser.RULE_apsAlph);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.expression(0);
			this.state = 205;
			this.match(RalphParser.R_ARROW);
			this.state = 206;
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
	public apsToken(): ApsTokenContext {
		let _localctx: ApsTokenContext = new ApsTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, RalphParser.RULE_apsToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.apsAlph();
			this.state = 209;
			this.match(RalphParser.COLON);
			this.state = 210;
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
	public apsBoth(): ApsBothContext {
		let _localctx: ApsBothContext = new ApsBothContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, RalphParser.RULE_apsBoth);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.apsAlph();
			this.state = 213;
			this.match(RalphParser.COMMA);
			this.state = 214;
			this.expression(0);
			this.state = 215;
			this.match(RalphParser.COLON);
			this.state = 216;
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
	public aps(): ApsContext {
		let _localctx: ApsContext = new ApsContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, RalphParser.RULE_aps);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this.match(RalphParser.L_CURLY);
			this.state = 222;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 219;
				this.apsAlph();
				}
				break;

			case 2:
				{
				this.state = 220;
				this.apsToken();
				}
				break;

			case 3:
				{
				this.state = 221;
				this.apsBoth();
				}
				break;
			}
			this.state = 224;
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
		this.enterRule(_localctx, 28, RalphParser.RULE_primaryExpr);
		try {
			this.state = 228;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.ADDRESS_LIT:
			case RalphParser.ALPH_LIT:
			case RalphParser.BOOL_LIT:
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
				this.state = 226;
				this.basicLit();
				}
				break;
			case RalphParser.IDENTIFIER:
			case RalphParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 227;
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
		this.enterRule(_localctx, 30, RalphParser.RULE_primitiveType);
		try {
			this.state = 237;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.BOOL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 230;
				this.match(RalphParser.BOOL);
				}
				break;
			case RalphParser.I256:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 231;
				this.match(RalphParser.I256);
				}
				break;
			case RalphParser.BYTE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 232;
				this.match(RalphParser.BYTE);
				}
				break;
			case RalphParser.U256:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 233;
				this.match(RalphParser.U256);
				}
				break;
			case RalphParser.BYTEVEC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 234;
				this.match(RalphParser.BYTEVEC);
				}
				break;
			case RalphParser.ADDRESS:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 235;
				this.match(RalphParser.ADDRESS);
				}
				break;
			case RalphParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 236;
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
		this.enterRule(_localctx, 32, RalphParser.RULE_arrayType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this.match(RalphParser.L_BRACKET);
			this.state = 240;
			this.typeName();
			this.state = 241;
			this.match(RalphParser.SEMI);
			this.state = 242;
			this.expression(0);
			this.state = 243;
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
		this.enterRule(_localctx, 34, RalphParser.RULE_arrayExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.IDENTIFIER) {
				{
				this.state = 245;
				this.match(RalphParser.IDENTIFIER);
				}
			}

			this.state = 248;
			this.match(RalphParser.L_BRACKET);
			this.state = 249;
			this.expression(0);
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 250;
				this.match(RalphParser.COMMA);
				this.state = 251;
				this.expression(0);
				}
				}
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 257;
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
		this.enterRule(_localctx, 36, RalphParser.RULE_typeName);
		try {
			this.state = 261;
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
				this.state = 259;
				this.primitiveType();
				}
				break;
			case RalphParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 260;
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
		this.enterRule(_localctx, 38, RalphParser.RULE_result);
		let _la: number;
		try {
			let _alt: number;
			this.state = 281;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 263;
				this.match(RalphParser.L_PAREN);
				this.state = 264;
				this.match(RalphParser.R_PAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 265;
				this.typeName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 266;
				this.match(RalphParser.L_PAREN);
				this.state = 278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (RalphParser.BOOL - 24)) | (1 << (RalphParser.I256 - 24)) | (1 << (RalphParser.U256 - 24)) | (1 << (RalphParser.BYTE - 24)) | (1 << (RalphParser.BYTEVEC - 24)) | (1 << (RalphParser.ADDRESS - 24)) | (1 << (RalphParser.IDENTIFIER - 24)) | (1 << (RalphParser.L_BRACKET - 24)))) !== 0)) {
					{
					this.state = 267;
					this.typeName();
					this.state = 272;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 268;
							this.match(RalphParser.COMMA);
							this.state = 269;
							this.typeName();
							}
							}
						}
						this.state = 274;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
					}
					this.state = 276;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RalphParser.COMMA) {
						{
						this.state = 275;
						this.match(RalphParser.COMMA);
						}
					}

					}
				}

				this.state = 280;
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
		this.enterRule(_localctx, 40, RalphParser.RULE_param);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.ATUNUSED) {
				{
				this.state = 283;
				this.match(RalphParser.ATUNUSED);
				}
			}

			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.MUT) {
				{
				this.state = 286;
				this.match(RalphParser.MUT);
				}
			}

			this.state = 289;
			this.match(RalphParser.IDENTIFIER);
			this.state = 290;
			this.match(RalphParser.COLON);
			this.state = 291;
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
		this.enterRule(_localctx, 42, RalphParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & ((1 << (RalphParser.MUT - 15)) | (1 << (RalphParser.ATUNUSED - 15)) | (1 << (RalphParser.IDENTIFIER - 15)))) !== 0)) {
				{
				{
				this.state = 293;
				this.param();
				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.COMMA) {
					{
					this.state = 294;
					this.match(RalphParser.COMMA);
					}
				}

				}
				}
				this.state = 301;
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
		this.enterRule(_localctx, 44, RalphParser.RULE_methodDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.ATUSING) {
				{
				this.state = 302;
				this.annotation();
				}
			}

			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.PUB) {
				{
				this.state = 305;
				this.match(RalphParser.PUB);
				}
			}

			this.state = 308;
			this.match(RalphParser.FN);
			this.state = 309;
			this.match(RalphParser.IDENTIFIER);
			this.state = 310;
			this.match(RalphParser.L_PAREN);
			this.state = 311;
			this.paramList();
			this.state = 312;
			this.match(RalphParser.R_PAREN);
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.R_ARROW) {
				{
				this.state = 313;
				this.match(RalphParser.R_ARROW);
				this.state = 314;
				this.result();
				}
			}

			this.state = 318;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 317;
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
		this.enterRule(_localctx, 46, RalphParser.RULE_basicLit);
		try {
			this.state = 325;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.DECIMAL_LIT:
			case RalphParser.BINARY_LIT:
			case RalphParser.OCTAL_LIT:
			case RalphParser.HEX_LIT:
			case RalphParser.IMAGINARY_LIT:
			case RalphParser.RUNE_LIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 320;
				this.integer();
				}
				break;
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 321;
				this.string_();
				}
				break;
			case RalphParser.ADDRESS_LIT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 322;
				this.match(RalphParser.ADDRESS_LIT);
				}
				break;
			case RalphParser.ALPH_LIT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 323;
				this.match(RalphParser.ALPH_LIT);
				}
				break;
			case RalphParser.BOOL_LIT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 324;
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
		this.enterRule(_localctx, 48, RalphParser.RULE_integer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			_la = this._input.LA(1);
			if (!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (RalphParser.DECIMAL_LIT - 74)) | (1 << (RalphParser.BINARY_LIT - 74)) | (1 << (RalphParser.OCTAL_LIT - 74)) | (1 << (RalphParser.HEX_LIT - 74)) | (1 << (RalphParser.IMAGINARY_LIT - 74)) | (1 << (RalphParser.RUNE_LIT - 74)))) !== 0))) {
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
		this.enterRule(_localctx, 50, RalphParser.RULE_string_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
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
		this.enterRule(_localctx, 52, RalphParser.RULE_varNameAssign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this.varName();
			this.state = 332;
			this.match(RalphParser.ASSIGN);
			this.state = 333;
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
		this.enterRule(_localctx, 54, RalphParser.RULE_enum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this.match(RalphParser.ENUM);
			this.state = 336;
			this.match(RalphParser.IDENTIFIER);
			this.state = 337;
			this.match(RalphParser.L_CURLY);
			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.IDENTIFIER) {
				{
				{
				this.state = 338;
				this.varNameAssign();
				}
				}
				this.state = 343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 344;
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
		this.enterRule(_localctx, 56, RalphParser.RULE_typeStructBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.match(RalphParser.L_CURLY);
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.FN) | (1 << RalphParser.PUB) | (1 << RalphParser.RETURN) | (1 << RalphParser.ENUM) | (1 << RalphParser.IF) | (1 << RalphParser.WHILE) | (1 << RalphParser.FOR) | (1 << RalphParser.LET) | (1 << RalphParser.CONST) | (1 << RalphParser.EVENT) | (1 << RalphParser.EMIT) | (1 << RalphParser.ATUSING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RalphParser.IDENTIFIER - 33)) | (1 << (RalphParser.L_PAREN - 33)) | (1 << (RalphParser.L_BRACKET - 33)) | (1 << (RalphParser.SUB - 33)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RalphParser.NOT - 69)) | (1 << (RalphParser.ADDRESS_LIT - 69)) | (1 << (RalphParser.ALPH_LIT - 69)) | (1 << (RalphParser.BOOL_LIT - 69)) | (1 << (RalphParser.DECIMAL_LIT - 69)) | (1 << (RalphParser.BINARY_LIT - 69)) | (1 << (RalphParser.OCTAL_LIT - 69)) | (1 << (RalphParser.HEX_LIT - 69)) | (1 << (RalphParser.IMAGINARY_LIT - 69)) | (1 << (RalphParser.RUNE_LIT - 69)) | (1 << (RalphParser.RAW_STRING_LIT - 69)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 69)) | (1 << (RalphParser.EOS - 69)))) !== 0)) {
				{
				this.state = 351;
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
					this.state = 347;
					this.statement();
					}
					break;
				case RalphParser.EVENT:
					{
					this.state = 348;
					this.event();
					}
					break;
				case RalphParser.FN:
				case RalphParser.PUB:
				case RalphParser.ATUSING:
					{
					this.state = 349;
					this.methodDecl();
					}
					break;
				case RalphParser.ENUM:
					{
					this.state = 350;
					this.enum();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 356;
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
		this.enterRule(_localctx, 58, RalphParser.RULE_txScript);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this.match(RalphParser.TXSCRIPT);
			this.state = 359;
			this.match(RalphParser.IDENTIFIER);
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_PAREN) {
				{
				this.state = 360;
				this.match(RalphParser.L_PAREN);
				this.state = 361;
				this.paramList();
				this.state = 362;
				this.match(RalphParser.R_PAREN);
				}
			}

			this.state = 366;
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
		this.enterRule(_localctx, 60, RalphParser.RULE_assetScript);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.match(RalphParser.ASSETSCRIPT);
			this.state = 369;
			this.match(RalphParser.IDENTIFIER);
			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_PAREN) {
				{
				this.state = 370;
				this.match(RalphParser.L_PAREN);
				this.state = 371;
				this.paramList();
				this.state = 372;
				this.match(RalphParser.R_PAREN);
				}
			}

			this.state = 376;
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
	public contract(): ContractContext {
		let _localctx: ContractContext = new ContractContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, RalphParser.RULE_contract);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.ABSTRACT) {
				{
				this.state = 378;
				this.match(RalphParser.ABSTRACT);
				}
			}

			this.state = 381;
			this.match(RalphParser.CONTRACT);
			this.state = 382;
			this.match(RalphParser.IDENTIFIER);
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_PAREN) {
				{
				this.state = 383;
				this.match(RalphParser.L_PAREN);
				this.state = 384;
				this.paramList();
				this.state = 385;
				this.match(RalphParser.R_PAREN);
				}
			}

			this.state = 390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.EXTENDS) {
				{
				this.state = 389;
				this.extends();
				}
			}

			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.IMPLEMENTS) {
				{
				this.state = 392;
				this.implements();
				}
			}

			this.state = 395;
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
			this.state = 397;
			this.match(RalphParser.EXTENDS);
			this.state = 398;
			this.contractExtends();
			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 399;
				this.match(RalphParser.COMMA);
				this.state = 400;
				this.contractExtends();
				}
				}
				this.state = 405;
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
			this.state = 406;
			this.match(RalphParser.IDENTIFIER);
			this.state = 407;
			this.match(RalphParser.L_PAREN);
			this.state = 408;
			this.expressionList();
			this.state = 409;
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
			this.state = 411;
			this.match(RalphParser.IMPLEMENTS);
			this.state = 412;
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
			this.state = 414;
			this.match(RalphParser.INTERFACE);
			this.state = 415;
			this.match(RalphParser.IDENTIFIER);
			this.state = 418;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.EXTENDS) {
				{
				this.state = 416;
				this.match(RalphParser.EXTENDS);
				this.state = 417;
				this.match(RalphParser.IDENTIFIER);
				}
			}

			this.state = 420;
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
			this.state = 422;
			this.match(RalphParser.EVENT);
			this.state = 423;
			this.match(RalphParser.IDENTIFIER);
			this.state = 424;
			this.match(RalphParser.L_PAREN);
			this.state = 425;
			this.paramList();
			this.state = 426;
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
			this.state = 428;
			this.match(RalphParser.EMIT);
			this.state = 429;
			this.match(RalphParser.IDENTIFIER);
			this.state = 430;
			this.match(RalphParser.L_PAREN);
			this.state = 431;
			this.expressionList();
			this.state = 432;
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
			this.state = 434;
			this.match(RalphParser.ATUSING);
			this.state = 435;
			this.match(RalphParser.L_PAREN);
			this.state = 436;
			this.expressionList();
			this.state = 437;
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
			this.state = 448;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.L_CURLY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 439;
				this.match(RalphParser.L_CURLY);
				this.state = 443;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.RETURN) | (1 << RalphParser.IF) | (1 << RalphParser.WHILE) | (1 << RalphParser.FOR) | (1 << RalphParser.LET) | (1 << RalphParser.CONST) | (1 << RalphParser.EMIT))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RalphParser.IDENTIFIER - 33)) | (1 << (RalphParser.L_PAREN - 33)) | (1 << (RalphParser.L_BRACKET - 33)) | (1 << (RalphParser.SUB - 33)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RalphParser.NOT - 69)) | (1 << (RalphParser.ADDRESS_LIT - 69)) | (1 << (RalphParser.ALPH_LIT - 69)) | (1 << (RalphParser.BOOL_LIT - 69)) | (1 << (RalphParser.DECIMAL_LIT - 69)) | (1 << (RalphParser.BINARY_LIT - 69)) | (1 << (RalphParser.OCTAL_LIT - 69)) | (1 << (RalphParser.HEX_LIT - 69)) | (1 << (RalphParser.IMAGINARY_LIT - 69)) | (1 << (RalphParser.RUNE_LIT - 69)) | (1 << (RalphParser.RAW_STRING_LIT - 69)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 69)) | (1 << (RalphParser.EOS - 69)))) !== 0)) {
					{
					{
					this.state = 440;
					this.statement();
					}
					}
					this.state = 445;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 446;
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
				this.state = 447;
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
			this.state = 454;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 450;
				this.simpleStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 451;
				this.ifStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 452;
				this.whileStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 453;
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
			this.state = 461;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.EOS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 456;
				this.emptyStmt();
				}
				break;
			case RalphParser.RETURN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 457;
				this.returnStmt();
				}
				break;
			case RalphParser.LET:
			case RalphParser.CONST:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 458;
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
				this.state = 459;
				this.expression(0);
				}
				break;
			case RalphParser.EMIT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 460;
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
			this.state = 463;
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
			this.state = 465;
			this.match(RalphParser.RETURN);
			this.state = 466;
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
			this.state = 468;
			this.match(RalphParser.IF);
			this.state = 469;
			this.match(RalphParser.L_PAREN);
			this.state = 470;
			this.expression(0);
			this.state = 471;
			this.match(RalphParser.R_PAREN);
			this.state = 472;
			this.block();
			this.state = 474;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 473;
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
			this.state = 476;
			this.match(RalphParser.ELSE);
			this.state = 479;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 477;
				this.block();
				}
				break;

			case 2:
				{
				this.state = 478;
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
			this.state = 481;
			this.match(RalphParser.WHILE);
			this.state = 482;
			this.match(RalphParser.L_PAREN);
			this.state = 484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.IF || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RalphParser.IDENTIFIER - 33)) | (1 << (RalphParser.L_PAREN - 33)) | (1 << (RalphParser.L_BRACKET - 33)) | (1 << (RalphParser.SUB - 33)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RalphParser.NOT - 69)) | (1 << (RalphParser.ADDRESS_LIT - 69)) | (1 << (RalphParser.ALPH_LIT - 69)) | (1 << (RalphParser.BOOL_LIT - 69)) | (1 << (RalphParser.DECIMAL_LIT - 69)) | (1 << (RalphParser.BINARY_LIT - 69)) | (1 << (RalphParser.OCTAL_LIT - 69)) | (1 << (RalphParser.HEX_LIT - 69)) | (1 << (RalphParser.IMAGINARY_LIT - 69)) | (1 << (RalphParser.RUNE_LIT - 69)) | (1 << (RalphParser.RAW_STRING_LIT - 69)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 69)))) !== 0)) {
				{
				this.state = 483;
				this.expression(0);
				}
			}

			this.state = 486;
			this.match(RalphParser.R_PAREN);
			this.state = 487;
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
			this.state = 489;
			this.match(RalphParser.FOR);
			this.state = 490;
			this.match(RalphParser.L_PAREN);
			this.state = 491;
			this.match(RalphParser.LET);
			this.state = 492;
			this.match(RalphParser.MUT);
			this.state = 493;
			this.varName();
			this.state = 494;
			this.match(RalphParser.ASSIGN);
			this.state = 495;
			this.expression(0);
			this.state = 496;
			this.match(RalphParser.SEMI);
			this.state = 497;
			this.expression(0);
			this.state = 498;
			this.match(RalphParser.SEMI);
			this.state = 499;
			this.expression(0);
			this.state = 500;
			this.match(RalphParser.R_PAREN);
			this.state = 501;
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
			this.state = 503;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03`\u01FC\x04\x02" +
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
		"\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\xE1\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x05\x10\xE7\n\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xF0\n" +
		"\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x05\x13\xF9" +
		"\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\xFF\n\x13\f\x13\x0E\x13" +
		"\u0102\v\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\u0108\n\x14\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0111\n\x15\f" +
		"\x15\x0E\x15\u0114\v\x15\x03\x15\x05\x15\u0117\n\x15\x05\x15\u0119\n\x15" +
		"\x03\x15\x05\x15\u011C\n\x15\x03\x16\x05\x16\u011F\n\x16\x03\x16\x05\x16" +
		"\u0122\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x05\x17\u012A" +
		"\n\x17\x07\x17\u012C\n\x17\f\x17\x0E\x17\u012F\v\x17\x03\x18\x05\x18\u0132" +
		"\n\x18\x03\x18\x05\x18\u0135\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x05\x18\u013E\n\x18\x03\x18\x05\x18\u0141\n\x18\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0148\n\x19\x03\x1A\x03\x1A" +
		"\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x07\x1D\u0156\n\x1D\f\x1D\x0E\x1D\u0159\v\x1D\x03\x1D\x03\x1D" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0162\n\x1E\f\x1E\x0E" +
		"\x1E\u0165\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x05\x1F\u016F\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 " +
		"\x03 \x05 \u0179\n \x03 \x03 \x03!\x05!\u017E\n!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x05!\u0186\n!\x03!\x05!\u0189\n!\x03!\x05!\u018C\n!\x03!\x03!\x03" +
		"\"\x03\"\x03\"\x03\"\x07\"\u0194\n\"\f\"\x0E\"\u0197\v\"\x03#\x03#\x03" +
		"#\x03#\x03#\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x05%\u01A5\n%\x03%\x03" +
		"%\x03&\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
		"(\x03(\x03(\x03(\x03(\x03)\x03)\x07)\u01BC\n)\f)\x0E)\u01BF\v)\x03)\x03" +
		")\x05)\u01C3\n)\x03*\x03*\x03*\x03*\x05*\u01C9\n*\x03+\x03+\x03+\x03+" +
		"\x03+\x05+\u01D0\n+\x03,\x03,\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03." +
		"\x03.\x05.\u01DD\n.\x03/\x03/\x03/\x05/\u01E2\n/\x030\x030\x030\x050\u01E7" +
		"\n0\x030\x030\x030\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x03" +
		"1\x031\x031\x031\x032\x032\x032\x02\x02\x03\x0E3\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
		"4\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02" +
		"P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02\x02\b\x04\x0233GG" +
		"\x03\x021>\x03\x02?D\x03\x02EF\x04\x02LOST\x03\x02Z[\x02\u0217\x02j\x03" +
		"\x02\x02\x02\x04o\x03\x02\x02\x02\x06|\x03\x02\x02\x02\b\x87\x03\x02\x02" +
		"\x02\n\x91\x03\x02\x02\x02\f\x93\x03\x02\x02\x02\x0E\x9F\x03\x02\x02\x02" +
		"\x10\xB8\x03\x02\x02\x02\x12\xBD\x03\x02\x02\x02\x14\xC6\x03\x02\x02\x02" +
		"\x16\xCE\x03\x02\x02\x02\x18\xD2\x03\x02\x02\x02\x1A\xD6\x03\x02\x02\x02" +
		"\x1C\xDC\x03\x02\x02\x02\x1E\xE6\x03\x02\x02\x02 \xEF\x03\x02\x02\x02" +
		"\"\xF1\x03\x02\x02\x02$\xF8\x03\x02\x02\x02&\u0107\x03\x02\x02\x02(\u011B" +
		"\x03\x02\x02\x02*\u011E\x03\x02\x02\x02,\u012D\x03\x02\x02\x02.\u0131" +
		"\x03\x02\x02\x020\u0147\x03\x02\x02\x022\u0149\x03\x02\x02\x024\u014B" +
		"\x03\x02\x02\x026\u014D\x03\x02\x02\x028\u0151\x03\x02\x02\x02:\u015C" +
		"\x03\x02\x02\x02<\u0168\x03\x02\x02\x02>\u0172\x03\x02\x02\x02@\u017D" +
		"\x03\x02\x02\x02B\u018F\x03\x02\x02\x02D\u0198\x03\x02\x02\x02F\u019D" +
		"\x03\x02\x02\x02H\u01A0\x03\x02\x02\x02J\u01A8\x03\x02\x02\x02L\u01AE" +
		"\x03\x02\x02\x02N\u01B4\x03\x02\x02\x02P\u01C2\x03\x02\x02\x02R\u01C8" +
		"\x03\x02\x02\x02T\u01CF\x03\x02\x02\x02V\u01D1\x03\x02\x02\x02X\u01D3" +
		"\x03\x02\x02\x02Z\u01D6\x03\x02\x02\x02\\\u01DE\x03\x02\x02\x02^\u01E3" +
		"\x03\x02\x02\x02`\u01EB\x03\x02\x02\x02b\u01F9\x03\x02\x02\x02di\x05<" +
		"\x1F\x02ei\x05@!\x02fi\x05H%\x02gi\x05> \x02hd\x03\x02\x02\x02he\x03\x02" +
		"\x02\x02hf\x03\x02\x02\x02hg\x03\x02\x02\x02il\x03\x02\x02\x02jh\x03\x02" +
		"\x02\x02jk\x03\x02\x02\x02km\x03\x02\x02\x02lj\x03\x02\x02\x02mn\x07\x02" +
		"\x02\x03n\x03\x03\x02\x02\x02ot\x05\f\x07\x02pq\x07+\x02\x02qs\x05\f\x07" +
		"\x02rp\x03\x02\x02\x02sv\x03\x02\x02\x02tr\x03\x02\x02\x02tu\x03\x02\x02" +
		"\x02u\x05\x03\x02\x02\x02vt\x03\x02\x02\x02w}\x07\x10\x02\x02xz\x07\x0F" +
		"\x02\x02y{\x07\x11\x02\x02zy\x03\x02\x02\x02z{\x03\x02\x02\x02{}\x03\x02" +
		"\x02\x02|w\x03\x02\x02\x02|x\x03\x02\x02\x02}~\x03\x02\x02\x02~\x7F\x05" +
		"\f\x07\x02\x7F\x80\x07*\x02\x02\x80\x81\x05\x0E\b\x02\x81\x07\x03\x02" +
		"\x02\x02\x82\x88\x07\x10\x02\x02\x83\x85\x07\x0F\x02\x02\x84\x86\x07\x11" +
		"\x02\x02\x85\x84\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x88\x03\x02" +
		"\x02\x02\x87\x82\x03\x02\x02\x02\x87\x83\x03\x02\x02\x02\x88\x89\x03\x02" +
		"\x02\x02\x89\x8A\x07$\x02\x02\x8A\x8B\x05\x04\x03\x02\x8B\x8C\x07%\x02" +
		"\x02\x8C\x8D\x07*\x02\x02\x8D\x8E\x05\x0E\b\x02\x8E\t\x03\x02\x02\x02" +
		"\x8F\x92\x05\x06\x04\x02\x90\x92\x05\b\x05\x02\x91\x8F\x03\x02\x02\x02" +
		"\x91\x90\x03\x02\x02\x02\x92\v\x03\x02\x02\x02\x93\x94\x07#\x02\x02\x94" +
		"\r\x03\x02\x02\x02\x95\x96\b\b\x01\x02\x96\xA0\x05\x1E\x10\x02\x97\xA0" +
		"\x05\x12\n\x02\x98\xA0\x05Z.\x02\x99\x9A\x07$\x02\x02\x9A\x9B\x05\x0E" +
		"\b\x02\x9B\x9C\x07%\x02\x02\x9C\xA0\x03\x02\x02\x02\x9D\x9E\t\x02\x02" +
		"\x02\x9E\xA0\x05\x0E\b\x07\x9F\x95\x03\x02\x02\x02\x9F\x97\x03\x02\x02" +
		"\x02\x9F\x98\x03\x02\x02\x02\x9F\x99\x03\x02\x02\x02\x9F\x9D\x03\x02\x02" +
		"\x02\xA0\xAF\x03\x02\x02\x02\xA1\xA2\f\x06\x02\x02\xA2\xA3\t\x03\x02\x02" +
		"\xA3\xAE\x05\x0E\b\x07\xA4\xA5\f\x05\x02\x02\xA5\xA6\t\x04\x02\x02\xA6" +
		"\xAE\x05\x0E\b\x06\xA7\xA8\f\x04\x02\x02\xA8\xA9\t\x05\x02\x02\xA9\xAE" +
		"\x05\x0E\b\x05\xAA\xAB\f\x03\x02\x02\xAB\xAC\x07*\x02\x02\xAC\xAE\x05" +
		"\x0E\b\x04\xAD\xA1\x03\x02\x02\x02\xAD\xA4\x03\x02\x02\x02\xAD\xA7\x03" +
		"\x02\x02\x02\xAD\xAA\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03" +
		"\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\x0F\x03\x02\x02\x02\xB1\xAF\x03" +
		"\x02\x02\x02\xB2\xB4\x05\x0E\b\x02\xB3\xB5\x07+\x02\x02\xB4\xB3\x03\x02" +
		"\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB7\x03\x02\x02\x02\xB6\xB2\x03\x02" +
		"\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02" +
		"\x02\x02\xB9\x11\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB\xBE\x05\f" +
		"\x07\x02\xBC\xBE\x05\x14\v\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBC\x03\x02" +
		"\x02\x02\xBE\xC3\x03\x02\x02\x02\xBF\xC0\x07.\x02\x02\xC0\xC2\x05\x12" +
		"\n\x02\xC1\xBF\x03\x02\x02\x02\xC2\xC5\x03\x02\x02\x02\xC3\xC1\x03\x02" +
		"\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\x13\x03\x02\x02\x02\xC5\xC3\x03\x02" +
		"\x02\x02\xC6\xC8\x07#\x02\x02\xC7\xC9\x05\x1C\x0F\x02\xC8\xC7\x03\x02" +
		"\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCB\x07$" +
		"\x02\x02\xCB\xCC\x05\x10\t\x02\xCC\xCD\x07%\x02\x02\xCD\x15\x03\x02\x02" +
		"\x02\xCE\xCF\x05\x0E\b\x02\xCF\xD0\x07\"\x02\x02\xD0\xD1\x05\x0E\b\x02" +
		"\xD1\x17\x03\x02\x02\x02\xD2\xD3\x05\x16\f\x02\xD3\xD4\x07-\x02\x02\xD4" +
		"\xD5\x05\x0E\b\x02\xD5\x19\x03\x02\x02\x02\xD6\xD7\x05\x16\f\x02\xD7\xD8" +
		"\x07+\x02\x02\xD8\xD9\x05\x0E\b\x02\xD9\xDA\x07-\x02\x02\xDA\xDB\x05\x0E" +
		"\b\x02\xDB\x1B\x03\x02\x02\x02\xDC\xE0\x07&\x02\x02\xDD\xE1\x05\x16\f" +
		"\x02\xDE\xE1\x05\x18\r\x02\xDF\xE1\x05\x1A\x0E\x02\xE0\xDD\x03\x02\x02" +
		"\x02\xE0\xDE\x03\x02\x02\x02\xE0\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02\x02" +
		"\x02\xE2\xE3\x07\'\x02\x02\xE3\x1D\x03\x02\x02\x02\xE4\xE7\x050\x19\x02" +
		"\xE5\xE7\x05$\x13\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE5\x03\x02\x02\x02" +
		"\xE7\x1F\x03\x02\x02\x02\xE8\xF0\x07\x1A\x02\x02\xE9\xF0\x07\x1B\x02\x02" +
		"\xEA\xF0\x07\x1D\x02\x02\xEB\xF0\x07\x1C\x02\x02\xEC\xF0\x07\x1E\x02\x02" +
		"\xED\xF0\x07\x1F\x02\x02\xEE\xF0\x05\"\x12\x02\xEF\xE8\x03\x02\x02\x02" +
		"\xEF\xE9\x03\x02\x02\x02\xEF\xEA\x03\x02\x02\x02\xEF\xEB\x03\x02\x02\x02" +
		"\xEF\xEC\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xEE\x03\x02\x02\x02" +
		"\xF0!\x03\x02\x02\x02\xF1\xF2\x07(\x02\x02\xF2\xF3\x05&\x14\x02\xF3\xF4" +
		"\x07,\x02\x02\xF4\xF5\x05\x0E\b\x02\xF5\xF6\x07)\x02\x02\xF6#\x03\x02" +
		"\x02\x02\xF7\xF9\x07#\x02\x02\xF8\xF7\x03\x02\x02\x02\xF8\xF9\x03\x02" +
		"\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFB\x07(\x02\x02\xFB\u0100\x05\x0E" +
		"\b\x02\xFC\xFD\x07+\x02\x02\xFD\xFF\x05\x0E\b\x02\xFE\xFC\x03\x02\x02" +
		"\x02\xFF\u0102\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0100\u0101\x03" +
		"\x02\x02\x02\u0101\u0103\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0103" +
		"\u0104\x07)\x02\x02\u0104%\x03\x02\x02\x02\u0105\u0108\x05 \x11\x02\u0106" +
		"\u0108\x07#\x02\x02\u0107\u0105\x03\x02\x02\x02\u0107\u0106\x03\x02\x02" +
		"\x02\u0108\'\x03\x02\x02\x02\u0109\u010A\x07$\x02\x02\u010A\u011C\x07" +
		"%\x02\x02\u010B\u011C\x05&\x14\x02\u010C\u0118\x07$\x02\x02\u010D\u0112" +
		"\x05&\x14\x02\u010E\u010F\x07+\x02\x02\u010F\u0111\x05&\x14\x02\u0110" +
		"\u010E\x03\x02\x02\x02\u0111\u0114\x03\x02\x02\x02\u0112\u0110\x03\x02" +
		"\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0116\x03\x02\x02\x02\u0114" +
		"\u0112\x03\x02\x02\x02\u0115\u0117\x07+\x02\x02\u0116\u0115\x03\x02\x02" +
		"\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0119\x03\x02\x02\x02\u0118\u010D" +
		"\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02" +
		"\u011A\u011C\x07%\x02\x02\u011B\u0109\x03\x02\x02\x02\u011B\u010B\x03" +
		"\x02\x02\x02\u011B\u010C\x03\x02\x02\x02\u011C)\x03\x02\x02\x02\u011D" +
		"\u011F\x07 \x02\x02\u011E\u011D\x03\x02\x02\x02\u011E\u011F\x03\x02\x02" +
		"\x02\u011F\u0121\x03\x02\x02\x02\u0120\u0122\x07\x11\x02\x02\u0121\u0120" +
		"\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02" +
		"\u0123\u0124\x07#\x02\x02\u0124\u0125\x07-\x02\x02\u0125\u0126\x05&\x14" +
		"\x02\u0126+\x03\x02\x02\x02\u0127\u0129\x05*\x16\x02\u0128\u012A\x07+" +
		"\x02\x02\u0129\u0128\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A" +
		"\u012C\x03\x02\x02\x02\u012B\u0127\x03\x02\x02\x02\u012C\u012F\x03\x02" +
		"\x02\x02\u012D\u012B\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E" +
		"-\x03\x02\x02\x02\u012F\u012D\x03\x02\x02\x02\u0130\u0132\x05N(\x02\u0131" +
		"\u0130\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0134\x03\x02" +
		"\x02\x02\u0133\u0135\x07\x04\x02\x02\u0134\u0133\x03\x02\x02\x02\u0134" +
		"\u0135\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137\x07\x03" +
		"\x02\x02\u0137\u0138\x07#\x02\x02\u0138\u0139\x07$\x02\x02\u0139\u013A" +
		"\x05,\x17\x02\u013A\u013D\x07%\x02\x02\u013B\u013C\x07\"\x02\x02\u013C" +
		"\u013E\x05(\x15\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013E\x03\x02\x02" +
		"\x02\u013E\u0140\x03\x02\x02\x02\u013F\u0141\x05P)\x02\u0140\u013F\x03" +
		"\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141/\x03\x02\x02\x02\u0142" +
		"\u0148\x052\x1A\x02\u0143\u0148\x054\x1B\x02\u0144\u0148\x07I\x02\x02" +
		"\u0145\u0148\x07J\x02\x02\u0146\u0148\x07K\x02\x02\u0147\u0142\x03\x02" +
		"\x02\x02\u0147\u0143\x03\x02\x02\x02\u0147\u0144\x03\x02\x02\x02\u0147" +
		"\u0145\x03\x02\x02\x02\u0147\u0146\x03\x02\x02\x02\u01481\x03\x02\x02" +
		"\x02\u0149\u014A\t\x06\x02\x02\u014A3\x03\x02\x02\x02\u014B\u014C\t\x07" +
		"\x02\x02\u014C5\x03\x02\x02\x02\u014D\u014E\x05\f\x07\x02\u014E\u014F" +
		"\x07*\x02\x02\u014F\u0150\x050\x19\x02\u01507\x03\x02\x02\x02\u0151\u0152" +
		"\x07\x07\x02\x02\u0152\u0153\x07#\x02\x02\u0153\u0157\x07&\x02\x02\u0154" +
		"\u0156\x056\x1C\x02\u0155\u0154\x03\x02\x02\x02\u0156\u0159\x03\x02\x02" +
		"\x02\u0157\u0155\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u015A" +
		"\x03\x02\x02\x02\u0159\u0157\x03\x02\x02\x02\u015A\u015B\x07\'\x02\x02" +
		"\u015B9\x03\x02\x02\x02\u015C\u0163\x07&\x02\x02\u015D\u0162\x05R*\x02" +
		"\u015E\u0162\x05J&\x02\u015F\u0162\x05.\x18\x02\u0160\u0162\x058\x1D\x02" +
		"\u0161\u015D\x03\x02\x02\x02\u0161\u015E\x03\x02\x02\x02\u0161\u015F\x03" +
		"\x02\x02\x02\u0161\u0160\x03\x02\x02\x02\u0162\u0165\x03\x02\x02\x02\u0163" +
		"\u0161\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0166\x03\x02" +
		"\x02\x02\u0165\u0163\x03\x02\x02\x02\u0166\u0167\x07\'\x02\x02\u0167;" +
		"\x03\x02\x02\x02\u0168\u0169\x07\b\x02\x02\u0169\u016E\x07#\x02\x02\u016A" +
		"\u016B\x07$\x02\x02\u016B\u016C\x05,\x17\x02\u016C\u016D\x07%\x02\x02" +
		"\u016D\u016F\x03\x02\x02\x02\u016E\u016A\x03\x02\x02\x02\u016E\u016F\x03" +
		"\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0171\x05:\x1E\x02\u0171" +
		"=\x03\x02\x02\x02\u0172\u0173\x07\n\x02\x02\u0173\u0178\x07#\x02\x02\u0174" +
		"\u0175\x07$\x02\x02\u0175\u0176\x05,\x17\x02\u0176\u0177\x07%\x02\x02" +
		"\u0177\u0179\x03\x02\x02\x02\u0178\u0174\x03\x02\x02\x02\u0178\u0179\x03" +
		"\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017B\x05:\x1E\x02\u017B" +
		"?\x03\x02\x02\x02\u017C\u017E\x07\x13\x02\x02\u017D\u017C\x03\x02\x02" +
		"\x02\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0180" +
		"\x07\t\x02\x02\u0180\u0185\x07#\x02\x02\u0181\u0182\x07$\x02\x02\u0182" +
		"\u0183\x05,\x17\x02\u0183\u0184\x07%\x02\x02\u0184\u0186\x03\x02\x02\x02" +
		"\u0185\u0181\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0188\x03" +
		"\x02\x02\x02\u0187\u0189\x05B\"\x02\u0188\u0187\x03\x02\x02\x02\u0188" +
		"\u0189\x03\x02\x02\x02\u0189\u018B\x03\x02\x02\x02\u018A\u018C\x05F$\x02" +
		"\u018B\u018A\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018D\x03" +
		"\x02\x02\x02\u018D\u018E\x05:\x1E\x02\u018EA\x03\x02\x02\x02\u018F\u0190" +
		"\x07\x12\x02\x02\u0190\u0195\x05D#\x02\u0191\u0192\x07+\x02\x02\u0192" +
		"\u0194\x05D#\x02\u0193\u0191\x03\x02\x02\x02\u0194\u0197\x03\x02\x02\x02" +
		"\u0195\u0193\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196C\x03\x02" +
		"\x02\x02\u0197\u0195\x03\x02\x02\x02\u0198\u0199\x07#\x02\x02\u0199\u019A" +
		"\x07$\x02\x02\u019A\u019B\x05\x10\t\x02\u019B\u019C\x07%\x02\x02\u019C" +
		"E\x03\x02\x02\x02\u019D\u019E\x07\x14\x02\x02\u019E\u019F\x07#\x02\x02" +
		"\u019FG\x03\x02\x02\x02\u01A0\u01A1\x07\x06\x02\x02\u01A1\u01A4\x07#\x02" +
		"\x02\u01A2\u01A3\x07\x12\x02\x02\u01A3\u01A5\x07#\x02\x02\u01A4\u01A2" +
		"\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02" +
		"\u01A6\u01A7\x05:\x1E\x02\u01A7I\x03\x02\x02\x02\u01A8\u01A9\x07\x15\x02" +
		"\x02\u01A9\u01AA\x07#\x02\x02\u01AA\u01AB\x07$\x02\x02\u01AB\u01AC\x05" +
		",\x17\x02\u01AC\u01AD\x07%\x02\x02\u01ADK\x03\x02\x02\x02\u01AE\u01AF" +
		"\x07\x16\x02\x02\u01AF\u01B0\x07#\x02\x02\u01B0\u01B1\x07$\x02\x02\u01B1" +
		"\u01B2\x05\x10\t\x02\u01B2\u01B3\x07%\x02\x02\u01B3M\x03\x02\x02\x02\u01B4" +
		"\u01B5\x07\x17\x02\x02\u01B5\u01B6\x07$\x02\x02\u01B6\u01B7\x05\x10\t" +
		"\x02\u01B7\u01B8\x07%\x02\x02\u01B8O\x03\x02\x02\x02\u01B9\u01BD\x07&" +
		"\x02\x02\u01BA\u01BC\x05R*\x02\u01BB\u01BA\x03\x02\x02\x02\u01BC\u01BF" +
		"\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02" +
		"\u01BE\u01C0\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01C0\u01C3\x07" +
		"\'\x02\x02\u01C1\u01C3\x05R*\x02\u01C2\u01B9\x03\x02\x02\x02\u01C2\u01C1" +
		"\x03\x02\x02\x02\u01C3Q\x03\x02\x02\x02\u01C4\u01C9\x05T+\x02\u01C5\u01C9" +
		"\x05Z.\x02\u01C6\u01C9\x05^0\x02\u01C7\u01C9\x05`1\x02\u01C8\u01C4\x03" +
		"\x02\x02\x02\u01C8\u01C5\x03\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C8" +
		"\u01C7\x03\x02\x02\x02\u01C9S\x03\x02\x02\x02\u01CA\u01D0\x05V,\x02\u01CB" +
		"\u01D0\x05X-\x02\u01CC\u01D0\x05\n\x06\x02\u01CD\u01D0\x05\x0E\b\x02\u01CE" +
		"\u01D0\x05L\'\x02\u01CF\u01CA\x03\x02\x02\x02\u01CF\u01CB\x03\x02\x02" +
		"\x02\u01CF\u01CC\x03\x02\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01CF\u01CE" +
		"\x03\x02\x02\x02\u01D0U\x03\x02\x02\x02\u01D1\u01D2\x05b2\x02\u01D2W\x03" +
		"\x02\x02\x02\u01D3\u01D4\x07\x05\x02\x02\u01D4\u01D5\x05\x10\t\x02\u01D5" +
		"Y\x03\x02\x02\x02\u01D6\u01D7\x07\v\x02\x02\u01D7\u01D8\x07$\x02\x02\u01D8" +
		"\u01D9\x05\x0E\b\x02\u01D9\u01DA\x07%\x02\x02\u01DA\u01DC\x05P)\x02\u01DB" +
		"\u01DD\x05\\/\x02\u01DC\u01DB\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02" +
		"\x02\u01DD[\x03\x02\x02\x02\u01DE\u01E1\x07\f\x02\x02\u01DF\u01E2\x05" +
		"P)\x02\u01E0\u01E2\x05Z.\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E0\x03" +
		"\x02\x02\x02\u01E2]\x03\x02\x02\x02\u01E3\u01E4\x07\r\x02\x02\u01E4\u01E6" +
		"\x07$\x02\x02\u01E5\u01E7\x05\x0E\b\x02\u01E6\u01E5\x03\x02\x02\x02\u01E6" +
		"\u01E7\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01E9\x07%\x02" +
		"\x02\u01E9\u01EA\x05P)\x02\u01EA_\x03\x02\x02\x02\u01EB\u01EC\x07\x0E" +
		"\x02\x02\u01EC\u01ED\x07$\x02\x02\u01ED\u01EE\x07\x0F\x02\x02\u01EE\u01EF" +
		"\x07\x11\x02\x02\u01EF\u01F0\x05\f\x07\x02\u01F0\u01F1\x07*\x02\x02\u01F1" +
		"\u01F2\x05\x0E\b\x02\u01F2\u01F3\x07,\x02\x02\u01F3\u01F4\x05\x0E\b\x02" +
		"\u01F4\u01F5\x07,\x02\x02\u01F5\u01F6\x05\x0E\b\x02\u01F6\u01F7\x07%\x02" +
		"\x02\u01F7\u01F8\x05P)\x02\u01F8a\x03\x02\x02\x02\u01F9\u01FA\x07`\x02" +
		"\x02\u01FAc\x03\x02\x02\x027hjtz|\x85\x87\x91\x9F\xAD\xAF\xB4\xB8\xBD" +
		"\xC3\xC8\xE0\xE6\xEF\xF8\u0100\u0107\u0112\u0116\u0118\u011B\u011E\u0121" +
		"\u0129\u012D\u0131\u0134\u013D\u0140\u0147\u0157\u0161\u0163\u016E\u0178" +
		"\u017D\u0185\u0188\u018B\u0195\u01A4\u01BD\u01C2\u01C8\u01CF\u01DC\u01E1" +
		"\u01E6";
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


export class ApsAlphContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public R_ARROW(): TerminalNode { return this.getToken(RalphParser.R_ARROW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_apsAlph; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterApsAlph) {
			listener.enterApsAlph(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitApsAlph) {
			listener.exitApsAlph(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitApsAlph) {
			return visitor.visitApsAlph(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ApsTokenContext extends ParserRuleContext {
	public apsAlph(): ApsAlphContext {
		return this.getRuleContext(0, ApsAlphContext);
	}
	public COLON(): TerminalNode { return this.getToken(RalphParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_apsToken; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterApsToken) {
			listener.enterApsToken(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitApsToken) {
			listener.exitApsToken(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitApsToken) {
			return visitor.visitApsToken(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ApsBothContext extends ParserRuleContext {
	public apsAlph(): ApsAlphContext {
		return this.getRuleContext(0, ApsAlphContext);
	}
	public COMMA(): TerminalNode { return this.getToken(RalphParser.COMMA, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(RalphParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_apsBoth; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterApsBoth) {
			listener.enterApsBoth(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitApsBoth) {
			listener.exitApsBoth(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitApsBoth) {
			return visitor.visitApsBoth(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ApsContext extends ParserRuleContext {
	public L_CURLY(): TerminalNode { return this.getToken(RalphParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(RalphParser.R_CURLY, 0); }
	public apsAlph(): ApsAlphContext | undefined {
		return this.tryGetRuleContext(0, ApsAlphContext);
	}
	public apsToken(): ApsTokenContext | undefined {
		return this.tryGetRuleContext(0, ApsTokenContext);
	}
	public apsBoth(): ApsBothContext | undefined {
		return this.tryGetRuleContext(0, ApsBothContext);
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


export class ContractContext extends ParserRuleContext {
	public CONTRACT(): TerminalNode { return this.getToken(RalphParser.CONTRACT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public typeStructBody(): TypeStructBodyContext {
		return this.getRuleContext(0, TypeStructBodyContext);
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


