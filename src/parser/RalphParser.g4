parser grammar RalphParser;

options
{
   tokenVocab = RalphLexer;
}

sourceFile:  (importDecl)* (declaration)* EOF;


importDecl: IMPORT string_;

declaration: typeDeclStmt;

identifierList: IDENTIFIER (COMMA IDENTIFIER)*;

varDecl: (CONST | (LET MUT?)) ((IDENTIFIER ASSIGN expression)
         | (L_PAREN identifierList R_PAREN ASSIGN expression)
         | IDENTIFIER ASSIGN IDENTIFIER L_PAREN expressionList? R_PAREN )
         ;

//expression
expression:
	primaryExpr
	| IDENTIFIER
	| methodCall
	| (SUB | NOT) expression
	| expression (
        CONCAT
        | ADD
        | SUB
        | MUL
        | DIV
        | MOD
        | MODADD
        | MODSUB
        | MODMUL
        | SHL
        | SHR
        | BITAND
        | XOR
		| BITOR
	) expression
	| expression (
		EQ
		| NQ
		| LT
		| LE
		| GT
		| GE
	) expression
	| expression (AND | OR) expression
	| expression ASSIGN expression
	;

expressionList: expression (COMMA expression)*;

methodCall: IDENTIFIER (DOT IDENTIFIER)* L_PAREN expressionList? R_PAREN;

primaryExpr
	: basicLit
	| arrayExpr
	;

primitiveType
    : BOOL
    | I256
    | BYTE
    | U256
    | BYTEVEC
    | ADDRESS
    ;

arrayType: L_BRACKET type_ SEMI expression R_BRACKET;
arrayExpr: IDENTIFIER? L_BRACKET expression (COMMA expression)* R_BRACKET;


type_: primitiveType | arrayType | IDENTIFIER ;

typeDeclStmt: arrayType | typeStruct;

result
	: L_PAREN R_PAREN
    | type_
    | L_PAREN (type_ (COMMA type_)* COMMA?)? R_PAREN
    ;


paramAnnotation: AT IDENTIFIER;

param: paramAnnotation? MUT? IDENTIFIER COLON type_;

paramList: param (COMMA param)*;

// Function declarations
methodDecl
	: (annotation)? PUB? PAYABLE? FN IDENTIFIER (L_PAREN (paramList)? R_PAREN)? (R_ARROW result)? block?
	;

basicLit
	: integer
	| string_
	| ADDRESS_LIT
	| ALPH_LIT
	| BOOL_LIT
	;

integer
	: DECIMAL_LIT
	| BINARY_LIT
	| OCTAL_LIT
	| HEX_LIT
	| IMAGINARY_LIT
	| RUNE_LIT
    ;

string_: RAW_STRING_LIT | INTERPRETED_STRING_LIT;

//fieldDecl: MUT? IDENTIFIER COLON typeDecl;
//typeStruct: typeStructHeader typeStructBody;

//typeParam
//	: STRUCT
//	| ENUM
//	| INTERFACE
//	| TXSCRIPT
//	| TXCONTRACT
//	| CONTRACT
//	| ASSETSCRIPT
//	;

//typeStructHeader
//	: typeParam IDENTIFIER (L_PAREN (paramList)? R_PAREN)? ((EXTENDS | IMPLEMENTS) IDENTIFIER (L_PAREN (expressionList)? R_PAREN)?)?
//	;

typeStruct: txScript | contract | interface;

typeStructBody: L_CURLY (statement | event | emit | methodDecl)* R_CURLY;

txScript: TXSCRIPT IDENTIFIER (L_PAREN (paramList)? R_PAREN)? typeStructBody;

contract: (TXCONTRACT | CONTRACT) IDENTIFIER (L_PAREN (paramList)? R_PAREN)? ((EXTENDS | IMPLEMENTS) IDENTIFIER (L_PAREN (expressionList)? R_PAREN)?)? typeStructBody;

interface: INTERFACE IDENTIFIER typeStructBody;

event: EVENT IDENTIFIER (L_PAREN (paramList)? R_PAREN)?;

emit: EMIT IDENTIFIER (L_PAREN expressionList R_PAREN)?;


//  [@using(preapprovedAssets = <Bool>, assetsInContract = <Bool>)]
annotation
    : AT USING L_PAREN (expressionList) R_PAREN
    ;

block: L_CURLY (statement)* R_CURLY;

statement:
	declaration
	| simpleStmt
	| returnStmt
	| block
	| ifStmt
	| whileStmt
	// | breakStmt
	// | continueStmt
	// | forStmt
	;

simpleStmt
	: emptyStmt
	| varDecl
	| expressionStmt
	| event
	| emit
	;

expressionStmt: expression;

emptyStmt: eos;

returnStmt: RETURN expressionList?;

// breakStmt: BREAK IDENTIFIER?;
// continueStmt: CONTINUE IDENTIFIER?;
// forStmt: FOR (expression?) block;

ifStmt: IF L_PAREN expression R_PAREN block (ELSE (block | ifStmt))?;

whileStmt: WHILE L_PAREN expression? R_PAREN block;

eos: EOS;
