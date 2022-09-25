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
	public static readonly IMPORT = 1;
	public static readonly PACKAGE = 2;
	public static readonly FN = 3;
	public static readonly PUB = 4;
	public static readonly PAYABLE = 5;
	public static readonly RETURN = 6;
	public static readonly INTERFACE = 7;
	public static readonly STRUCT = 8;
	public static readonly ENUM = 9;
	public static readonly TXSCRIPT = 10;
	public static readonly TXCONTRACT = 11;
	public static readonly CONTRACT = 12;
	public static readonly ASSETSCRIPT = 13;
	public static readonly IF = 14;
	public static readonly ELSE = 15;
	public static readonly WHILE = 16;
	public static readonly LET = 17;
	public static readonly CONST = 18;
	public static readonly MUT = 19;
	public static readonly EXTENDS = 20;
	public static readonly ABSTRACT = 21;
	public static readonly IMPLEMENTS = 22;
	public static readonly EVENT = 23;
	public static readonly EMIT = 24;
	public static readonly USING = 25;
	public static readonly AT = 26;
	public static readonly BOOL = 27;
	public static readonly I256 = 28;
	public static readonly U256 = 29;
	public static readonly BYTE = 30;
	public static readonly BYTEVEC = 31;
	public static readonly ADDRESS = 32;
	public static readonly R_ARROW = 33;
	public static readonly IDENTIFIER = 34;
	public static readonly L_PAREN = 35;
	public static readonly R_PAREN = 36;
	public static readonly L_CURLY = 37;
	public static readonly R_CURLY = 38;
	public static readonly L_BRACKET = 39;
	public static readonly R_BRACKET = 40;
	public static readonly ASSIGN = 41;
	public static readonly COMMA = 42;
	public static readonly SEMI = 43;
	public static readonly COLON = 44;
	public static readonly DOT = 45;
	public static readonly POUND = 46;
	public static readonly DOUBT = 47;
	public static readonly CONCAT = 48;
	public static readonly ADD = 49;
	public static readonly SUB = 50;
	public static readonly MUL = 51;
	public static readonly DIV = 52;
	public static readonly MOD = 53;
	public static readonly MODADD = 54;
	public static readonly MODSUB = 55;
	public static readonly MODMUL = 56;
	public static readonly SHL = 57;
	public static readonly SHR = 58;
	public static readonly BITAND = 59;
	public static readonly XOR = 60;
	public static readonly BITOR = 61;
	public static readonly EQ = 62;
	public static readonly NQ = 63;
	public static readonly LT = 64;
	public static readonly LE = 65;
	public static readonly GT = 66;
	public static readonly GE = 67;
	public static readonly AND = 68;
	public static readonly OR = 69;
	public static readonly NOT = 70;
	public static readonly DECIMAL_LIT = 71;
	public static readonly BINARY_LIT = 72;
	public static readonly OCTAL_LIT = 73;
	public static readonly HEX_LIT = 74;
	public static readonly ADDRESS_LIT = 75;
	public static readonly ALPH_LIT = 76;
	public static readonly BOOL_LIT = 77;
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
	public static readonly RULE_importDecl = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_identifierList = 3;
	public static readonly RULE_varDecl = 4;
	public static readonly RULE_expression = 5;
	public static readonly RULE_expressionList = 6;
	public static readonly RULE_methodCall = 7;
	public static readonly RULE_primaryExpr = 8;
	public static readonly RULE_primitiveType = 9;
	public static readonly RULE_arrayType = 10;
	public static readonly RULE_arrayExpr = 11;
	public static readonly RULE_type_ = 12;
	public static readonly RULE_typeDeclStmt = 13;
	public static readonly RULE_result = 14;
	public static readonly RULE_paramAnnotation = 15;
	public static readonly RULE_param = 16;
	public static readonly RULE_paramList = 17;
	public static readonly RULE_methodDecl = 18;
	public static readonly RULE_basicLit = 19;
	public static readonly RULE_integer = 20;
	public static readonly RULE_string_ = 21;
	public static readonly RULE_typeStruct = 22;
	public static readonly RULE_typeStructBody = 23;
	public static readonly RULE_txScript = 24;
	public static readonly RULE_contract = 25;
	public static readonly RULE_interface = 26;
	public static readonly RULE_event = 27;
	public static readonly RULE_emit = 28;
	public static readonly RULE_annotation = 29;
	public static readonly RULE_block = 30;
	public static readonly RULE_statement = 31;
	public static readonly RULE_simpleStmt = 32;
	public static readonly RULE_expressionStmt = 33;
	public static readonly RULE_emptyStmt = 34;
	public static readonly RULE_returnStmt = 35;
	public static readonly RULE_ifStmt = 36;
	public static readonly RULE_whileStmt = 37;
	public static readonly RULE_eos = 38;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "importDecl", "declaration", "identifierList", "varDecl", 
		"expression", "expressionList", "methodCall", "primaryExpr", "primitiveType", 
		"arrayType", "arrayExpr", "type_", "typeDeclStmt", "result", "paramAnnotation", 
		"param", "paramList", "methodDecl", "basicLit", "integer", "string_", 
		"typeStruct", "typeStructBody", "txScript", "contract", "interface", "event", 
		"emit", "annotation", "block", "statement", "simpleStmt", "expressionStmt", 
		"emptyStmt", "returnStmt", "ifStmt", "whileStmt", "eos",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'import'", "'package'", "'fn'", "'pub'", "'payable'", "'return'", 
		"'Interface'", "'struct'", "'enum'", "'TxScript'", "'TxContract'", "'Contract'", 
		"'AssetScript'", "'if'", "'else'", "'while'", "'let'", "'const'", "'mut'", 
		"'extends'", "'Abstract'", "'implements'", "'event'", "'emit'", "'using'", 
		"'@'", "'Bool'", "'I256'", "'U256'", "'Byte'", "'ByteVec'", "'Address'", 
		"'->'", undefined, "'('", "')'", "'{'", "'}'", "'['", "']'", "'='", "','", 
		"';'", "':'", "'.'", "'#'", "'?'", "'++'", "'+'", "'-'", "'*'", "'/'", 
		"'%'", undefined, undefined, undefined, "'<<'", "'>>'", "'&'", "'^'", 
		"'|'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'&&'", "'||'", "'!'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "IMPORT", "PACKAGE", "FN", "PUB", "PAYABLE", "RETURN", "INTERFACE", 
		"STRUCT", "ENUM", "TXSCRIPT", "TXCONTRACT", "CONTRACT", "ASSETSCRIPT", 
		"IF", "ELSE", "WHILE", "LET", "CONST", "MUT", "EXTENDS", "ABSTRACT", "IMPLEMENTS", 
		"EVENT", "EMIT", "USING", "AT", "BOOL", "I256", "U256", "BYTE", "BYTEVEC", 
		"ADDRESS", "R_ARROW", "IDENTIFIER", "L_PAREN", "R_PAREN", "L_CURLY", "R_CURLY", 
		"L_BRACKET", "R_BRACKET", "ASSIGN", "COMMA", "SEMI", "COLON", "DOT", "POUND", 
		"DOUBT", "CONCAT", "ADD", "SUB", "MUL", "DIV", "MOD", "MODADD", "MODSUB", 
		"MODMUL", "SHL", "SHR", "BITAND", "XOR", "BITOR", "EQ", "NQ", "LT", "LE", 
		"GT", "GE", "AND", "OR", "NOT", "DECIMAL_LIT", "BINARY_LIT", "OCTAL_LIT", 
		"HEX_LIT", "ADDRESS_LIT", "ALPH_LIT", "BOOL_LIT", "FLOAT_LIT", "DECIMAL_FLOAT_LIT", 
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
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.IMPORT) {
				{
				{
				this.state = 78;
				this.importDecl();
				}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.INTERFACE) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.TXCONTRACT) | (1 << RalphParser.CONTRACT))) !== 0) || _la === RalphParser.L_BRACKET) {
				{
				{
				this.state = 84;
				this.declaration();
				}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 90;
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
	public importDecl(): ImportDeclContext {
		let _localctx: ImportDeclContext = new ImportDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, RalphParser.RULE_importDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(RalphParser.IMPORT);
			this.state = 93;
			this.string_();
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RalphParser.RULE_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.typeDeclStmt();
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
		this.enterRule(_localctx, 6, RalphParser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.match(RalphParser.IDENTIFIER);
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 98;
				this.match(RalphParser.COMMA);
				this.state = 99;
				this.match(RalphParser.IDENTIFIER);
				}
				}
				this.state = 104;
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
		this.enterRule(_localctx, 8, RalphParser.RULE_varDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.CONST:
				{
				this.state = 105;
				this.match(RalphParser.CONST);
				}
				break;
			case RalphParser.LET:
				{
				{
				this.state = 106;
				this.match(RalphParser.LET);
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.MUT) {
					{
					this.state = 107;
					this.match(RalphParser.MUT);
					}
				}

				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 129;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				{
				this.state = 112;
				this.match(RalphParser.IDENTIFIER);
				this.state = 113;
				this.match(RalphParser.ASSIGN);
				this.state = 114;
				this.expression(0);
				}
				}
				break;

			case 2:
				{
				{
				this.state = 115;
				this.match(RalphParser.L_PAREN);
				this.state = 116;
				this.identifierList();
				this.state = 117;
				this.match(RalphParser.R_PAREN);
				this.state = 118;
				this.match(RalphParser.ASSIGN);
				this.state = 119;
				this.expression(0);
				}
				}
				break;

			case 3:
				{
				this.state = 121;
				this.match(RalphParser.IDENTIFIER);
				this.state = 122;
				this.match(RalphParser.ASSIGN);
				this.state = 123;
				this.match(RalphParser.IDENTIFIER);
				this.state = 124;
				this.match(RalphParser.L_PAREN);
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (RalphParser.IDENTIFIER - 34)) | (1 << (RalphParser.L_BRACKET - 34)) | (1 << (RalphParser.SUB - 34)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (RalphParser.NOT - 70)) | (1 << (RalphParser.DECIMAL_LIT - 70)) | (1 << (RalphParser.BINARY_LIT - 70)) | (1 << (RalphParser.OCTAL_LIT - 70)) | (1 << (RalphParser.HEX_LIT - 70)) | (1 << (RalphParser.ADDRESS_LIT - 70)) | (1 << (RalphParser.ALPH_LIT - 70)) | (1 << (RalphParser.BOOL_LIT - 70)) | (1 << (RalphParser.IMAGINARY_LIT - 70)) | (1 << (RalphParser.RUNE_LIT - 70)) | (1 << (RalphParser.RAW_STRING_LIT - 70)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 70)))) !== 0)) {
					{
					this.state = 125;
					this.expressionList();
					}
				}

				this.state = 128;
				this.match(RalphParser.R_PAREN);
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
			this.state = 137;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 132;
				this.primaryExpr();
				}
				break;

			case 2:
				{
				this.state = 133;
				this.match(RalphParser.IDENTIFIER);
				}
				break;

			case 3:
				{
				this.state = 134;
				this.methodCall();
				}
				break;

			case 4:
				{
				this.state = 135;
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
				this.state = 136;
				this.expression(5);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 153;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 151;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 139;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 140;
						_la = this._input.LA(1);
						if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (RalphParser.CONCAT - 48)) | (1 << (RalphParser.ADD - 48)) | (1 << (RalphParser.SUB - 48)) | (1 << (RalphParser.MUL - 48)) | (1 << (RalphParser.DIV - 48)) | (1 << (RalphParser.MOD - 48)) | (1 << (RalphParser.MODADD - 48)) | (1 << (RalphParser.MODSUB - 48)) | (1 << (RalphParser.MODMUL - 48)) | (1 << (RalphParser.SHL - 48)) | (1 << (RalphParser.SHR - 48)) | (1 << (RalphParser.BITAND - 48)) | (1 << (RalphParser.XOR - 48)) | (1 << (RalphParser.BITOR - 48)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 141;
						this.expression(5);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 142;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 143;
						_la = this._input.LA(1);
						if (!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (RalphParser.EQ - 62)) | (1 << (RalphParser.NQ - 62)) | (1 << (RalphParser.LT - 62)) | (1 << (RalphParser.LE - 62)) | (1 << (RalphParser.GT - 62)) | (1 << (RalphParser.GE - 62)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 144;
						this.expression(4);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 145;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 146;
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
						this.state = 147;
						this.expression(3);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 148;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 149;
						this.match(RalphParser.ASSIGN);
						this.state = 150;
						this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 155;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.expression(0);
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 157;
				this.match(RalphParser.COMMA);
				this.state = 158;
				this.expression(0);
				}
				}
				this.state = 163;
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
	public methodCall(): MethodCallContext {
		let _localctx: MethodCallContext = new MethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, RalphParser.RULE_methodCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.match(RalphParser.IDENTIFIER);
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.DOT) {
				{
				{
				this.state = 165;
				this.match(RalphParser.DOT);
				this.state = 166;
				this.match(RalphParser.IDENTIFIER);
				}
				}
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 172;
			this.match(RalphParser.L_PAREN);
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (RalphParser.IDENTIFIER - 34)) | (1 << (RalphParser.L_BRACKET - 34)) | (1 << (RalphParser.SUB - 34)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (RalphParser.NOT - 70)) | (1 << (RalphParser.DECIMAL_LIT - 70)) | (1 << (RalphParser.BINARY_LIT - 70)) | (1 << (RalphParser.OCTAL_LIT - 70)) | (1 << (RalphParser.HEX_LIT - 70)) | (1 << (RalphParser.ADDRESS_LIT - 70)) | (1 << (RalphParser.ALPH_LIT - 70)) | (1 << (RalphParser.BOOL_LIT - 70)) | (1 << (RalphParser.IMAGINARY_LIT - 70)) | (1 << (RalphParser.RUNE_LIT - 70)) | (1 << (RalphParser.RAW_STRING_LIT - 70)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 70)))) !== 0)) {
				{
				this.state = 173;
				this.expressionList();
				}
			}

			this.state = 176;
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
		this.enterRule(_localctx, 16, RalphParser.RULE_primaryExpr);
		try {
			this.state = 180;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.DECIMAL_LIT:
			case RalphParser.BINARY_LIT:
			case RalphParser.OCTAL_LIT:
			case RalphParser.HEX_LIT:
			case RalphParser.ADDRESS_LIT:
			case RalphParser.ALPH_LIT:
			case RalphParser.BOOL_LIT:
			case RalphParser.IMAGINARY_LIT:
			case RalphParser.RUNE_LIT:
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 178;
				this.basicLit();
				}
				break;
			case RalphParser.IDENTIFIER:
			case RalphParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 179;
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
		this.enterRule(_localctx, 18, RalphParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			_la = this._input.LA(1);
			if (!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (RalphParser.BOOL - 27)) | (1 << (RalphParser.I256 - 27)) | (1 << (RalphParser.U256 - 27)) | (1 << (RalphParser.BYTE - 27)) | (1 << (RalphParser.BYTEVEC - 27)) | (1 << (RalphParser.ADDRESS - 27)))) !== 0))) {
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
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, RalphParser.RULE_arrayType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(RalphParser.L_BRACKET);
			this.state = 185;
			this.type_();
			this.state = 186;
			this.match(RalphParser.SEMI);
			this.state = 187;
			this.expression(0);
			this.state = 188;
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
		this.enterRule(_localctx, 22, RalphParser.RULE_arrayExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.IDENTIFIER) {
				{
				this.state = 190;
				this.match(RalphParser.IDENTIFIER);
				}
			}

			this.state = 193;
			this.match(RalphParser.L_BRACKET);
			this.state = 194;
			this.expression(0);
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 195;
				this.match(RalphParser.COMMA);
				this.state = 196;
				this.expression(0);
				}
				}
				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 202;
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
	public type_(): Type_Context {
		let _localctx: Type_Context = new Type_Context(this._ctx, this.state);
		this.enterRule(_localctx, 24, RalphParser.RULE_type_);
		try {
			this.state = 207;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.BOOL:
			case RalphParser.I256:
			case RalphParser.U256:
			case RalphParser.BYTE:
			case RalphParser.BYTEVEC:
			case RalphParser.ADDRESS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 204;
				this.primitiveType();
				}
				break;
			case RalphParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 205;
				this.arrayType();
				}
				break;
			case RalphParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 206;
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
	public typeDeclStmt(): TypeDeclStmtContext {
		let _localctx: TypeDeclStmtContext = new TypeDeclStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, RalphParser.RULE_typeDeclStmt);
		try {
			this.state = 211;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 209;
				this.arrayType();
				}
				break;
			case RalphParser.INTERFACE:
			case RalphParser.TXSCRIPT:
			case RalphParser.TXCONTRACT:
			case RalphParser.CONTRACT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 210;
				this.typeStruct();
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
			this.state = 231;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 213;
				this.match(RalphParser.L_PAREN);
				this.state = 214;
				this.match(RalphParser.R_PAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 215;
				this.type_();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 216;
				this.match(RalphParser.L_PAREN);
				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (RalphParser.BOOL - 27)) | (1 << (RalphParser.I256 - 27)) | (1 << (RalphParser.U256 - 27)) | (1 << (RalphParser.BYTE - 27)) | (1 << (RalphParser.BYTEVEC - 27)) | (1 << (RalphParser.ADDRESS - 27)) | (1 << (RalphParser.IDENTIFIER - 27)) | (1 << (RalphParser.L_BRACKET - 27)))) !== 0)) {
					{
					this.state = 217;
					this.type_();
					this.state = 222;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 218;
							this.match(RalphParser.COMMA);
							this.state = 219;
							this.type_();
							}
							}
						}
						this.state = 224;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
					}
					this.state = 226;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RalphParser.COMMA) {
						{
						this.state = 225;
						this.match(RalphParser.COMMA);
						}
					}

					}
				}

				this.state = 230;
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
			this.state = 233;
			this.match(RalphParser.AT);
			this.state = 234;
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
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, RalphParser.RULE_param);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.AT) {
				{
				this.state = 236;
				this.paramAnnotation();
				}
			}

			this.state = 240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.MUT) {
				{
				this.state = 239;
				this.match(RalphParser.MUT);
				}
			}

			this.state = 242;
			this.match(RalphParser.IDENTIFIER);
			this.state = 243;
			this.match(RalphParser.COLON);
			this.state = 244;
			this.type_();
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
			this.state = 246;
			this.param();
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 247;
				this.match(RalphParser.COMMA);
				this.state = 248;
				this.param();
				}
				}
				this.state = 253;
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
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.AT) {
				{
				this.state = 254;
				this.annotation();
				}
			}

			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.PUB) {
				{
				this.state = 257;
				this.match(RalphParser.PUB);
				}
			}

			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.PAYABLE) {
				{
				this.state = 260;
				this.match(RalphParser.PAYABLE);
				}
			}

			this.state = 263;
			this.match(RalphParser.FN);
			this.state = 264;
			this.match(RalphParser.IDENTIFIER);
			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_PAREN) {
				{
				this.state = 265;
				this.match(RalphParser.L_PAREN);
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & ((1 << (RalphParser.MUT - 19)) | (1 << (RalphParser.AT - 19)) | (1 << (RalphParser.IDENTIFIER - 19)))) !== 0)) {
					{
					this.state = 266;
					this.paramList();
					}
				}

				this.state = 269;
				this.match(RalphParser.R_PAREN);
				}
			}

			this.state = 274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.R_ARROW) {
				{
				this.state = 272;
				this.match(RalphParser.R_ARROW);
				this.state = 273;
				this.result();
				}
			}

			this.state = 277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 276;
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
			this.state = 284;
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
				this.state = 279;
				this.integer();
				}
				break;
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 280;
				this.string_();
				}
				break;
			case RalphParser.ADDRESS_LIT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 281;
				this.match(RalphParser.ADDRESS_LIT);
				}
				break;
			case RalphParser.ALPH_LIT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 282;
				this.match(RalphParser.ALPH_LIT);
				}
				break;
			case RalphParser.BOOL_LIT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 283;
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
			this.state = 286;
			_la = this._input.LA(1);
			if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (RalphParser.DECIMAL_LIT - 71)) | (1 << (RalphParser.BINARY_LIT - 71)) | (1 << (RalphParser.OCTAL_LIT - 71)) | (1 << (RalphParser.HEX_LIT - 71)) | (1 << (RalphParser.IMAGINARY_LIT - 71)) | (1 << (RalphParser.RUNE_LIT - 71)))) !== 0))) {
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
			this.state = 288;
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
			this.state = 293;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.TXSCRIPT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 290;
				this.txScript();
				}
				break;
			case RalphParser.TXCONTRACT:
			case RalphParser.CONTRACT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 291;
				this.contract();
				}
				break;
			case RalphParser.INTERFACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 292;
				this.interface();
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
	public typeStructBody(): TypeStructBodyContext {
		let _localctx: TypeStructBodyContext = new TypeStructBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, RalphParser.RULE_typeStructBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.match(RalphParser.L_CURLY);
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.FN) | (1 << RalphParser.PUB) | (1 << RalphParser.PAYABLE) | (1 << RalphParser.RETURN) | (1 << RalphParser.INTERFACE) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.TXCONTRACT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.IF) | (1 << RalphParser.WHILE) | (1 << RalphParser.LET) | (1 << RalphParser.CONST) | (1 << RalphParser.EVENT) | (1 << RalphParser.EMIT) | (1 << RalphParser.AT))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (RalphParser.IDENTIFIER - 34)) | (1 << (RalphParser.L_CURLY - 34)) | (1 << (RalphParser.L_BRACKET - 34)) | (1 << (RalphParser.SUB - 34)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (RalphParser.NOT - 70)) | (1 << (RalphParser.DECIMAL_LIT - 70)) | (1 << (RalphParser.BINARY_LIT - 70)) | (1 << (RalphParser.OCTAL_LIT - 70)) | (1 << (RalphParser.HEX_LIT - 70)) | (1 << (RalphParser.ADDRESS_LIT - 70)) | (1 << (RalphParser.ALPH_LIT - 70)) | (1 << (RalphParser.BOOL_LIT - 70)) | (1 << (RalphParser.IMAGINARY_LIT - 70)) | (1 << (RalphParser.RUNE_LIT - 70)) | (1 << (RalphParser.RAW_STRING_LIT - 70)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 70)) | (1 << (RalphParser.EOS - 70)))) !== 0)) {
				{
				this.state = 300;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
				case 1:
					{
					this.state = 296;
					this.statement();
					}
					break;

				case 2:
					{
					this.state = 297;
					this.event();
					}
					break;

				case 3:
					{
					this.state = 298;
					this.emit();
					}
					break;

				case 4:
					{
					this.state = 299;
					this.methodDecl();
					}
					break;
				}
				}
				this.state = 304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 305;
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
		this.enterRule(_localctx, 48, RalphParser.RULE_txScript);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.match(RalphParser.TXSCRIPT);
			this.state = 308;
			this.match(RalphParser.IDENTIFIER);
			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_PAREN) {
				{
				this.state = 309;
				this.match(RalphParser.L_PAREN);
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & ((1 << (RalphParser.MUT - 19)) | (1 << (RalphParser.AT - 19)) | (1 << (RalphParser.IDENTIFIER - 19)))) !== 0)) {
					{
					this.state = 310;
					this.paramList();
					}
				}

				this.state = 313;
				this.match(RalphParser.R_PAREN);
				}
			}

			this.state = 316;
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
		this.enterRule(_localctx, 50, RalphParser.RULE_contract);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			_la = this._input.LA(1);
			if (!(_la === RalphParser.TXCONTRACT || _la === RalphParser.CONTRACT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 319;
			this.match(RalphParser.IDENTIFIER);
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_PAREN) {
				{
				this.state = 320;
				this.match(RalphParser.L_PAREN);
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & ((1 << (RalphParser.MUT - 19)) | (1 << (RalphParser.AT - 19)) | (1 << (RalphParser.IDENTIFIER - 19)))) !== 0)) {
					{
					this.state = 321;
					this.paramList();
					}
				}

				this.state = 324;
				this.match(RalphParser.R_PAREN);
				}
			}

			this.state = 336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.EXTENDS || _la === RalphParser.IMPLEMENTS) {
				{
				this.state = 327;
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
				this.state = 328;
				this.match(RalphParser.IDENTIFIER);
				this.state = 334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.L_PAREN) {
					{
					this.state = 329;
					this.match(RalphParser.L_PAREN);
					this.state = 331;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (RalphParser.IDENTIFIER - 34)) | (1 << (RalphParser.L_BRACKET - 34)) | (1 << (RalphParser.SUB - 34)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (RalphParser.NOT - 70)) | (1 << (RalphParser.DECIMAL_LIT - 70)) | (1 << (RalphParser.BINARY_LIT - 70)) | (1 << (RalphParser.OCTAL_LIT - 70)) | (1 << (RalphParser.HEX_LIT - 70)) | (1 << (RalphParser.ADDRESS_LIT - 70)) | (1 << (RalphParser.ALPH_LIT - 70)) | (1 << (RalphParser.BOOL_LIT - 70)) | (1 << (RalphParser.IMAGINARY_LIT - 70)) | (1 << (RalphParser.RUNE_LIT - 70)) | (1 << (RalphParser.RAW_STRING_LIT - 70)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 70)))) !== 0)) {
						{
						this.state = 330;
						this.expressionList();
						}
					}

					this.state = 333;
					this.match(RalphParser.R_PAREN);
					}
				}

				}
			}

			this.state = 338;
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
	public interface(): InterfaceContext {
		let _localctx: InterfaceContext = new InterfaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, RalphParser.RULE_interface);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this.match(RalphParser.INTERFACE);
			this.state = 341;
			this.match(RalphParser.IDENTIFIER);
			this.state = 342;
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
		this.enterRule(_localctx, 54, RalphParser.RULE_event);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			this.match(RalphParser.EVENT);
			this.state = 345;
			this.match(RalphParser.IDENTIFIER);
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_PAREN) {
				{
				this.state = 346;
				this.match(RalphParser.L_PAREN);
				this.state = 348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & ((1 << (RalphParser.MUT - 19)) | (1 << (RalphParser.AT - 19)) | (1 << (RalphParser.IDENTIFIER - 19)))) !== 0)) {
					{
					this.state = 347;
					this.paramList();
					}
				}

				this.state = 350;
				this.match(RalphParser.R_PAREN);
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
	public emit(): EmitContext {
		let _localctx: EmitContext = new EmitContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, RalphParser.RULE_emit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
			this.match(RalphParser.EMIT);
			this.state = 354;
			this.match(RalphParser.IDENTIFIER);
			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_PAREN) {
				{
				this.state = 355;
				this.match(RalphParser.L_PAREN);
				this.state = 356;
				this.expressionList();
				this.state = 357;
				this.match(RalphParser.R_PAREN);
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
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, RalphParser.RULE_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 361;
			this.match(RalphParser.AT);
			this.state = 362;
			this.match(RalphParser.USING);
			this.state = 363;
			this.match(RalphParser.L_PAREN);
			{
			this.state = 364;
			this.expressionList();
			}
			this.state = 365;
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
		this.enterRule(_localctx, 60, RalphParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 367;
			this.match(RalphParser.L_CURLY);
			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.RETURN) | (1 << RalphParser.INTERFACE) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.TXCONTRACT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.IF) | (1 << RalphParser.WHILE) | (1 << RalphParser.LET) | (1 << RalphParser.CONST) | (1 << RalphParser.EVENT) | (1 << RalphParser.EMIT))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (RalphParser.IDENTIFIER - 34)) | (1 << (RalphParser.L_CURLY - 34)) | (1 << (RalphParser.L_BRACKET - 34)) | (1 << (RalphParser.SUB - 34)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (RalphParser.NOT - 70)) | (1 << (RalphParser.DECIMAL_LIT - 70)) | (1 << (RalphParser.BINARY_LIT - 70)) | (1 << (RalphParser.OCTAL_LIT - 70)) | (1 << (RalphParser.HEX_LIT - 70)) | (1 << (RalphParser.ADDRESS_LIT - 70)) | (1 << (RalphParser.ALPH_LIT - 70)) | (1 << (RalphParser.BOOL_LIT - 70)) | (1 << (RalphParser.IMAGINARY_LIT - 70)) | (1 << (RalphParser.RUNE_LIT - 70)) | (1 << (RalphParser.RAW_STRING_LIT - 70)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 70)) | (1 << (RalphParser.EOS - 70)))) !== 0)) {
				{
				{
				this.state = 368;
				this.statement();
				}
				}
				this.state = 373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 374;
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
		this.enterRule(_localctx, 62, RalphParser.RULE_statement);
		try {
			this.state = 382;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 376;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 377;
				this.simpleStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 378;
				this.returnStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 379;
				this.block();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 380;
				this.ifStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 381;
				this.whileStmt();
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
		this.enterRule(_localctx, 64, RalphParser.RULE_simpleStmt);
		try {
			this.state = 389;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.EOS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 384;
				this.emptyStmt();
				}
				break;
			case RalphParser.LET:
			case RalphParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 385;
				this.varDecl();
				}
				break;
			case RalphParser.IDENTIFIER:
			case RalphParser.L_BRACKET:
			case RalphParser.SUB:
			case RalphParser.NOT:
			case RalphParser.DECIMAL_LIT:
			case RalphParser.BINARY_LIT:
			case RalphParser.OCTAL_LIT:
			case RalphParser.HEX_LIT:
			case RalphParser.ADDRESS_LIT:
			case RalphParser.ALPH_LIT:
			case RalphParser.BOOL_LIT:
			case RalphParser.IMAGINARY_LIT:
			case RalphParser.RUNE_LIT:
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 386;
				this.expressionStmt();
				}
				break;
			case RalphParser.EVENT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 387;
				this.event();
				}
				break;
			case RalphParser.EMIT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 388;
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
	public expressionStmt(): ExpressionStmtContext {
		let _localctx: ExpressionStmtContext = new ExpressionStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, RalphParser.RULE_expressionStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 391;
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
	public emptyStmt(): EmptyStmtContext {
		let _localctx: EmptyStmtContext = new EmptyStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, RalphParser.RULE_emptyStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
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
			this.state = 395;
			this.match(RalphParser.RETURN);
			this.state = 397;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 396;
				this.expressionList();
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
	public ifStmt(): IfStmtContext {
		let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, RalphParser.RULE_ifStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
			this.match(RalphParser.IF);
			this.state = 400;
			this.match(RalphParser.L_PAREN);
			this.state = 401;
			this.expression(0);
			this.state = 402;
			this.match(RalphParser.R_PAREN);
			this.state = 403;
			this.block();
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.ELSE) {
				{
				this.state = 404;
				this.match(RalphParser.ELSE);
				this.state = 407;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RalphParser.L_CURLY:
					{
					this.state = 405;
					this.block();
					}
					break;
				case RalphParser.IF:
					{
					this.state = 406;
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
			this.state = 411;
			this.match(RalphParser.WHILE);
			this.state = 412;
			this.match(RalphParser.L_PAREN);
			this.state = 414;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (RalphParser.IDENTIFIER - 34)) | (1 << (RalphParser.L_BRACKET - 34)) | (1 << (RalphParser.SUB - 34)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (RalphParser.NOT - 70)) | (1 << (RalphParser.DECIMAL_LIT - 70)) | (1 << (RalphParser.BINARY_LIT - 70)) | (1 << (RalphParser.OCTAL_LIT - 70)) | (1 << (RalphParser.HEX_LIT - 70)) | (1 << (RalphParser.ADDRESS_LIT - 70)) | (1 << (RalphParser.ALPH_LIT - 70)) | (1 << (RalphParser.BOOL_LIT - 70)) | (1 << (RalphParser.IMAGINARY_LIT - 70)) | (1 << (RalphParser.RUNE_LIT - 70)) | (1 << (RalphParser.RAW_STRING_LIT - 70)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 70)))) !== 0)) {
				{
				this.state = 413;
				this.expression(0);
				}
			}

			this.state = 416;
			this.match(RalphParser.R_PAREN);
			this.state = 417;
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
			this.state = 419;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03`\u01A8\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x03\x02\x07\x02R\n\x02\f" +
		"\x02\x0E\x02U\v\x02\x03\x02\x07\x02X\n\x02\f\x02\x0E\x02[\v\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05" +
		"\x07\x05g\n\x05\f\x05\x0E\x05j\v\x05\x03\x06\x03\x06\x03\x06\x05\x06o" +
		"\n\x06\x05\x06q\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
		"\x81\n\x06\x03\x06\x05\x06\x84\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x05\x07\x8C\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x9A\n" +
		"\x07\f\x07\x0E\x07\x9D\v\x07\x03\b\x03\b\x03\b\x07\b\xA2\n\b\f\b\x0E\b" +
		"\xA5\v\b\x03\t\x03\t\x03\t\x07\t\xAA\n\t\f\t\x0E\t\xAD\v\t\x03\t\x03\t" +
		"\x05\t\xB1\n\t\x03\t\x03\t\x03\n\x03\n\x05\n\xB7\n\n\x03\v\x03\v\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x05\r\xC2\n\r\x03\r\x03\r\x03\r\x03" +
		"\r\x07\r\xC8\n\r\f\r\x0E\r\xCB\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\xD2\n\x0E\x03\x0F\x03\x0F\x05\x0F\xD6\n\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xDF\n\x10\f\x10\x0E\x10\xE2" +
		"\v\x10\x03\x10\x05\x10\xE5\n\x10\x05\x10\xE7\n\x10\x03\x10\x05\x10\xEA" +
		"\n\x10\x03\x11\x03\x11\x03\x11\x03\x12\x05\x12\xF0\n\x12\x03\x12\x05\x12" +
		"\xF3\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x07" +
		"\x13\xFC\n\x13\f\x13\x0E\x13\xFF\v\x13\x03\x14\x05\x14\u0102\n\x14\x03" +
		"\x14\x05\x14\u0105\n\x14\x03\x14\x05\x14\u0108\n\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x05\x14\u010E\n\x14\x03\x14\x05\x14\u0111\n\x14\x03\x14\x03" +
		"\x14\x05\x14\u0115\n\x14\x03\x14\x05\x14\u0118\n\x14\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x05\x15\u011F\n\x15\x03\x16\x03\x16\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x03\x18\x05\x18\u0128\n\x18\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x07\x19\u012F\n\x19\f\x19\x0E\x19\u0132\v\x19\x03\x19\x03" +
		"\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u013A\n\x1A\x03\x1A\x05\x1A" +
		"\u013D\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0145" +
		"\n\x1B\x03\x1B\x05\x1B\u0148\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05" +
		"\x1B\u014E\n\x1B\x03\x1B\x05\x1B\u0151\n\x1B\x05\x1B\u0153\n\x1B\x03\x1B" +
		"\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x05\x1D\u015F\n\x1D\x03\x1D\x05\x1D\u0162\n\x1D\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u016A\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03 \x03 \x07 \u0174\n \f \x0E \u0177\v \x03 \x03" +
		" \x03!\x03!\x03!\x03!\x03!\x03!\x05!\u0181\n!\x03\"\x03\"\x03\"\x03\"" +
		"\x03\"\x05\"\u0188\n\"\x03#\x03#\x03$\x03$\x03%\x03%\x05%\u0190\n%\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u019A\n&\x05&\u019C\n&\x03\'" +
		"\x03\'\x03\'\x05\'\u01A1\n\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x02\x02" +
		"\x03\f)\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02\x02\v\x04\x0244HH\x03\x022?\x03\x02" +
		"@E\x03\x02FG\x03\x02\x1D\"\x04\x02ILST\x03\x02Z[\x03\x02\r\x0E\x04\x02" +
		"\x16\x16\x18\x18\x02\u01C9\x02S\x03\x02\x02\x02\x04^\x03\x02\x02\x02\x06" +
		"a\x03\x02\x02\x02\bc\x03\x02\x02\x02\np\x03\x02\x02\x02\f\x8B\x03\x02" +
		"\x02\x02\x0E\x9E\x03\x02\x02\x02\x10\xA6\x03\x02\x02\x02\x12\xB6\x03\x02" +
		"\x02\x02\x14\xB8\x03\x02\x02\x02\x16\xBA\x03\x02\x02\x02\x18\xC1\x03\x02" +
		"\x02\x02\x1A\xD1\x03\x02\x02\x02\x1C\xD5\x03\x02\x02\x02\x1E\xE9\x03\x02" +
		"\x02\x02 \xEB\x03\x02\x02\x02\"\xEF\x03\x02\x02\x02$\xF8\x03\x02\x02\x02" +
		"&\u0101\x03\x02\x02\x02(\u011E\x03\x02\x02\x02*\u0120\x03\x02\x02\x02" +
		",\u0122\x03\x02\x02\x02.\u0127\x03\x02\x02\x020\u0129\x03\x02\x02\x02" +
		"2\u0135\x03\x02\x02\x024\u0140\x03\x02\x02\x026\u0156\x03\x02\x02\x02" +
		"8\u015A\x03\x02\x02\x02:\u0163\x03\x02\x02\x02<\u016B\x03\x02\x02\x02" +
		">\u0171\x03\x02\x02\x02@\u0180\x03\x02\x02\x02B\u0187\x03\x02\x02\x02" +
		"D\u0189\x03\x02\x02\x02F\u018B\x03\x02\x02\x02H\u018D\x03\x02\x02\x02" +
		"J\u0191\x03\x02\x02\x02L\u019D\x03\x02\x02\x02N\u01A5\x03\x02\x02\x02" +
		"PR\x05\x04\x03\x02QP\x03\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02\x02\x02" +
		"ST\x03\x02\x02\x02TY\x03\x02\x02\x02US\x03\x02\x02\x02VX\x05\x06\x04\x02" +
		"WV\x03\x02\x02\x02X[\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02" +
		"Z\\\x03\x02\x02\x02[Y\x03\x02\x02\x02\\]\x07\x02\x02\x03]\x03\x03\x02" +
		"\x02\x02^_\x07\x03\x02\x02_`\x05,\x17\x02`\x05\x03\x02\x02\x02ab\x05\x1C" +
		"\x0F\x02b\x07\x03\x02\x02\x02ch\x07$\x02\x02de\x07,\x02\x02eg\x07$\x02" +
		"\x02fd\x03\x02\x02\x02gj\x03\x02\x02\x02hf\x03\x02\x02\x02hi\x03\x02\x02" +
		"\x02i\t\x03\x02\x02\x02jh\x03\x02\x02\x02kq\x07\x14\x02\x02ln\x07\x13" +
		"\x02\x02mo\x07\x15\x02\x02nm\x03\x02\x02\x02no\x03\x02\x02\x02oq\x03\x02" +
		"\x02\x02pk\x03\x02\x02\x02pl\x03\x02\x02\x02q\x83\x03\x02\x02\x02rs\x07" +
		"$\x02\x02st\x07+\x02\x02t\x84\x05\f\x07\x02uv\x07%\x02\x02vw\x05\b\x05" +
		"\x02wx\x07&\x02\x02xy\x07+\x02\x02yz\x05\f\x07\x02z\x84\x03\x02\x02\x02" +
		"{|\x07$\x02\x02|}\x07+\x02\x02}~\x07$\x02\x02~\x80\x07%\x02\x02\x7F\x81" +
		"\x05\x0E\b\x02\x80\x7F\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x82" +
		"\x03\x02\x02\x02\x82\x84\x07&\x02\x02\x83r\x03\x02\x02\x02\x83u\x03\x02" +
		"\x02\x02\x83{\x03\x02\x02\x02\x84\v\x03\x02\x02\x02\x85\x86\b\x07\x01" +
		"\x02\x86\x8C\x05\x12\n\x02\x87\x8C\x07$\x02\x02\x88\x8C\x05\x10\t\x02" +
		"\x89\x8A\t\x02\x02\x02\x8A\x8C\x05\f\x07\x07\x8B\x85\x03\x02\x02\x02\x8B" +
		"\x87\x03\x02\x02\x02\x8B\x88\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8C" +
		"\x9B\x03\x02\x02\x02\x8D\x8E\f\x06\x02\x02\x8E\x8F\t\x03\x02\x02\x8F\x9A" +
		"\x05\f\x07\x07\x90\x91\f\x05\x02\x02\x91\x92\t\x04\x02\x02\x92\x9A\x05" +
		"\f\x07\x06\x93\x94\f\x04\x02\x02\x94\x95\t\x05\x02\x02\x95\x9A\x05\f\x07" +
		"\x05\x96\x97\f\x03\x02\x02\x97\x98\x07+\x02\x02\x98\x9A\x05\f\x07\x04" +
		"\x99\x8D\x03\x02\x02\x02\x99\x90\x03\x02\x02\x02\x99\x93\x03\x02\x02\x02" +
		"\x99\x96\x03\x02\x02\x02\x9A\x9D\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02" +
		"\x9B\x9C\x03\x02\x02\x02\x9C\r\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02" +
		"\x9E\xA3\x05\f\x07\x02\x9F\xA0\x07,\x02\x02\xA0\xA2\x05\f\x07\x02\xA1" +
		"\x9F\x03\x02\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA3" +
		"\xA4\x03\x02\x02\x02\xA4\x0F\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA6" +
		"\xAB\x07$\x02\x02\xA7\xA8\x07/\x02\x02\xA8\xAA\x07$\x02\x02\xA9\xA7\x03" +
		"\x02\x02\x02\xAA\xAD\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAC\x03" +
		"\x02\x02\x02\xAC\xAE\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAE\xB0\x07" +
		"%\x02\x02\xAF\xB1\x05\x0E\b\x02\xB0\xAF\x03\x02\x02\x02\xB0\xB1\x03\x02" +
		"\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB3\x07&\x02\x02\xB3\x11\x03\x02" +
		"\x02\x02\xB4\xB7\x05(\x15\x02\xB5\xB7\x05\x18\r\x02\xB6\xB4\x03\x02\x02" +
		"\x02\xB6\xB5\x03\x02\x02\x02\xB7\x13\x03\x02\x02\x02\xB8\xB9\t\x06\x02" +
		"\x02\xB9\x15\x03\x02\x02\x02\xBA\xBB\x07)\x02\x02\xBB\xBC\x05\x1A\x0E" +
		"\x02\xBC\xBD\x07-\x02\x02\xBD\xBE\x05\f\x07\x02\xBE\xBF\x07*\x02\x02\xBF" +
		"\x17\x03\x02\x02\x02\xC0\xC2\x07$\x02\x02\xC1\xC0\x03\x02\x02\x02\xC1" +
		"\xC2\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x07)\x02\x02\xC4" +
		"\xC9\x05\f\x07\x02\xC5\xC6\x07,\x02\x02\xC6\xC8\x05\f\x07\x02\xC7\xC5" +
		"\x03\x02\x02\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xCA" +
		"\x03\x02\x02\x02\xCA\xCC\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCC\xCD" +
		"\x07*\x02\x02\xCD\x19\x03\x02\x02\x02\xCE\xD2\x05\x14\v\x02\xCF\xD2\x05" +
		"\x16\f\x02\xD0\xD2\x07$\x02\x02\xD1\xCE\x03\x02\x02\x02\xD1\xCF\x03\x02" +
		"\x02\x02\xD1\xD0\x03\x02\x02\x02\xD2\x1B\x03\x02\x02\x02\xD3\xD6\x05\x16" +
		"\f\x02\xD4\xD6\x05.\x18\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD4\x03\x02\x02" +
		"\x02\xD6\x1D\x03\x02\x02\x02\xD7\xD8\x07%\x02\x02\xD8\xEA\x07&\x02\x02" +
		"\xD9\xEA\x05\x1A\x0E\x02\xDA\xE6\x07%\x02\x02\xDB\xE0\x05\x1A\x0E\x02" +
		"\xDC\xDD\x07,\x02\x02\xDD\xDF\x05\x1A\x0E\x02\xDE\xDC\x03\x02\x02\x02" +
		"\xDF\xE2\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02" +
		"\xE1\xE4\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE3\xE5\x07,\x02\x02" +
		"\xE4\xE3\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE7\x03\x02\x02\x02" +
		"\xE6\xDB\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02" +
		"\xE8\xEA\x07&\x02\x02\xE9\xD7\x03\x02\x02\x02\xE9\xD9\x03\x02\x02\x02" +
		"\xE9\xDA\x03\x02\x02\x02\xEA\x1F\x03\x02\x02\x02\xEB\xEC\x07\x1C\x02\x02" +
		"\xEC\xED\x07$\x02\x02\xED!\x03\x02\x02\x02\xEE\xF0\x05 \x11\x02\xEF\xEE" +
		"\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF2\x03\x02\x02\x02\xF1\xF3" +
		"\x07\x15\x02\x02\xF2\xF1\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF4" +
		"\x03\x02\x02\x02\xF4\xF5\x07$\x02\x02\xF5\xF6\x07.\x02\x02\xF6\xF7\x05" +
		"\x1A\x0E\x02\xF7#\x03\x02\x02\x02\xF8\xFD\x05\"\x12\x02\xF9\xFA\x07,\x02" +
		"\x02\xFA\xFC\x05\"\x12\x02\xFB\xF9\x03\x02\x02\x02\xFC\xFF\x03\x02\x02" +
		"\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE%\x03\x02\x02" +
		"\x02\xFF\xFD\x03\x02\x02\x02\u0100\u0102\x05<\x1F\x02\u0101\u0100\x03" +
		"\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0104\x03\x02\x02\x02\u0103" +
		"\u0105\x07\x06\x02\x02\u0104\u0103\x03\x02\x02\x02\u0104\u0105\x03\x02" +
		"\x02\x02\u0105\u0107\x03\x02\x02\x02\u0106\u0108\x07\x07\x02\x02\u0107" +
		"\u0106\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u0109\x03\x02" +
		"\x02\x02\u0109\u010A\x07\x05\x02\x02\u010A\u0110\x07$\x02\x02\u010B\u010D" +
		"\x07%\x02\x02\u010C\u010E\x05$\x13\x02\u010D\u010C\x03\x02\x02\x02\u010D" +
		"\u010E\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0111\x07&\x02" +
		"\x02\u0110\u010B\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0114" +
		"\x03\x02\x02\x02\u0112\u0113\x07#\x02\x02\u0113\u0115\x05\x1E\x10\x02" +
		"\u0114\u0112\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0117\x03" +
		"\x02\x02\x02\u0116\u0118\x05> \x02\u0117\u0116\x03\x02\x02\x02\u0117\u0118" +
		"\x03\x02\x02\x02\u0118\'\x03\x02\x02\x02\u0119\u011F\x05*\x16\x02\u011A" +
		"\u011F\x05,\x17\x02\u011B\u011F\x07M\x02\x02\u011C\u011F\x07N\x02\x02" +
		"\u011D\u011F\x07O\x02\x02\u011E\u0119\x03\x02\x02\x02\u011E\u011A\x03" +
		"\x02\x02\x02\u011E\u011B\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011E" +
		"\u011D\x03\x02\x02\x02\u011F)\x03\x02\x02\x02\u0120\u0121\t\x07\x02\x02" +
		"\u0121+\x03\x02\x02\x02\u0122\u0123\t\b\x02\x02\u0123-\x03\x02\x02\x02" +
		"\u0124\u0128\x052\x1A\x02\u0125\u0128\x054\x1B\x02\u0126\u0128\x056\x1C" +
		"\x02\u0127\u0124\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0126" +
		"\x03\x02\x02\x02\u0128/\x03\x02\x02\x02\u0129\u0130\x07\'\x02\x02\u012A" +
		"\u012F\x05@!\x02\u012B\u012F\x058\x1D\x02\u012C\u012F\x05:\x1E\x02\u012D" +
		"\u012F\x05&\x14\x02\u012E\u012A\x03\x02\x02\x02\u012E\u012B\x03\x02\x02" +
		"\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012D\x03\x02\x02\x02\u012F\u0132" +
		"\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02" +
		"\u0131\u0133\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0133\u0134\x07" +
		"(\x02\x02\u01341\x03\x02\x02\x02\u0135\u0136\x07\f\x02\x02\u0136\u013C" +
		"\x07$\x02\x02\u0137\u0139\x07%\x02\x02\u0138\u013A\x05$\x13\x02\u0139" +
		"\u0138\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013B\x03\x02" +
		"\x02\x02\u013B\u013D\x07&\x02\x02\u013C\u0137\x03\x02\x02\x02\u013C\u013D" +
		"\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u013F\x050\x19\x02" +
		"\u013F3\x03\x02\x02\x02\u0140\u0141\t\t\x02\x02\u0141\u0147\x07$\x02\x02" +
		"\u0142\u0144\x07%\x02\x02\u0143\u0145\x05$\x13\x02\u0144\u0143\x03\x02" +
		"\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146" +
		"\u0148\x07&\x02\x02\u0147\u0142\x03\x02\x02\x02\u0147\u0148\x03\x02\x02" +
		"\x02\u0148\u0152\x03\x02\x02\x02\u0149\u014A\t\n\x02\x02\u014A\u0150\x07" +
		"$\x02\x02\u014B\u014D\x07%\x02\x02\u014C\u014E\x05\x0E\b\x02\u014D\u014C" +
		"\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02" +
		"\u014F\u0151\x07&\x02\x02\u0150\u014B\x03\x02\x02\x02\u0150\u0151\x03" +
		"\x02\x02\x02\u0151\u0153\x03\x02\x02\x02\u0152\u0149\x03\x02\x02\x02\u0152" +
		"\u0153\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0155\x050\x19" +
		"\x02\u01555\x03\x02\x02\x02\u0156\u0157\x07\t\x02\x02\u0157\u0158\x07" +
		"$\x02\x02\u0158\u0159\x050\x19\x02\u01597\x03\x02\x02\x02\u015A\u015B" +
		"\x07\x19\x02\x02\u015B\u0161\x07$\x02\x02\u015C\u015E\x07%\x02\x02\u015D" +
		"\u015F\x05$\x13\x02\u015E\u015D\x03\x02\x02\x02\u015E\u015F\x03\x02\x02" +
		"\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0162\x07&\x02\x02\u0161\u015C" +
		"\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u01629\x03\x02\x02\x02\u0163" +
		"\u0164\x07\x1A\x02\x02\u0164\u0169\x07$\x02\x02\u0165\u0166\x07%\x02\x02" +
		"\u0166\u0167\x05\x0E\b\x02\u0167\u0168\x07&\x02\x02\u0168\u016A\x03\x02" +
		"\x02\x02\u0169\u0165\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A" +
		";\x03\x02\x02\x02\u016B\u016C\x07\x1C\x02\x02\u016C\u016D\x07\x1B\x02" +
		"\x02\u016D\u016E\x07%\x02\x02\u016E\u016F\x05\x0E\b\x02\u016F\u0170\x07" +
		"&\x02\x02\u0170=\x03\x02\x02\x02\u0171\u0175\x07\'\x02\x02\u0172\u0174" +
		"\x05@!\x02\u0173\u0172\x03\x02\x02\x02\u0174\u0177\x03\x02\x02\x02\u0175" +
		"\u0173\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176\u0178\x03\x02" +
		"\x02\x02\u0177\u0175\x03\x02\x02\x02\u0178\u0179\x07(\x02\x02\u0179?\x03" +
		"\x02\x02\x02\u017A\u0181\x05\x06\x04\x02\u017B\u0181\x05B\"\x02\u017C" +
		"\u0181\x05H%\x02\u017D\u0181\x05> \x02\u017E\u0181\x05J&\x02\u017F\u0181" +
		"\x05L\'\x02\u0180\u017A\x03\x02\x02\x02\u0180\u017B\x03\x02\x02\x02\u0180" +
		"\u017C\x03\x02\x02\x02\u0180\u017D\x03\x02\x02\x02\u0180\u017E\x03\x02" +
		"\x02\x02\u0180\u017F\x03\x02\x02\x02\u0181A\x03\x02\x02\x02\u0182\u0188" +
		"\x05F$\x02\u0183\u0188\x05\n\x06\x02\u0184\u0188\x05D#\x02\u0185\u0188" +
		"\x058\x1D\x02\u0186\u0188\x05:\x1E\x02\u0187\u0182\x03\x02\x02\x02\u0187" +
		"\u0183\x03\x02\x02\x02\u0187\u0184\x03\x02\x02\x02\u0187\u0185\x03\x02" +
		"\x02\x02\u0187\u0186\x03\x02\x02\x02\u0188C\x03\x02\x02\x02\u0189\u018A" +
		"\x05\f\x07\x02\u018AE\x03\x02\x02\x02\u018B\u018C\x05N(\x02\u018CG\x03" +
		"\x02\x02\x02\u018D\u018F\x07\b\x02\x02\u018E\u0190\x05\x0E\b\x02\u018F" +
		"\u018E\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190I\x03\x02\x02" +
		"\x02\u0191\u0192\x07\x10\x02\x02\u0192\u0193\x07%\x02\x02\u0193\u0194" +
		"\x05\f\x07\x02\u0194\u0195\x07&\x02\x02\u0195\u019B\x05> \x02\u0196\u0199" +
		"\x07\x11\x02\x02\u0197\u019A\x05> \x02\u0198\u019A\x05J&\x02\u0199\u0197" +
		"\x03\x02\x02\x02\u0199\u0198\x03\x02\x02\x02\u019A\u019C\x03\x02\x02\x02" +
		"\u019B\u0196\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019CK\x03\x02" +
		"\x02\x02\u019D\u019E\x07\x12\x02\x02\u019E\u01A0\x07%\x02\x02\u019F\u01A1" +
		"\x05\f\x07\x02\u01A0\u019F\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02" +
		"\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A3\x07&\x02\x02\u01A3\u01A4\x05" +
		"> \x02\u01A4M\x03\x02\x02\x02\u01A5\u01A6\x07`\x02\x02\u01A6O\x03\x02" +
		"\x02\x027SYhnp\x80\x83\x8B\x99\x9B\xA3\xAB\xB0\xB6\xC1\xC9\xD1\xD5\xE0" +
		"\xE4\xE6\xE9\xEF\xF2\xFD\u0101\u0104\u0107\u010D\u0110\u0114\u0117\u011E" +
		"\u0127\u012E\u0130\u0139\u013C\u0144\u0147\u014D\u0150\u0152\u015E\u0161" +
		"\u0169\u0175\u0180\u0187\u018F\u0199\u019B\u01A0";
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
	public importDecl(): ImportDeclContext[];
	public importDecl(i: number): ImportDeclContext;
	public importDecl(i?: number): ImportDeclContext | ImportDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclContext);
		} else {
			return this.getRuleContext(i, ImportDeclContext);
		}
	}
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
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


export class ImportDeclContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(RalphParser.IMPORT, 0); }
	public string_(): String_Context {
		return this.getRuleContext(0, String_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_importDecl; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterImportDecl) {
			listener.enterImportDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitImportDecl) {
			listener.exitImportDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitImportDecl) {
			return visitor.visitImportDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public typeDeclStmt(): TypeDeclStmtContext {
		return this.getRuleContext(0, TypeDeclStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_declaration; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.IDENTIFIER);
		} else {
			return this.getToken(RalphParser.IDENTIFIER, i);
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
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.IDENTIFIER);
		} else {
			return this.getToken(RalphParser.IDENTIFIER, i);
		}
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ASSIGN, 0); }
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public LET(): TerminalNode | undefined { return this.tryGetToken(RalphParser.LET, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
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


export class ExpressionContext extends ParserRuleContext {
	public primaryExpr(): PrimaryExprContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExprContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
	public methodCall(): MethodCallContext | undefined {
		return this.tryGetRuleContext(0, MethodCallContext);
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


export class MethodCallContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.IDENTIFIER);
		} else {
			return this.getToken(RalphParser.IDENTIFIER, i);
		}
	}
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.DOT);
		} else {
			return this.getToken(RalphParser.DOT, i);
		}
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
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
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
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


export class Type_Context extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_type_; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterType_) {
			listener.enterType_(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitType_) {
			listener.exitType_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitType_) {
			return visitor.visitType_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclStmtContext extends ParserRuleContext {
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public typeStruct(): TypeStructContext | undefined {
		return this.tryGetRuleContext(0, TypeStructContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeDeclStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeDeclStmt) {
			listener.enterTypeDeclStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeDeclStmt) {
			listener.exitTypeDeclStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeDeclStmt) {
			return visitor.visitTypeDeclStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResultContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public type_(): Type_Context[];
	public type_(i: number): Type_Context;
	public type_(i?: number): Type_Context | Type_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_Context);
		} else {
			return this.getRuleContext(i, Type_Context);
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
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
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
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
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
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUB(): TerminalNode | undefined { return this.tryGetToken(RalphParser.PUB, 0); }
	public PAYABLE(): TerminalNode | undefined { return this.tryGetToken(RalphParser.PAYABLE, 0); }
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public R_ARROW(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_ARROW, 0); }
	public result(): ResultContext | undefined {
		return this.tryGetRuleContext(0, ResultContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
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
	public txScript(): TxScriptContext | undefined {
		return this.tryGetRuleContext(0, TxScriptContext);
	}
	public contract(): ContractContext | undefined {
		return this.tryGetRuleContext(0, ContractContext);
	}
	public interface(): InterfaceContext | undefined {
		return this.tryGetRuleContext(0, InterfaceContext);
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
	public emit(): EmitContext[];
	public emit(i: number): EmitContext;
	public emit(i?: number): EmitContext | EmitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EmitContext);
		} else {
			return this.getRuleContext(i, EmitContext);
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
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
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


export class ContractContext extends ParserRuleContext {
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
	public TXCONTRACT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.TXCONTRACT, 0); }
	public CONTRACT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.CONTRACT, 0); }
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


export class InterfaceContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(RalphParser.INTERFACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public typeStructBody(): TypeStructBodyContext {
		return this.getRuleContext(0, TypeStructBodyContext);
	}
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
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
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
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
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
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
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
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
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
	public expressionStmt(): ExpressionStmtContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStmtContext);
	}
	public event(): EventContext | undefined {
		return this.tryGetRuleContext(0, EventContext);
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


export class ExpressionStmtContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_expressionStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterExpressionStmt) {
			listener.enterExpressionStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitExpressionStmt) {
			listener.exitExpressionStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitExpressionStmt) {
			return visitor.visitExpressionStmt(this);
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
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
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


