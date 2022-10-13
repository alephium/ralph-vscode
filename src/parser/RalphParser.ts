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
	public static readonly LET = 12;
	public static readonly CONST = 13;
	public static readonly MUT = 14;
	public static readonly EXTENDS = 15;
	public static readonly ABSTRACT = 16;
	public static readonly IMPLEMENTS = 17;
	public static readonly EVENT = 18;
	public static readonly EMIT = 19;
	public static readonly USING = 20;
	public static readonly AT = 21;
	public static readonly BOOL = 22;
	public static readonly I256 = 23;
	public static readonly U256 = 24;
	public static readonly BYTE = 25;
	public static readonly BYTEVEC = 26;
	public static readonly ADDRESS = 27;
	public static readonly UNUSED = 28;
	public static readonly R_ARROW = 29;
	public static readonly IDENTIFIER = 30;
	public static readonly L_PAREN = 31;
	public static readonly R_PAREN = 32;
	public static readonly L_CURLY = 33;
	public static readonly R_CURLY = 34;
	public static readonly L_BRACKET = 35;
	public static readonly R_BRACKET = 36;
	public static readonly ASSIGN = 37;
	public static readonly COMMA = 38;
	public static readonly SEMI = 39;
	public static readonly COLON = 40;
	public static readonly DOT = 41;
	public static readonly POUND = 42;
	public static readonly DOUBT = 43;
	public static readonly CONCAT = 44;
	public static readonly ADD = 45;
	public static readonly SUB = 46;
	public static readonly MUL = 47;
	public static readonly DIV = 48;
	public static readonly MOD = 49;
	public static readonly MODADD = 50;
	public static readonly MODSUB = 51;
	public static readonly MODMUL = 52;
	public static readonly SHL = 53;
	public static readonly SHR = 54;
	public static readonly BITAND = 55;
	public static readonly XOR = 56;
	public static readonly BITOR = 57;
	public static readonly EQ = 58;
	public static readonly NQ = 59;
	public static readonly LT = 60;
	public static readonly LE = 61;
	public static readonly GT = 62;
	public static readonly GE = 63;
	public static readonly AND = 64;
	public static readonly OR = 65;
	public static readonly NOT = 66;
	public static readonly ADDRESS_LIT = 67;
	public static readonly ALPH_LIT = 68;
	public static readonly BOOL_LIT = 69;
	public static readonly DECIMAL_LIT = 70;
	public static readonly BINARY_LIT = 71;
	public static readonly OCTAL_LIT = 72;
	public static readonly HEX_LIT = 73;
	public static readonly FLOAT_LIT = 74;
	public static readonly DECIMAL_FLOAT_LIT = 75;
	public static readonly HEX_FLOAT_LIT = 76;
	public static readonly IMAGINARY_LIT = 77;
	public static readonly RUNE_LIT = 78;
	public static readonly BYTE_VALUE = 79;
	public static readonly OCTAL_BYTE_VALUE = 80;
	public static readonly HEX_BYTE_VALUE = 81;
	public static readonly LITTLE_U_VALUE = 82;
	public static readonly BIG_U_VALUE = 83;
	public static readonly RAW_STRING_LIT = 84;
	public static readonly INTERPRETED_STRING_LIT = 85;
	public static readonly WS = 86;
	public static readonly COMMENT = 87;
	public static readonly LINE_COMMENT = 88;
	public static readonly TERMINATOR = 89;
	public static readonly EOS = 90;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_identifierList = 1;
	public static readonly RULE_varDecl = 2;
	public static readonly RULE_varName = 3;
	public static readonly RULE_varNames = 4;
	public static readonly RULE_expression = 5;
	public static readonly RULE_expressionList = 6;
	public static readonly RULE_callChain = 7;
	public static readonly RULE_call = 8;
	public static readonly RULE_primaryExpr = 9;
	public static readonly RULE_primitiveType = 10;
	public static readonly RULE_arrayType = 11;
	public static readonly RULE_arrayExpr = 12;
	public static readonly RULE_typeName = 13;
	public static readonly RULE_result = 14;
	public static readonly RULE_paramAnnotation = 15;
	public static readonly RULE_param = 16;
	public static readonly RULE_paramList = 17;
	public static readonly RULE_methodDecl = 18;
	public static readonly RULE_basicLit = 19;
	public static readonly RULE_integer = 20;
	public static readonly RULE_string_ = 21;
	public static readonly RULE_typeStruct = 22;
	public static readonly RULE_typeParam = 23;
	public static readonly RULE_structName = 24;
	public static readonly RULE_typeStructHeader = 25;
	public static readonly RULE_typeStructBody = 26;
	public static readonly RULE_enum = 27;
	public static readonly RULE_event = 28;
	public static readonly RULE_emit = 29;
	public static readonly RULE_annotation = 30;
	public static readonly RULE_block = 31;
	public static readonly RULE_statement = 32;
	public static readonly RULE_simpleStmt = 33;
	public static readonly RULE_emptyStmt = 34;
	public static readonly RULE_returnStmt = 35;
	public static readonly RULE_ifStmt = 36;
	public static readonly RULE_whileStmt = 37;
	public static readonly RULE_eos = 38;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "identifierList", "varDecl", "varName", "varNames", "expression", 
		"expressionList", "callChain", "call", "primaryExpr", "primitiveType", 
		"arrayType", "arrayExpr", "typeName", "result", "paramAnnotation", "param", 
		"paramList", "methodDecl", "basicLit", "integer", "string_", "typeStruct", 
		"typeParam", "structName", "typeStructHeader", "typeStructBody", "enum", 
		"event", "emit", "annotation", "block", "statement", "simpleStmt", "emptyStmt", 
		"returnStmt", "ifStmt", "whileStmt", "eos",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'fn'", "'pub'", "'return'", "'Interface'", "'enum'", "'TxScript'", 
		"'Contract'", "'AssetScript'", "'if'", "'else'", "'while'", "'let'", "'const'", 
		"'mut'", "'extends'", "'Abstract'", "'implements'", "'event'", "'emit'", 
		"'using'", "'@'", "'Bool'", "'I256'", "'U256'", "'Byte'", "'ByteVec'", 
		"'Address'", "'unused'", "'->'", undefined, "'('", "')'", "'{'", "'}'", 
		"'['", "']'", "'='", "','", "';'", "':'", "'.'", "'#'", "'?'", "'++'", 
		"'+'", "'-'", "'*'", "'/'", "'%'", undefined, undefined, undefined, "'<<'", 
		"'>>'", "'&'", "'^'", "'|'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", 
		"'&&'", "'||'", "'!'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "FN", "PUB", "RETURN", "INTERFACE", "ENUM", "TXSCRIPT", "CONTRACT", 
		"ASSETSCRIPT", "IF", "ELSE", "WHILE", "LET", "CONST", "MUT", "EXTENDS", 
		"ABSTRACT", "IMPLEMENTS", "EVENT", "EMIT", "USING", "AT", "BOOL", "I256", 
		"U256", "BYTE", "BYTEVEC", "ADDRESS", "UNUSED", "R_ARROW", "IDENTIFIER", 
		"L_PAREN", "R_PAREN", "L_CURLY", "R_CURLY", "L_BRACKET", "R_BRACKET", 
		"ASSIGN", "COMMA", "SEMI", "COLON", "DOT", "POUND", "DOUBT", "CONCAT", 
		"ADD", "SUB", "MUL", "DIV", "MOD", "MODADD", "MODSUB", "MODMUL", "SHL", 
		"SHR", "BITAND", "XOR", "BITOR", "EQ", "NQ", "LT", "LE", "GT", "GE", "AND", 
		"OR", "NOT", "ADDRESS_LIT", "ALPH_LIT", "BOOL_LIT", "DECIMAL_LIT", "BINARY_LIT", 
		"OCTAL_LIT", "HEX_LIT", "FLOAT_LIT", "DECIMAL_FLOAT_LIT", "HEX_FLOAT_LIT", 
		"IMAGINARY_LIT", "RUNE_LIT", "BYTE_VALUE", "OCTAL_BYTE_VALUE", "HEX_BYTE_VALUE", 
		"LITTLE_U_VALUE", "BIG_U_VALUE", "RAW_STRING_LIT", "INTERPRETED_STRING_LIT", 
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
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.INTERFACE) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.ASSETSCRIPT))) !== 0)) {
				{
				{
				this.state = 78;
				this.typeStruct();
				}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 84;
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
			this.state = 86;
			this.varName();
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 87;
				this.match(RalphParser.COMMA);
				this.state = 88;
				this.varName();
				}
				}
				this.state = 93;
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
	public varDecl(): VarDeclContext {
		let _localctx: VarDeclContext = new VarDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RalphParser.RULE_varDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.CONST:
				{
				this.state = 94;
				this.match(RalphParser.CONST);
				}
				break;
			case RalphParser.LET:
				{
				{
				this.state = 95;
				this.match(RalphParser.LET);
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.MUT) {
					{
					this.state = 96;
					this.match(RalphParser.MUT);
					}
				}

				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 111;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.IDENTIFIER:
				{
				{
				this.state = 101;
				this.varName();
				this.state = 102;
				this.match(RalphParser.ASSIGN);
				this.state = 103;
				this.expression(0);
				}
				}
				break;
			case RalphParser.L_PAREN:
				{
				{
				this.state = 105;
				this.match(RalphParser.L_PAREN);
				this.state = 106;
				this.identifierList();
				this.state = 107;
				this.match(RalphParser.R_PAREN);
				this.state = 108;
				this.match(RalphParser.ASSIGN);
				this.state = 109;
				this.expression(0);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public varName(): VarNameContext {
		let _localctx: VarNameContext = new VarNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RalphParser.RULE_varName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
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
	public varNames(): VarNamesContext {
		let _localctx: VarNamesContext = new VarNamesContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, RalphParser.RULE_varNames);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.match(RalphParser.IDENTIFIER);
			this.state = 120;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 116;
					this.match(RalphParser.DOT);
					this.state = 117;
					this.match(RalphParser.IDENTIFIER);
					}
					}
				}
				this.state = 122;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
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
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, RalphParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 124;
				this.primaryExpr();
				}
				break;

			case 2:
				{
				this.state = 125;
				this.varName();
				}
				break;

			case 3:
				{
				this.state = 126;
				this.varNames();
				}
				break;

			case 4:
				{
				this.state = 127;
				this.call();
				}
				break;

			case 5:
				{
				this.state = 128;
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
				this.state = 129;
				this.expression(5);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 146;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 144;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 132;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 133;
						_la = this._input.LA(1);
						if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (RalphParser.CONCAT - 44)) | (1 << (RalphParser.ADD - 44)) | (1 << (RalphParser.SUB - 44)) | (1 << (RalphParser.MUL - 44)) | (1 << (RalphParser.DIV - 44)) | (1 << (RalphParser.MOD - 44)) | (1 << (RalphParser.MODADD - 44)) | (1 << (RalphParser.MODSUB - 44)) | (1 << (RalphParser.MODMUL - 44)) | (1 << (RalphParser.SHL - 44)) | (1 << (RalphParser.SHR - 44)) | (1 << (RalphParser.BITAND - 44)) | (1 << (RalphParser.XOR - 44)) | (1 << (RalphParser.BITOR - 44)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 134;
						this.expression(5);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 135;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 136;
						_la = this._input.LA(1);
						if (!(((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (RalphParser.EQ - 58)) | (1 << (RalphParser.NQ - 58)) | (1 << (RalphParser.LT - 58)) | (1 << (RalphParser.LE - 58)) | (1 << (RalphParser.GT - 58)) | (1 << (RalphParser.GE - 58)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 137;
						this.expression(4);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 138;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 139;
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
						this.state = 140;
						this.expression(3);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 141;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 142;
						this.match(RalphParser.ASSIGN);
						this.state = 143;
						this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 148;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
		this.enterRule(_localctx, 12, RalphParser.RULE_expressionList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 149;
					this.expression(0);
					this.state = 151;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RalphParser.COMMA) {
						{
						this.state = 150;
						this.match(RalphParser.COMMA);
						}
					}

					}
					}
				}
				this.state = 157;
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
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callChain(): CallChainContext {
		let _localctx: CallChainContext = new CallChainContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, RalphParser.RULE_callChain);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.varNames();
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
	public call(): CallContext {
		let _localctx: CallContext = new CallContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, RalphParser.RULE_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.callChain();
			this.state = 161;
			this.match(RalphParser.L_PAREN);
			this.state = 162;
			this.expressionList();
			this.state = 163;
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
	public primaryExpr(): PrimaryExprContext {
		let _localctx: PrimaryExprContext = new PrimaryExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, RalphParser.RULE_primaryExpr);
		try {
			this.state = 167;
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
				this.state = 165;
				this.basicLit();
				}
				break;
			case RalphParser.IDENTIFIER:
			case RalphParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 166;
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
		this.enterRule(_localctx, 20, RalphParser.RULE_primitiveType);
		try {
			this.state = 176;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.BOOL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 169;
				this.match(RalphParser.BOOL);
				}
				break;
			case RalphParser.I256:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 170;
				this.match(RalphParser.I256);
				}
				break;
			case RalphParser.BYTE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 171;
				this.match(RalphParser.BYTE);
				}
				break;
			case RalphParser.U256:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 172;
				this.match(RalphParser.U256);
				}
				break;
			case RalphParser.BYTEVEC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 173;
				this.match(RalphParser.BYTEVEC);
				}
				break;
			case RalphParser.ADDRESS:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 174;
				this.match(RalphParser.ADDRESS);
				}
				break;
			case RalphParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 175;
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
		this.enterRule(_localctx, 22, RalphParser.RULE_arrayType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.match(RalphParser.L_BRACKET);
			this.state = 179;
			this.typeName();
			this.state = 180;
			this.match(RalphParser.SEMI);
			this.state = 181;
			this.expression(0);
			this.state = 182;
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
		this.enterRule(_localctx, 24, RalphParser.RULE_arrayExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.IDENTIFIER) {
				{
				this.state = 184;
				this.match(RalphParser.IDENTIFIER);
				}
			}

			this.state = 187;
			this.match(RalphParser.L_BRACKET);
			this.state = 188;
			this.expression(0);
			this.state = 193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 189;
				this.match(RalphParser.COMMA);
				this.state = 190;
				this.expression(0);
				}
				}
				this.state = 195;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 196;
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
		this.enterRule(_localctx, 26, RalphParser.RULE_typeName);
		try {
			this.state = 200;
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
				this.state = 198;
				this.primitiveType();
				}
				break;
			case RalphParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 199;
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
		this.enterRule(_localctx, 28, RalphParser.RULE_result);
		let _la: number;
		try {
			let _alt: number;
			this.state = 220;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 202;
				this.match(RalphParser.L_PAREN);
				this.state = 203;
				this.match(RalphParser.R_PAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 204;
				this.typeName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 205;
				this.match(RalphParser.L_PAREN);
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (RalphParser.BOOL - 22)) | (1 << (RalphParser.I256 - 22)) | (1 << (RalphParser.U256 - 22)) | (1 << (RalphParser.BYTE - 22)) | (1 << (RalphParser.BYTEVEC - 22)) | (1 << (RalphParser.ADDRESS - 22)) | (1 << (RalphParser.IDENTIFIER - 22)) | (1 << (RalphParser.L_BRACKET - 22)))) !== 0)) {
					{
					this.state = 206;
					this.typeName();
					this.state = 211;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 207;
							this.match(RalphParser.COMMA);
							this.state = 208;
							this.typeName();
							}
							}
						}
						this.state = 213;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
					}
					this.state = 215;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RalphParser.COMMA) {
						{
						this.state = 214;
						this.match(RalphParser.COMMA);
						}
					}

					}
				}

				this.state = 219;
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
	public paramAnnotation(): ParamAnnotationContext {
		let _localctx: ParamAnnotationContext = new ParamAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, RalphParser.RULE_paramAnnotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.match(RalphParser.AT);
			this.state = 223;
			this.match(RalphParser.UNUSED);
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
		this.enterRule(_localctx, 32, RalphParser.RULE_param);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.AT) {
				{
				this.state = 225;
				this.paramAnnotation();
				}
			}

			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.MUT) {
				{
				this.state = 228;
				this.match(RalphParser.MUT);
				}
			}

			this.state = 231;
			this.match(RalphParser.IDENTIFIER);
			this.state = 232;
			this.match(RalphParser.COLON);
			this.state = 233;
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
		this.enterRule(_localctx, 34, RalphParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.MUT) | (1 << RalphParser.AT) | (1 << RalphParser.IDENTIFIER))) !== 0)) {
				{
				{
				this.state = 235;
				this.param();
				this.state = 237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.COMMA) {
					{
					this.state = 236;
					this.match(RalphParser.COMMA);
					}
				}

				}
				}
				this.state = 243;
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
		this.enterRule(_localctx, 36, RalphParser.RULE_methodDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.AT) {
				{
				this.state = 244;
				this.annotation();
				}
			}

			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.PUB) {
				{
				this.state = 247;
				this.match(RalphParser.PUB);
				}
			}

			this.state = 250;
			this.match(RalphParser.FN);
			this.state = 251;
			this.match(RalphParser.IDENTIFIER);
			this.state = 252;
			this.match(RalphParser.L_PAREN);
			this.state = 253;
			this.paramList();
			this.state = 254;
			this.match(RalphParser.R_PAREN);
			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.R_ARROW) {
				{
				this.state = 255;
				this.match(RalphParser.R_ARROW);
				this.state = 256;
				this.result();
				}
			}

			this.state = 260;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 259;
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
		this.enterRule(_localctx, 38, RalphParser.RULE_basicLit);
		try {
			this.state = 267;
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
				this.state = 262;
				this.integer();
				}
				break;
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 263;
				this.string_();
				}
				break;
			case RalphParser.ADDRESS_LIT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 264;
				this.match(RalphParser.ADDRESS_LIT);
				}
				break;
			case RalphParser.ALPH_LIT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 265;
				this.match(RalphParser.ALPH_LIT);
				}
				break;
			case RalphParser.BOOL_LIT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 266;
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
		this.enterRule(_localctx, 40, RalphParser.RULE_integer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 269;
			_la = this._input.LA(1);
			if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (RalphParser.DECIMAL_LIT - 70)) | (1 << (RalphParser.BINARY_LIT - 70)) | (1 << (RalphParser.OCTAL_LIT - 70)) | (1 << (RalphParser.HEX_LIT - 70)) | (1 << (RalphParser.IMAGINARY_LIT - 70)) | (1 << (RalphParser.RUNE_LIT - 70)))) !== 0))) {
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
		this.enterRule(_localctx, 42, RalphParser.RULE_string_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
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
	public typeStruct(): TypeStructContext {
		let _localctx: TypeStructContext = new TypeStructContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, RalphParser.RULE_typeStruct);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this.typeStructHeader();
			this.state = 274;
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
	public typeParam(): TypeParamContext {
		let _localctx: TypeParamContext = new TypeParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, RalphParser.RULE_typeParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.INTERFACE) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.ASSETSCRIPT))) !== 0))) {
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
	public structName(): StructNameContext {
		let _localctx: StructNameContext = new StructNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, RalphParser.RULE_structName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
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
	public typeStructHeader(): TypeStructHeaderContext {
		let _localctx: TypeStructHeaderContext = new TypeStructHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, RalphParser.RULE_typeStructHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 280;
			this.typeParam();
			this.state = 281;
			this.structName();
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_PAREN) {
				{
				this.state = 282;
				this.match(RalphParser.L_PAREN);
				this.state = 284;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 283;
					this.paramList();
					}
					break;
				}
				this.state = 286;
				this.match(RalphParser.R_PAREN);
				}
			}

			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.EXTENDS || _la === RalphParser.IMPLEMENTS) {
				{
				this.state = 289;
				_la = this._input.LA(1);
				if (!(_la === RalphParser.EXTENDS || _la === RalphParser.IMPLEMENTS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 290;
				this.match(RalphParser.IDENTIFIER);
				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.L_PAREN) {
					{
					this.state = 291;
					this.match(RalphParser.L_PAREN);
					this.state = 292;
					this.expressionList();
					this.state = 293;
					this.match(RalphParser.R_PAREN);
					}
				}

				}
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
	public typeStructBody(): TypeStructBodyContext {
		let _localctx: TypeStructBodyContext = new TypeStructBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, RalphParser.RULE_typeStructBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.match(RalphParser.L_CURLY);
			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.FN) | (1 << RalphParser.PUB) | (1 << RalphParser.RETURN) | (1 << RalphParser.ENUM) | (1 << RalphParser.IF) | (1 << RalphParser.WHILE) | (1 << RalphParser.LET) | (1 << RalphParser.CONST) | (1 << RalphParser.EVENT) | (1 << RalphParser.EMIT) | (1 << RalphParser.AT) | (1 << RalphParser.IDENTIFIER))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RalphParser.L_CURLY - 33)) | (1 << (RalphParser.L_BRACKET - 33)) | (1 << (RalphParser.SUB - 33)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (RalphParser.NOT - 66)) | (1 << (RalphParser.ADDRESS_LIT - 66)) | (1 << (RalphParser.ALPH_LIT - 66)) | (1 << (RalphParser.BOOL_LIT - 66)) | (1 << (RalphParser.DECIMAL_LIT - 66)) | (1 << (RalphParser.BINARY_LIT - 66)) | (1 << (RalphParser.OCTAL_LIT - 66)) | (1 << (RalphParser.HEX_LIT - 66)) | (1 << (RalphParser.IMAGINARY_LIT - 66)) | (1 << (RalphParser.RUNE_LIT - 66)) | (1 << (RalphParser.RAW_STRING_LIT - 66)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 66)) | (1 << (RalphParser.EOS - 66)))) !== 0)) {
				{
				this.state = 304;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RalphParser.RETURN:
				case RalphParser.IF:
				case RalphParser.WHILE:
				case RalphParser.LET:
				case RalphParser.CONST:
				case RalphParser.EMIT:
				case RalphParser.IDENTIFIER:
				case RalphParser.L_CURLY:
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
					this.state = 300;
					this.statement();
					}
					break;
				case RalphParser.EVENT:
					{
					this.state = 301;
					this.event();
					}
					break;
				case RalphParser.FN:
				case RalphParser.PUB:
				case RalphParser.AT:
					{
					this.state = 302;
					this.methodDecl();
					}
					break;
				case RalphParser.ENUM:
					{
					this.state = 303;
					this.enum();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 309;
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
	public enum(): EnumContext {
		let _localctx: EnumContext = new EnumContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, RalphParser.RULE_enum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this.match(RalphParser.ENUM);
			this.state = 312;
			this.match(RalphParser.IDENTIFIER);
			this.state = 313;
			this.match(RalphParser.L_CURLY);
			this.state = 320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.IDENTIFIER) {
				{
				{
				this.state = 314;
				this.varName();
				this.state = 315;
				this.match(RalphParser.ASSIGN);
				this.state = 316;
				this.expression(0);
				}
				}
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 323;
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
	public event(): EventContext {
		let _localctx: EventContext = new EventContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, RalphParser.RULE_event);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			this.match(RalphParser.EVENT);
			this.state = 326;
			this.match(RalphParser.IDENTIFIER);
			this.state = 327;
			this.match(RalphParser.L_PAREN);
			this.state = 328;
			this.paramList();
			this.state = 329;
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
		this.enterRule(_localctx, 58, RalphParser.RULE_emit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this.match(RalphParser.EMIT);
			this.state = 332;
			this.match(RalphParser.IDENTIFIER);
			this.state = 333;
			this.match(RalphParser.L_PAREN);
			this.state = 334;
			this.expressionList();
			this.state = 335;
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
		this.enterRule(_localctx, 60, RalphParser.RULE_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.match(RalphParser.AT);
			this.state = 338;
			this.match(RalphParser.USING);
			this.state = 339;
			this.match(RalphParser.L_PAREN);
			this.state = 340;
			this.expressionList();
			this.state = 341;
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
		this.enterRule(_localctx, 62, RalphParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			this.match(RalphParser.L_CURLY);
			this.state = 347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.RETURN) | (1 << RalphParser.IF) | (1 << RalphParser.WHILE) | (1 << RalphParser.LET) | (1 << RalphParser.CONST) | (1 << RalphParser.EMIT) | (1 << RalphParser.IDENTIFIER))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RalphParser.L_CURLY - 33)) | (1 << (RalphParser.L_BRACKET - 33)) | (1 << (RalphParser.SUB - 33)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (RalphParser.NOT - 66)) | (1 << (RalphParser.ADDRESS_LIT - 66)) | (1 << (RalphParser.ALPH_LIT - 66)) | (1 << (RalphParser.BOOL_LIT - 66)) | (1 << (RalphParser.DECIMAL_LIT - 66)) | (1 << (RalphParser.BINARY_LIT - 66)) | (1 << (RalphParser.OCTAL_LIT - 66)) | (1 << (RalphParser.HEX_LIT - 66)) | (1 << (RalphParser.IMAGINARY_LIT - 66)) | (1 << (RalphParser.RUNE_LIT - 66)) | (1 << (RalphParser.RAW_STRING_LIT - 66)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 66)) | (1 << (RalphParser.EOS - 66)))) !== 0)) {
				{
				{
				this.state = 344;
				this.statement();
				}
				}
				this.state = 349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 350;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, RalphParser.RULE_statement);
		try {
			this.state = 357;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.LET:
			case RalphParser.CONST:
			case RalphParser.EMIT:
			case RalphParser.IDENTIFIER:
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
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 352;
				this.simpleStmt();
				}
				break;
			case RalphParser.RETURN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 353;
				this.returnStmt();
				}
				break;
			case RalphParser.L_CURLY:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 354;
				this.block();
				}
				break;
			case RalphParser.IF:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 355;
				this.ifStmt();
				}
				break;
			case RalphParser.WHILE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 356;
				this.whileStmt();
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
	public simpleStmt(): SimpleStmtContext {
		let _localctx: SimpleStmtContext = new SimpleStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, RalphParser.RULE_simpleStmt);
		try {
			this.state = 363;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.EOS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 359;
				this.emptyStmt();
				}
				break;
			case RalphParser.LET:
			case RalphParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 360;
				this.varDecl();
				}
				break;
			case RalphParser.IDENTIFIER:
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
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 361;
				this.expression(0);
				}
				break;
			case RalphParser.EMIT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 362;
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
		this.enterRule(_localctx, 68, RalphParser.RULE_emptyStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
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
		this.enterRule(_localctx, 70, RalphParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 367;
			this.match(RalphParser.RETURN);
			this.state = 368;
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
		this.enterRule(_localctx, 72, RalphParser.RULE_ifStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 370;
			this.match(RalphParser.IF);
			this.state = 371;
			this.match(RalphParser.L_PAREN);
			this.state = 372;
			this.expression(0);
			this.state = 373;
			this.match(RalphParser.R_PAREN);
			this.state = 374;
			this.block();
			this.state = 380;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.ELSE) {
				{
				this.state = 375;
				this.match(RalphParser.ELSE);
				this.state = 378;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RalphParser.L_CURLY:
					{
					this.state = 376;
					this.block();
					}
					break;
				case RalphParser.IF:
					{
					this.state = 377;
					this.ifStmt();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
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
		this.enterRule(_localctx, 74, RalphParser.RULE_whileStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this.match(RalphParser.WHILE);
			this.state = 383;
			this.match(RalphParser.L_PAREN);
			this.state = 385;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (RalphParser.IDENTIFIER - 30)) | (1 << (RalphParser.L_BRACKET - 30)) | (1 << (RalphParser.SUB - 30)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (RalphParser.NOT - 66)) | (1 << (RalphParser.ADDRESS_LIT - 66)) | (1 << (RalphParser.ALPH_LIT - 66)) | (1 << (RalphParser.BOOL_LIT - 66)) | (1 << (RalphParser.DECIMAL_LIT - 66)) | (1 << (RalphParser.BINARY_LIT - 66)) | (1 << (RalphParser.OCTAL_LIT - 66)) | (1 << (RalphParser.HEX_LIT - 66)) | (1 << (RalphParser.IMAGINARY_LIT - 66)) | (1 << (RalphParser.RUNE_LIT - 66)) | (1 << (RalphParser.RAW_STRING_LIT - 66)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 66)))) !== 0)) {
				{
				this.state = 384;
				this.expression(0);
				}
			}

			this.state = 387;
			this.match(RalphParser.R_PAREN);
			this.state = 388;
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
		this.enterRule(_localctx, 76, RalphParser.RULE_eos);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
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
		case 5:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\\\u018B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x03\x02\x07\x02R\n\x02\f" +
		"\x02\x0E\x02U\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03\\" +
		"\n\x03\f\x03\x0E\x03_\v\x03\x03\x04\x03\x04\x03\x04\x05\x04d\n\x04\x05" +
		"\x04f\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04r\n\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x07\x06y\n\x06\f\x06\x0E\x06|\v\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\x85\n\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07" +
		"\x07\x93\n\x07\f\x07\x0E\x07\x96\v\x07\x03\b\x03\b\x05\b\x9A\n\b\x07\b" +
		"\x9C\n\b\f\b\x0E\b\x9F\v\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x05\v\xAA\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f" +
		"\xB3\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x05\x0E\xBC\n\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xC2\n\x0E\f\x0E\x0E\x0E\xC5\v" +
		"\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0F\xCB\n\x0F\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xD4\n\x10\f\x10\x0E\x10" +
		"\xD7\v\x10\x03\x10\x05\x10\xDA\n\x10\x05\x10\xDC\n\x10\x03\x10\x05\x10" +
		"\xDF\n\x10\x03\x11\x03\x11\x03\x11\x03\x12\x05\x12\xE5\n\x12\x03\x12\x05" +
		"\x12\xE8\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x05\x13" +
		"\xF0\n\x13\x07\x13\xF2\n\x13\f\x13\x0E\x13\xF5\v\x13\x03\x14\x05\x14\xF8" +
		"\n\x14\x03\x14\x05\x14\xFB\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x05\x14\u0104\n\x14\x03\x14\x05\x14\u0107\n\x14\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u010E\n\x15\x03\x16\x03\x16\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u011F\n\x1B\x03\x1B\x05\x1B\u0122" +
		"\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u012A\n" +
		"\x1B\x05\x1B\u012C\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C" +
		"\u0133\n\x1C\f\x1C\x0E\x1C\u0136\v\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0141\n\x1D\f\x1D\x0E" +
		"\x1D\u0144\v\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03!\x03!\x07!\u015C\n!\f!\x0E!\u015F\v!\x03!\x03!\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0168\n\"\x03#\x03#\x03#\x03#\x05#\u016E" +
		"\n#\x03$\x03$\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05" +
		"&\u017D\n&\x05&\u017F\n&\x03\'\x03\'\x03\'\x05\'\u0184\n\'\x03\'\x03\'" +
		"\x03\'\x03(\x03(\x03(\x02\x02\x03\f)\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02\x02\n\x04" +
		"\x0200DD\x03\x02.;\x03\x02<A\x03\x02BC\x04\x02HKOP\x03\x02VW\x04\x02\x06" +
		"\x06\b\n\x04\x02\x11\x11\x13\x13\x02\u01A2\x02S\x03\x02\x02\x02\x04X\x03" +
		"\x02\x02\x02\x06e\x03\x02\x02\x02\bs\x03\x02\x02\x02\nu\x03\x02\x02\x02" +
		"\f\x84\x03\x02\x02\x02\x0E\x9D\x03\x02\x02\x02\x10\xA0\x03\x02\x02\x02" +
		"\x12\xA2\x03\x02\x02\x02\x14\xA9\x03\x02\x02\x02\x16\xB2\x03\x02\x02\x02" +
		"\x18\xB4\x03\x02\x02\x02\x1A\xBB\x03\x02\x02\x02\x1C\xCA\x03\x02\x02\x02" +
		"\x1E\xDE\x03\x02\x02\x02 \xE0\x03\x02\x02\x02\"\xE4\x03\x02\x02\x02$\xF3" +
		"\x03\x02\x02\x02&\xF7\x03\x02\x02\x02(\u010D\x03\x02\x02\x02*\u010F\x03" +
		"\x02\x02\x02,\u0111\x03\x02\x02\x02.\u0113\x03\x02\x02\x020\u0116\x03" +
		"\x02\x02\x022\u0118\x03\x02\x02\x024\u011A\x03\x02\x02\x026\u012D\x03" +
		"\x02\x02\x028\u0139\x03\x02\x02\x02:\u0147\x03\x02\x02\x02<\u014D\x03" +
		"\x02\x02\x02>\u0153\x03\x02\x02\x02@\u0159\x03\x02\x02\x02B\u0167\x03" +
		"\x02\x02\x02D\u016D\x03\x02\x02\x02F\u016F\x03\x02\x02\x02H\u0171\x03" +
		"\x02\x02\x02J\u0174\x03\x02\x02\x02L\u0180\x03\x02\x02\x02N\u0188\x03" +
		"\x02\x02\x02PR\x05.\x18\x02QP\x03\x02\x02\x02RU\x03\x02\x02\x02SQ\x03" +
		"\x02\x02\x02ST\x03\x02\x02\x02TV\x03\x02\x02\x02US\x03\x02\x02\x02VW\x07" +
		"\x02\x02\x03W\x03\x03\x02\x02\x02X]\x05\b\x05\x02YZ\x07(\x02\x02Z\\\x05" +
		"\b\x05\x02[Y\x03\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03" +
		"\x02\x02\x02^\x05\x03\x02\x02\x02_]\x03\x02\x02\x02`f\x07\x0F\x02\x02" +
		"ac\x07\x0E\x02\x02bd\x07\x10\x02\x02cb\x03\x02\x02\x02cd\x03\x02\x02\x02" +
		"df\x03\x02\x02\x02e`\x03\x02\x02\x02ea\x03\x02\x02\x02fq\x03\x02\x02\x02" +
		"gh\x05\b\x05\x02hi\x07\'\x02\x02ij\x05\f\x07\x02jr\x03\x02\x02\x02kl\x07" +
		"!\x02\x02lm\x05\x04\x03\x02mn\x07\"\x02\x02no\x07\'\x02\x02op\x05\f\x07" +
		"\x02pr\x03\x02\x02\x02qg\x03\x02\x02\x02qk\x03\x02\x02\x02r\x07\x03\x02" +
		"\x02\x02st\x07 \x02\x02t\t\x03\x02\x02\x02uz\x07 \x02\x02vw\x07+\x02\x02" +
		"wy\x07 \x02\x02xv\x03\x02\x02\x02y|\x03\x02\x02\x02zx\x03\x02\x02\x02" +
		"z{\x03\x02\x02\x02{\v\x03\x02\x02\x02|z\x03\x02\x02\x02}~\b\x07\x01\x02" +
		"~\x85\x05\x14\v\x02\x7F\x85\x05\b\x05\x02\x80\x85\x05\n\x06\x02\x81\x85" +
		"\x05\x12\n\x02\x82\x83\t\x02\x02\x02\x83\x85\x05\f\x07\x07\x84}\x03\x02" +
		"\x02\x02\x84\x7F\x03\x02\x02\x02\x84\x80\x03\x02\x02\x02\x84\x81\x03\x02" +
		"\x02\x02\x84\x82\x03\x02\x02\x02\x85\x94\x03\x02\x02\x02\x86\x87\f\x06" +
		"\x02\x02\x87\x88\t\x03\x02\x02\x88\x93\x05\f\x07\x07\x89\x8A\f\x05\x02" +
		"\x02\x8A\x8B\t\x04\x02\x02\x8B\x93\x05\f\x07\x06\x8C\x8D\f\x04\x02\x02" +
		"\x8D\x8E\t\x05\x02\x02\x8E\x93\x05\f\x07\x05\x8F\x90\f\x03\x02\x02\x90" +
		"\x91\x07\'\x02\x02\x91\x93\x05\f\x07\x04\x92\x86\x03\x02\x02\x02\x92\x89" +
		"\x03\x02\x02\x02\x92\x8C\x03\x02\x02\x02\x92\x8F\x03\x02\x02\x02\x93\x96" +
		"\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\r" +
		"\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x97\x99\x05\f\x07\x02\x98\x9A" +
		"\x07(\x02\x02\x99\x98\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9C" +
		"\x03\x02\x02\x02\x9B\x97\x03\x02\x02\x02\x9C\x9F\x03\x02\x02\x02\x9D\x9B" +
		"\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x0F\x03\x02\x02\x02\x9F\x9D" +
		"\x03\x02\x02\x02\xA0\xA1\x05\n\x06\x02\xA1\x11\x03\x02\x02\x02\xA2\xA3" +
		"\x05\x10\t\x02\xA3\xA4\x07!\x02\x02\xA4\xA5\x05\x0E\b\x02\xA5\xA6\x07" +
		"\"\x02\x02\xA6\x13\x03\x02\x02\x02\xA7\xAA\x05(\x15\x02\xA8\xAA\x05\x1A" +
		"\x0E\x02\xA9\xA7\x03\x02\x02\x02\xA9\xA8\x03\x02\x02\x02\xAA\x15\x03\x02" +
		"\x02\x02\xAB\xB3\x07\x18\x02\x02\xAC\xB3\x07\x19\x02\x02\xAD\xB3\x07\x1B" +
		"\x02\x02\xAE\xB3\x07\x1A\x02\x02\xAF\xB3\x07\x1C\x02\x02\xB0\xB3\x07\x1D" +
		"\x02\x02\xB1\xB3\x05\x18\r\x02\xB2\xAB\x03\x02\x02\x02\xB2\xAC\x03\x02" +
		"\x02\x02\xB2\xAD\x03\x02\x02\x02\xB2\xAE\x03\x02\x02\x02\xB2\xAF\x03\x02" +
		"\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB1\x03\x02\x02\x02\xB3\x17\x03\x02" +
		"\x02\x02\xB4\xB5\x07%\x02\x02\xB5\xB6\x05\x1C\x0F\x02\xB6\xB7\x07)\x02" +
		"\x02\xB7\xB8\x05\f\x07\x02\xB8\xB9\x07&\x02\x02\xB9\x19\x03\x02\x02\x02" +
		"\xBA\xBC\x07 \x02\x02\xBB\xBA\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02" +
		"\xBC\xBD\x03\x02\x02\x02\xBD\xBE\x07%\x02\x02\xBE\xC3\x05\f\x07\x02\xBF" +
		"\xC0\x07(\x02\x02\xC0\xC2\x05\f\x07\x02\xC1\xBF\x03\x02\x02\x02\xC2\xC5" +
		"\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC6" +
		"\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC6\xC7\x07&\x02\x02\xC7\x1B" +
		"\x03\x02\x02\x02\xC8\xCB\x05\x16\f\x02\xC9\xCB\x07 \x02\x02\xCA\xC8\x03" +
		"\x02\x02\x02\xCA\xC9\x03\x02\x02\x02\xCB\x1D\x03\x02\x02\x02\xCC\xCD\x07" +
		"!\x02\x02\xCD\xDF\x07\"\x02\x02\xCE\xDF\x05\x1C\x0F\x02\xCF\xDB\x07!\x02" +
		"\x02\xD0\xD5\x05\x1C\x0F\x02\xD1\xD2\x07(\x02\x02\xD2\xD4\x05\x1C\x0F" +
		"\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD7\x03\x02\x02\x02\xD5\xD3\x03\x02\x02" +
		"\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7\xD5\x03\x02\x02" +
		"\x02\xD8\xDA\x07(\x02\x02\xD9\xD8\x03\x02\x02\x02\xD9\xDA\x03\x02\x02" +
		"\x02\xDA\xDC\x03\x02\x02\x02\xDB\xD0\x03\x02\x02\x02\xDB\xDC\x03\x02\x02" +
		"\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDF\x07\"\x02\x02\xDE\xCC\x03\x02\x02" +
		"\x02\xDE\xCE\x03\x02\x02\x02\xDE\xCF\x03\x02\x02\x02\xDF\x1F\x03\x02\x02" +
		"\x02\xE0\xE1\x07\x17\x02\x02\xE1\xE2\x07\x1E\x02\x02\xE2!\x03\x02\x02" +
		"\x02\xE3\xE5\x05 \x11\x02\xE4\xE3\x03\x02\x02\x02\xE4\xE5\x03\x02\x02" +
		"\x02\xE5\xE7\x03\x02\x02\x02\xE6\xE8\x07\x10\x02\x02\xE7\xE6\x03\x02\x02" +
		"\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEA\x07 \x02" +
		"\x02\xEA\xEB\x07*\x02\x02\xEB\xEC\x05\x1C\x0F\x02\xEC#\x03\x02\x02\x02" +
		"\xED\xEF\x05\"\x12\x02\xEE\xF0\x07(\x02\x02\xEF\xEE\x03\x02\x02\x02\xEF" +
		"\xF0\x03\x02\x02\x02\xF0\xF2\x03\x02\x02\x02\xF1\xED\x03\x02\x02\x02\xF2" +
		"\xF5\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4" +
		"%\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF6\xF8\x05> \x02\xF7\xF6\x03" +
		"\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xFA\x03\x02\x02\x02\xF9\xFB\x07" +
		"\x04\x02\x02\xFA\xF9\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC\x03" +
		"\x02\x02\x02\xFC\xFD\x07\x03\x02\x02\xFD\xFE\x07 \x02\x02\xFE\xFF\x07" +
		"!\x02\x02\xFF\u0100\x05$\x13\x02\u0100\u0103\x07\"\x02\x02\u0101\u0102" +
		"\x07\x1F\x02\x02\u0102\u0104\x05\x1E\x10\x02\u0103\u0101\x03\x02\x02\x02" +
		"\u0103\u0104\x03\x02\x02\x02\u0104\u0106\x03\x02\x02\x02\u0105\u0107\x05" +
		"@!\x02\u0106\u0105\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\'" +
		"\x03\x02\x02\x02\u0108\u010E\x05*\x16\x02\u0109\u010E\x05,\x17\x02\u010A" +
		"\u010E\x07E\x02\x02\u010B\u010E\x07F\x02\x02\u010C\u010E\x07G\x02\x02" +
		"\u010D\u0108\x03\x02\x02\x02\u010D\u0109\x03\x02\x02\x02\u010D\u010A\x03" +
		"\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010C\x03\x02\x02\x02\u010E" +
		")\x03\x02\x02\x02\u010F\u0110\t\x06\x02\x02\u0110+\x03\x02\x02\x02\u0111" +
		"\u0112\t\x07\x02\x02\u0112-\x03\x02\x02\x02\u0113\u0114\x054\x1B\x02\u0114" +
		"\u0115\x056\x1C\x02\u0115/\x03\x02\x02\x02\u0116\u0117\t\b\x02\x02\u0117" +
		"1\x03\x02\x02\x02\u0118\u0119\x07 \x02\x02\u01193\x03\x02\x02\x02\u011A" +
		"\u011B\x050\x19\x02\u011B\u0121\x052\x1A\x02\u011C\u011E\x07!\x02\x02" +
		"\u011D\u011F\x05$\x13\x02\u011E\u011D\x03\x02\x02\x02\u011E\u011F\x03" +
		"\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0122\x07\"\x02\x02\u0121" +
		"\u011C\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u012B\x03\x02" +
		"\x02\x02\u0123\u0124\t\t\x02\x02\u0124\u0129\x07 \x02\x02\u0125\u0126" +
		"\x07!\x02\x02\u0126\u0127\x05\x0E\b\x02\u0127\u0128\x07\"\x02\x02\u0128" +
		"\u012A\x03\x02\x02\x02\u0129\u0125\x03\x02\x02\x02\u0129\u012A\x03\x02" +
		"\x02\x02\u012A\u012C\x03\x02\x02\x02\u012B\u0123\x03\x02\x02\x02\u012B" +
		"\u012C\x03\x02\x02\x02\u012C5\x03\x02\x02\x02\u012D\u0134\x07#\x02\x02" +
		"\u012E\u0133\x05B\"\x02\u012F\u0133\x05:\x1E\x02\u0130\u0133\x05&\x14" +
		"\x02\u0131\u0133\x058\x1D\x02\u0132\u012E\x03\x02\x02\x02\u0132\u012F" +
		"\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132\u0131\x03\x02\x02\x02" +
		"\u0133\u0136\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0135\x03" +
		"\x02\x02\x02\u0135\u0137\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02\u0137" +
		"\u0138\x07$\x02\x02\u01387\x03\x02\x02\x02\u0139\u013A\x07\x07\x02\x02" +
		"\u013A\u013B\x07 \x02\x02\u013B\u0142\x07#\x02\x02\u013C\u013D\x05\b\x05" +
		"\x02\u013D\u013E\x07\'\x02\x02\u013E\u013F\x05\f\x07\x02\u013F\u0141\x03" +
		"\x02\x02\x02\u0140\u013C\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142" +
		"\u0140\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0145\x03\x02" +
		"\x02\x02\u0144\u0142\x03\x02\x02\x02\u0145\u0146\x07$\x02\x02\u01469\x03" +
		"\x02\x02\x02\u0147\u0148\x07\x14\x02\x02\u0148\u0149\x07 \x02\x02\u0149" +
		"\u014A\x07!\x02\x02\u014A\u014B\x05$\x13\x02\u014B\u014C\x07\"\x02\x02" +
		"\u014C;\x03\x02\x02\x02\u014D\u014E\x07\x15\x02\x02\u014E\u014F\x07 \x02" +
		"\x02\u014F\u0150\x07!\x02\x02\u0150\u0151\x05\x0E\b\x02\u0151\u0152\x07" +
		"\"\x02\x02\u0152=\x03\x02\x02\x02\u0153\u0154\x07\x17\x02\x02\u0154\u0155" +
		"\x07\x16\x02\x02\u0155\u0156\x07!\x02\x02\u0156\u0157\x05\x0E\b\x02\u0157" +
		"\u0158\x07\"\x02\x02\u0158?\x03\x02\x02\x02\u0159\u015D\x07#\x02\x02\u015A" +
		"\u015C\x05B\"\x02\u015B\u015A\x03\x02\x02\x02\u015C\u015F\x03\x02\x02" +
		"\x02\u015D\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u0160" +
		"\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u0160\u0161\x07$\x02\x02" +
		"\u0161A\x03\x02\x02\x02\u0162\u0168\x05D#\x02\u0163\u0168\x05H%\x02\u0164" +
		"\u0168\x05@!\x02\u0165\u0168\x05J&\x02\u0166\u0168\x05L\'\x02\u0167\u0162" +
		"\x03\x02\x02\x02\u0167\u0163\x03\x02\x02\x02\u0167\u0164\x03\x02\x02\x02" +
		"\u0167\u0165\x03\x02\x02\x02\u0167\u0166\x03\x02\x02\x02\u0168C\x03\x02" +
		"\x02\x02\u0169\u016E\x05F$\x02\u016A\u016E\x05\x06\x04\x02\u016B\u016E" +
		"\x05\f\x07\x02\u016C\u016E\x05<\x1F\x02\u016D\u0169\x03\x02\x02\x02\u016D" +
		"\u016A\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016D\u016C\x03\x02" +
		"\x02\x02\u016EE\x03\x02\x02\x02\u016F\u0170\x05N(\x02\u0170G\x03\x02\x02" +
		"\x02\u0171\u0172\x07\x05\x02\x02\u0172\u0173\x05\x0E\b\x02\u0173I\x03" +
		"\x02\x02\x02\u0174\u0175\x07\v\x02\x02\u0175\u0176\x07!\x02\x02\u0176" +
		"\u0177\x05\f\x07\x02\u0177\u0178\x07\"\x02\x02\u0178\u017E\x05@!\x02\u0179" +
		"\u017C\x07\f\x02\x02\u017A\u017D\x05@!\x02\u017B\u017D\x05J&\x02\u017C" +
		"\u017A\x03\x02\x02\x02\u017C\u017B\x03\x02\x02\x02\u017D\u017F\x03\x02" +
		"\x02\x02\u017E\u0179\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F" +
		"K\x03\x02\x02\x02\u0180\u0181\x07\r\x02\x02\u0181\u0183\x07!\x02\x02\u0182" +
		"\u0184\x05\f\x07\x02\u0183\u0182\x03\x02\x02\x02\u0183\u0184\x03\x02\x02" +
		"\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0186\x07\"\x02\x02\u0186\u0187" +
		"\x05@!\x02\u0187M\x03\x02\x02\x02\u0188\u0189\x07\\\x02\x02\u0189O\x03" +
		"\x02\x02\x02,S]ceqz\x84\x92\x94\x99\x9D\xA9\xB2\xBB\xC3\xCA\xD5\xD9\xDB" +
		"\xDE\xE4\xE7\xEF\xF3\xF7\xFA\u0103\u0106\u010D\u011E\u0121\u0129\u012B" +
		"\u0132\u0134\u0142\u015D\u0167\u016D\u017C\u017E\u0183";
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
	public typeStruct(): TypeStructContext[];
	public typeStruct(i: number): TypeStructContext;
	public typeStruct(i?: number): TypeStructContext | TypeStructContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeStructContext);
		} else {
			return this.getRuleContext(i, TypeStructContext);
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


export class VarDeclContext extends ParserRuleContext {
	public CONST(): TerminalNode | undefined { return this.tryGetToken(RalphParser.CONST, 0); }
	public LET(): TerminalNode | undefined { return this.tryGetToken(RalphParser.LET, 0); }
	public varName(): VarNameContext | undefined {
		return this.tryGetRuleContext(0, VarNameContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public MUT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MUT, 0); }
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


export class VarNamesContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.IDENTIFIER);
		} else {
			return this.getToken(RalphParser.IDENTIFIER, i);
		}
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_varNames; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterVarNames) {
			listener.enterVarNames(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitVarNames) {
			listener.exitVarNames(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitVarNames) {
			return visitor.visitVarNames(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public primaryExpr(): PrimaryExprContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExprContext);
	}
	public varName(): VarNameContext | undefined {
		return this.tryGetRuleContext(0, VarNameContext);
	}
	public varNames(): VarNamesContext | undefined {
		return this.tryGetRuleContext(0, VarNamesContext);
	}
	public call(): CallContext | undefined {
		return this.tryGetRuleContext(0, CallContext);
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
	public varNames(): VarNamesContext {
		return this.getRuleContext(0, VarNamesContext);
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


export class CallContext extends ParserRuleContext {
	public callChain(): CallChainContext {
		return this.getRuleContext(0, CallChainContext);
	}
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_call; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterCall) {
			listener.enterCall(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitCall) {
			listener.exitCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitCall) {
			return visitor.visitCall(this);
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


export class ParamAnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(RalphParser.AT, 0); }
	public UNUSED(): TerminalNode { return this.getToken(RalphParser.UNUSED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_paramAnnotation; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterParamAnnotation) {
			listener.enterParamAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitParamAnnotation) {
			listener.exitParamAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitParamAnnotation) {
			return visitor.visitParamAnnotation(this);
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
	public paramAnnotation(): ParamAnnotationContext | undefined {
		return this.tryGetRuleContext(0, ParamAnnotationContext);
	}
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


export class TypeStructContext extends ParserRuleContext {
	public typeStructHeader(): TypeStructHeaderContext {
		return this.getRuleContext(0, TypeStructHeaderContext);
	}
	public typeStructBody(): TypeStructBodyContext {
		return this.getRuleContext(0, TypeStructBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeStruct; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeStruct) {
			listener.enterTypeStruct(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeStruct) {
			listener.exitTypeStruct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeStruct) {
			return visitor.visitTypeStruct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParamContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(RalphParser.INTERFACE, 0); }
	public TXSCRIPT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.TXSCRIPT, 0); }
	public CONTRACT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.CONTRACT, 0); }
	public ASSETSCRIPT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ASSETSCRIPT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeParam; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeParam) {
			listener.enterTypeParam(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeParam) {
			listener.exitTypeParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeParam) {
			return visitor.visitTypeParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_structName; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterStructName) {
			listener.enterStructName(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitStructName) {
			listener.exitStructName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitStructName) {
			return visitor.visitStructName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStructHeaderContext extends ParserRuleContext {
	public typeParam(): TypeParamContext {
		return this.getRuleContext(0, TypeParamContext);
	}
	public structName(): StructNameContext {
		return this.getRuleContext(0, StructNameContext);
	}
	public L_PAREN(): TerminalNode[];
	public L_PAREN(i: number): TerminalNode;
	public L_PAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.L_PAREN);
		} else {
			return this.getToken(RalphParser.L_PAREN, i);
		}
	}
	public R_PAREN(): TerminalNode[];
	public R_PAREN(i: number): TerminalNode;
	public R_PAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.R_PAREN);
		} else {
			return this.getToken(RalphParser.R_PAREN, i);
		}
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EXTENDS, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IMPLEMENTS, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeStructHeader; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeStructHeader) {
			listener.enterTypeStructHeader(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeStructHeader) {
			listener.exitTypeStructHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeStructHeader) {
			return visitor.visitTypeStructHeader(this);
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


export class EnumContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(RalphParser.ENUM, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public L_CURLY(): TerminalNode { return this.getToken(RalphParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(RalphParser.R_CURLY, 0); }
	public varName(): VarNameContext[];
	public varName(i: number): VarNameContext;
	public varName(i?: number): VarNameContext | VarNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarNameContext);
		} else {
			return this.getRuleContext(i, VarNameContext);
		}
	}
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.ASSIGN);
		} else {
			return this.getToken(RalphParser.ASSIGN, i);
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
	public AT(): TerminalNode { return this.getToken(RalphParser.AT, 0); }
	public USING(): TerminalNode { return this.getToken(RalphParser.USING, 0); }
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
	public returnStmt(): ReturnStmtContext | undefined {
		return this.tryGetRuleContext(0, ReturnStmtContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	public whileStmt(): WhileStmtContext | undefined {
		return this.tryGetRuleContext(0, WhileStmtContext);
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
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ELSE, 0); }
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
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


