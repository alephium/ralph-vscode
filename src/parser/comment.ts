interface BaseComment {
  value: string
  start?: number
  end?: number
  loc?: SourceLocation
  ignore?: boolean
  type: 'CommentBlock' | 'CommentLine'
}

interface CommentBlock extends BaseComment {
  type: 'CommentBlock'
}

interface CommentLine extends BaseComment {
  type: 'CommentLine'
}

interface SourceLocation {
  start: {
    line: number
    column: number
  }
  end: {
    line: number
    column: number
  }
}

export type Comment = CommentBlock | CommentLine

// interface BaseNode {
//   type: Node["type"];
//   leadingComments?: Comment[] | null;
//   innerComments?: Comment[] | null;
//   trailingComments?: Comment[] | null;
//   start?: number | null;
//   end?: number | null;
//   loc?: SourceLocation | null;
//   range?: [number, number];
//   extra?: Record<string, unknown>;
// }

// // declare type Node = AnyTypeAnnotation | ArrayExpression | ArrayPattern | ArrayTypeAnnotation | AssignmentExpression | BinaryExpression | BlockStatement | BooleanLiteral | CallExpression  | ClassAccessorProperty | ClassBody | ClassDeclaration | ClassExpression | ClassImplements | ClassMethod | ClassPrivateMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | DecimalLiteral | DeclareClass | DeclareExportAllDeclaration | DeclareExportDeclaration | DeclareFunction | DeclareInterface
// // DeclareVariable | EmptyStatement | EmptyTypeAnnotation | EnumBooleanBody | EnumBooleanMember | EnumDeclaration  | EnumNumberBody | EnumNumberMember | EnumStringBody | EnumStringMember | EnumSymbolBody | ExistsTypeAnnotation  | ExpressionStatement | ForStatement | FunctionDeclaration | FunctionExpression | FunctionTypeAnnotation | FunctionTypeParam | GenericTypeAnnotation | Identifier | IfStatement | IndexedAccessType | InferredPredicate | InterfaceDeclaration | InterfaceExtends | InterfaceTypeAnnotation | InterpreterDirective | IntersectionTypeAnnotation | LogicalExpression | MemberExpression | NewExpression | NumberLiteralTypeAnnotation | NumberTypeAnnotation | NumericLiteral | ObjectExpression | ObjectMethod | ObjectPattern | ObjectProperty | ObjectTypeAnnotation  | ReturnStatement  | StringLiteral  | TypeAnnotation | TypeofTypeAnnotation | UnaryExpression | WhileStatement ;
// declare type Node = ''
//
// interface ArrayExpression extends BaseNode {
//   type: "ArrayExpression";
//   elements: Array<null | Expression>;
// }
//
//
// declare type Expression = ArrayExpression | AssignmentExpression | BinaryExpression | CallExpression | ConditionalExpression | FunctionExpression | Identifier | StringLiteral | NumericLiteral  | BooleanLiteral  | LogicalExpression | MemberExpression  | ObjectExpression  | UnaryExpression  | ClassExpression  | DecimalLiteral
//
// declare type While =  WhileStatement;
//
// declare type Conditional = ConditionalExpression | IfStatement;
// declare type Loop =  ForStatement | WhileStatement ;
