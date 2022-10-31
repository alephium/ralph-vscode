parser grammar RalphParser;

options
{
   tokenVocab = RalphLexer;
}

sourceFile: (txScript | contract | interface | assetScript)* EOF;

identifierList: varName (COMMA varName)*;

varDeclSingle: (CONST | (LET MUT?)) varName ASSIGN IDENTIFIER L_PAREN expressionList R_PAREN;

varDeclMulti: (CONST | (LET MUT?)) L_PAREN identifierList R_PAREN ASSIGN callChain;

varDecl
    : varDeclSingle
    | varDeclMulti //# varDeclStmt
    ;

varName: IDENTIFIER;

//expression
expression:
	primaryExpr
	| callChain
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

expressionList: (expression COMMA?)*;

callChain: (varName | methodCall) (DOT callChain)*;

methodCall: IDENTIFIER L_PAREN expressionList R_PAREN;

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
    | arrayType
    ;

arrayType
    : L_BRACKET typeName SEMI expression R_BRACKET // # arrayTypeDeclStmt
    ;

arrayExpr: IDENTIFIER? L_BRACKET expression (COMMA expression)* R_BRACKET;

typeName: primitiveType | IDENTIFIER ;

result
	: L_PAREN R_PAREN
    | typeName
    | L_PAREN (typeName (COMMA typeName)* COMMA?)? R_PAREN
    ;


paramAnnotation: AT 'unused';

param: paramAnnotation? MUT? IDENTIFIER COLON typeName;

paramList: (param COMMA?)*;

// Function declarations
methodDecl
	: (annotation)? PUB? FN IDENTIFIER L_PAREN paramList R_PAREN (R_ARROW result)? block?
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

varNameAssign: varName ASSIGN basicLit;

enum: ENUM IDENTIFIER L_CURLY varNameAssign* R_CURLY;

typeStructBody: L_CURLY (statement | event | methodDecl | enum)* R_CURLY;

txScript
    : TXSCRIPT IDENTIFIER (L_PAREN paramList R_PAREN)? typeStructBody // # txScriptDeclStmt
    ;

assetScript
    : ASSETSCRIPT IDENTIFIER (L_PAREN paramList R_PAREN)? typeStructBody
    ;

contract
    : CONTRACT IDENTIFIER (L_PAREN paramList R_PAREN)? ((EXTENDS | IMPLEMENTS) IDENTIFIER (L_PAREN expressionList R_PAREN)?)? typeStructBody // # contractDeclStmt
    ;

interface
    : INTERFACE IDENTIFIER (EXTENDS IDENTIFIER)? typeStructBody // # interfaceDeclStmt
    ;

event: EVENT IDENTIFIER L_PAREN paramList R_PAREN;

emit
    : EMIT IDENTIFIER L_PAREN expressionList R_PAREN  // # emitStmt
    ;

//  [@using(preapprovedAssets = <Bool>, assetsInContract = <Bool>)]
annotation
    : AT USING L_PAREN expressionList R_PAREN
    ;

block: L_CURLY (statement)* R_CURLY;

statement:
	simpleStmt
	| returnStmt
	| block
	| ifStmt
	| whileStmt
    | forStmt
	;

simpleStmt
	: emptyStmt
	| varDecl
	| expression
	| emit
	;

emptyStmt: eos;

returnStmt: RETURN expressionList;

ifStmt: IF L_PAREN expression R_PAREN block (ELSE (block | ifStmt))?;

whileStmt
    : WHILE L_PAREN expression? R_PAREN block
    ;

forStmt: FOR L_PAREN (LET MUT varName ASSIGN expression)? SEMI expression? SEMI expression? R_PAREN block;

eos: EOS;
