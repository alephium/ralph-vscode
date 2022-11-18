lexer grammar RalphLexer;

// LEXER
// src/main/scala/org/alephium/protocol/vm/lang/Lexer.scala
FN                     : 'fn';
PUB                    : 'pub';
RETURN                 : 'return' ;

INTERFACE              : 'Interface';
ENUM                   : 'enum';
TXSCRIPT               : 'TxScript';
CONTRACT               : 'Contract';
ASSETSCRIPT            : 'AssetScript';

IF                     : 'if';
ELSE                   : 'else';
WHILE                  : 'while';
FOR                    : 'for';
// BREAK                  : 'break';
// CONTINUE               : 'continue';

LET                    : 'let';
CONST                  : 'const';
MUT                    : 'mut';

EXTENDS                :'extends';
ABSTRACT               :'Abstract';
IMPLEMENTS             :'implements';
EVENT                  :'event';
EMIT                   :'emit';

//@using|using
ATUSING                :'@using';
USING                  :'using';
AT                     :'@';
BOOL                   :'Bool';
I256                   :'I256';
U256                   :'U256';
BYTE                   :'Byte';
BYTEVEC                :'ByteVec';
ADDRESS                :'Address';

ATUNUSED               :'@unused';
UNUSED                 :'unused';

//->
R_ARROW                :'->';


IDENTIFIER             : LETTER (LETTER | DIGIT)* '!'?;

// Punctuation
L_PAREN                : '(';
R_PAREN                : ')';
L_CURLY                : '{';
R_CURLY                : '}';
L_BRACKET              : '[';
R_BRACKET              : ']';
ASSIGN                 : '=';
COMMA                  : ',';
SEMI                   : ';';
COLON                  : ':';
DOT                    : '.';
POUND                  : '#';
DOUBT                  : '?';

//Operator
CONCAT                 : '++';
ADD                    : '+';
SUB                    : '-';
MUL                    : '*';
DIV                    : '/';
MOD                    : '%';
MODADD                 : '⊕' | '`+`';
MODSUB                 : '⊖' | '`-`';
MODMUL                 : '⊗' | '`*`';
SHL                    : '<<';
SHR                    : '>>';
BITAND                 : '&';
XOR                    : '^';
BITOR                  : '|';
//TestOperator
EQ                     : '==';
NQ                     : '!=';
LT                     : '<';
LE                     : '<=';
GT                     : '>';
GE                     : '>=';
//LogicalOperator
AND                    : '&&';
OR                     : '||';
NOT                    : '!';

ALPH                   : 'alph';

ADDRESS_LIT            : '#' (DIGIT | LETTER)*;
ALPH_LIT               : DIGIT+ [ ]+ ALPH;
BOOL_LIT               : 'true' | 'false';

//TODO
// Number literals
DECIMAL_LIT            : ('0' | [1-9] ('_'? [0-9])*);
BINARY_LIT             : '0' [bB] ('_'? BIN_DIGIT)+;
OCTAL_LIT              : '0' [oO]? ('_'? OCTAL_DIGIT)+;
HEX_LIT                : '0' [xX]  ('_'? HEX_DIGIT)+;

FLOAT_LIT : (DECIMAL_FLOAT_LIT | HEX_FLOAT_LIT);

DECIMAL_FLOAT_LIT      : DECIMALS ('.' DECIMALS? EXPONENT? | EXPONENT)
                       | '.' DECIMALS EXPONENT?
                       ;

HEX_FLOAT_LIT          : '0' [xX] HEX_MANTISSA HEX_EXPONENT
                       ;

fragment HEX_MANTISSA  : ('_'? HEX_DIGIT)+ ('.' ( '_'? HEX_DIGIT )*)?
                       | '.' HEX_DIGIT ('_'? HEX_DIGIT)*;

fragment HEX_EXPONENT  : [pP] [+-]? DECIMALS;


IMAGINARY_LIT          : (DECIMAL_LIT | BINARY_LIT |  OCTAL_LIT | HEX_LIT | FLOAT_LIT) 'i' ;

// Rune literals

fragment RUNE           : '\'' (UNICODE_VALUE | BYTE_VALUE) '\'';//: '\'' (~[\n\\] | ESCAPED_VALUE) '\'';

RUNE_LIT                : RUNE;

BYTE_VALUE : OCTAL_BYTE_VALUE | HEX_BYTE_VALUE;

OCTAL_BYTE_VALUE: '\\' OCTAL_DIGIT OCTAL_DIGIT OCTAL_DIGIT;

HEX_BYTE_VALUE: '\\' 'x'  HEX_DIGIT HEX_DIGIT;

LITTLE_U_VALUE: '\\' 'u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT;

BIG_U_VALUE: '\\' 'U' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT;

// String literals

RAW_STRING_LIT         : '`' ~'`'*                      '`';
INTERPRETED_STRING_LIT : '"' (~["\\] | ESCAPED_VALUE)*  '"';

fragment UNICODE_VALUE: ~[\r\n'] | LITTLE_U_VALUE | BIG_U_VALUE | ESCAPED_VALUE;
// Fragments
fragment ESCAPED_VALUE
    : '\\' ('u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT
           | 'U' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT
           | [abfnrtv\\'"]
           | OCTAL_DIGIT OCTAL_DIGIT OCTAL_DIGIT
           | 'x' HEX_DIGIT HEX_DIGIT)
    ;
fragment DECIMALS
    : [0-9] ('_'? [0-9])*
    ;
fragment OCTAL_DIGIT
    : [0-7]
    ;
fragment HEX_DIGIT
    : [0-9a-fA-F]
    ;
fragment BIN_DIGIT
    : [01]
    ;
fragment EXPONENT
    : [eE] [+-]? DECIMALS
    ;
fragment LETTER
    : [a-zA-Z]
    | '_'
    ;
fragment UNICODE_DIGIT
    : [\p{Nd}]
    ;

fragment DIGIT
    : [0-9]
    ;

// Whitespace and comments
WS   : [ \t\n\r]+                    -> channel(1);
COMMENT:            '/*' .*? '*/'    -> channel(2);
LINE_COMMENT:       '//' ~[\r\n]*    -> channel(3);
TERMINATOR: [\r\n]+                  -> channel(4);

// Emit an EOS token for any newlines, semicolon, multiline comments or the EOF and
//return to normal lexing
EOS: ([\r\t\n]+ | ';' | '/*' .*? '*/' | EOF);
