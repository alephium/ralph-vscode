interface Location {
  start: {
    line: number
    column: number
  }
  end: {
    line: number
    column: number
  }
}

export interface BaseASTNode {
  type: ASTNodeTypeString
  range?: [number, number]
  loc?: Location
}

export interface SourceUnit extends BaseASTNode {
  type: 'SourceUnit'
  children: ASTNode[]
}

export interface ContractDefinition extends BaseASTNode {
  type: 'ContractDefinition'
  name: string
  baseContracts: InheritanceSpecifier[]
  kind: string
  subNodes: BaseASTNode[]
}

export interface InheritanceSpecifier extends BaseASTNode {
  type: 'InheritanceSpecifier'
  baseName: UserDefinedTypeName
  arguments: Expression[]
}

export interface UserDefinedTypeName extends BaseASTNode {
  type: 'UserDefinedTypeName'
  namePath: string
}

export const astNodeTypes = [
  'SourceUnit',
  'ContractDefinition',
  'InheritanceSpecifier',
  'StateVariableDeclaration',
  'UsingForDeclaration',
  'StructDefinition',
  'ModifierDefinition',
  'ModifierInvocation',
  'FunctionDefinition',
  'EventDefinition',
  'CustomErrorDefinition',
  'EnumValue',
  'EnumDefinition',
  'VariableDeclaration',
  'UserDefinedTypeName',
  'Mapping',
  'ArrayTypeName',
  'FunctionTypeName',
  'Block',
  'ExpressionStatement',
  'IfStatement',
  'WhileStatement',
  'ForStatement',
  'ReturnStatement',
  'EmitStatement',
  'VariableDeclarationStatement',
  'ElementaryTypeName',
  'FunctionCall',
  'NameValueExpression',
  'BooleanLiteral',
  'NumberLiteral',
  'Identifier',
  'BinaryOperation',
  'UnaryOperation',
  'NewExpression',
  'Conditional',
  'StringLiteral',
  'HexLiteral',
  'HexNumber',
  'DecimalNumber',
  'MemberAccess',
  'IndexAccess',
  'IndexRangeAccess',
  'NameValueList',
  'UncheckedStatement',
  'TypeDefinition',
] as const

export type ASTNodeTypeString = typeof astNodeTypes[number]

export interface StateVariableDeclaration extends BaseASTNode {
  type: 'StateVariableDeclaration'
  variables: StateVariableDeclarationVariable[]
  initialValue: Expression | null
}

export interface UsingForDeclaration extends BaseASTNode {
  type: 'UsingForDeclaration'
  typeName: TypeName | null
  functions: string[]
  libraryName: string | null
  isGlobal: boolean
}
export interface StructDefinition extends BaseASTNode {
  type: 'StructDefinition'
  name: string
  members: VariableDeclaration[]
}
export interface ModifierDefinition extends BaseASTNode {
  type: 'ModifierDefinition'
  name: string
  parameters: null | VariableDeclaration[]
  isVirtual: boolean
  override: null | UserDefinedTypeName[]
  body: Block | null
}
export interface ModifierInvocation extends BaseASTNode {
  type: 'ModifierInvocation'
  name: string
  arguments: Expression[] | null
}
export interface FunctionDefinition extends BaseASTNode {
  type: 'FunctionDefinition'
  name: string | null
  parameters: VariableDeclaration[]
  modifiers: ModifierInvocation[]
  stateMutability: 'mut' | 'constant' | null
  visibility: 'default' | 'public' | 'private'
  returnParameters: VariableDeclaration[] | null
  body: Block | null
  override: UserDefinedTypeName[] | null
  isConstructor: boolean
  isVirtual: boolean
}

export interface CustomErrorDefinition extends BaseASTNode {
  type: 'CustomErrorDefinition'
  name: string
  parameters: VariableDeclaration[]
}

export interface TypeDefinition extends BaseASTNode {
  type: 'TypeDefinition'
  name: string
  definition: ElementaryTypeName
}

export interface EventDefinition extends BaseASTNode {
  type: 'EventDefinition'
  name: string
  parameters: VariableDeclaration[]
}
export interface EnumValue extends BaseASTNode {
  type: 'EnumValue'
  name: string
}
export interface EnumDefinition extends BaseASTNode {
  type: 'EnumDefinition'
  name: string
  members: EnumValue[]
}
export interface VariableDeclaration extends BaseASTNode {
  type: 'VariableDeclaration'
  isIndexed: boolean
  isStateVar: boolean
  typeName: TypeName | null
  name: string | null
  identifier: Identifier | null
  isDeclaredConst?: boolean
  storageLocation: string | null
  expression: Expression | null
  visibility?: 'public' | 'private' | 'internal' | 'default'
}
export interface StateVariableDeclarationVariable extends VariableDeclaration {
  override: null | UserDefinedTypeName[]
  isImmutable: boolean
}
export interface ArrayTypeName extends BaseASTNode {
  type: 'ArrayTypeName'
  baseTypeName: TypeName
  length: Expression | null
}
export interface Mapping extends BaseASTNode {
  type: 'Mapping'
  keyType: ElementaryTypeName | UserDefinedTypeName
  valueType: TypeName
}
export interface FunctionTypeName extends BaseASTNode {
  type: 'FunctionTypeName'
  parameterTypes: VariableDeclaration[]
  returnTypes: VariableDeclaration[]
  visibility: string
  stateMutability: string | null
}

export interface Block extends BaseASTNode {
  type: 'Block'
  statements: BaseASTNode[]
}
export interface ExpressionStatement extends BaseASTNode {
  type: 'ExpressionStatement'
  expression: Expression | null
}
export interface IfStatement extends BaseASTNode {
  type: 'IfStatement'
  condition: Expression
  trueBody: Statement
  falseBody: Statement | null
}

export interface WhileStatement extends BaseASTNode {
  type: 'WhileStatement'
  condition: Expression
  body: Statement
}
export interface ForStatement extends BaseASTNode {
  type: 'ForStatement'
  initExpression: SimpleStatement | null
  conditionExpression?: Expression
  loopExpression: ExpressionStatement
  body: Statement
}

export interface ReturnStatement extends BaseASTNode {
  type: 'ReturnStatement'
  expression: Expression | null
}
export interface EmitStatement extends BaseASTNode {
  type: 'EmitStatement'
  eventCall: FunctionCall
}

export interface VariableDeclarationStatement extends BaseASTNode {
  type: 'VariableDeclarationStatement'
  variables: Array<BaseASTNode | null>
  initialValue: Expression | null
}
export interface ElementaryTypeName extends BaseASTNode {
  type: 'ElementaryTypeName'
  name: string
  stateMutability: string | null
}
export interface FunctionCall extends BaseASTNode {
  type: 'FunctionCall'
  expression: Expression
  arguments: Expression[]
  names: string[]
  identifiers: Identifier[]
}

export type AssemblyLiteral = StringLiteral | BooleanLiteral | DecimalNumber | HexNumber | HexLiteral

export interface NewExpression extends BaseASTNode {
  type: 'NewExpression'
  typeName: TypeName
}

export interface NameValueExpression extends BaseASTNode {
  type: 'NameValueExpression'
  expression: Expression
  arguments: NameValueList
}

export interface NumberLiteral extends BaseASTNode {
  type: 'NumberLiteral'
  number: string
  subdenomination: null | 'ralph' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'years'
}
export interface BooleanLiteral extends BaseASTNode {
  type: 'BooleanLiteral'
  value: boolean
}
export interface HexLiteral extends BaseASTNode {
  type: 'HexLiteral'
  value: string
  parts: string[]
}
export interface StringLiteral extends BaseASTNode {
  type: 'StringLiteral'
  value: string
  parts: string[]
  isUnicode: boolean[]
}
export interface Identifier extends BaseASTNode {
  type: 'Identifier'
  name: string
}

export const binaryOpValues = [
  '+',
  '-',
  '*',
  '/',
  '**',
  '%',
  '<<',
  '>>',
  '&&',
  '||',
  ',,',
  '&',
  ',',
  '^',
  '<',
  '>',
  '<=',
  '>=',
  '==',
  '!=',
  '=',
  ',=',
  '^=',
  '&=',
  '<<=',
  '>>=',
  '+=',
  '-=',
  '*=',
  '/=',
  '%=',
  '|',
  '|=',
] as const
export type BinOp = typeof binaryOpValues[number]

export const unaryOpValues = ['-', '+', '++', '--', '~', '!'] as const
export type UnaryOp = typeof unaryOpValues[number]

export interface BinaryOperation extends BaseASTNode {
  type: 'BinaryOperation'
  left: Expression
  right: Expression
  operator: BinOp
}
export interface UnaryOperation extends BaseASTNode {
  type: 'UnaryOperation'
  operator: UnaryOp
  subExpression: Expression
  isPrefix: boolean
}
export interface Conditional extends BaseASTNode {
  type: 'Conditional'
  condition: Expression
  trueExpression: Expression
  falseExpression: Expression
}
export interface IndexAccess extends BaseASTNode {
  type: 'IndexAccess'
  base: Expression
  index: Expression
}
export interface IndexRangeAccess extends BaseASTNode {
  type: 'IndexRangeAccess'
  base: Expression
  indexStart?: Expression
  indexEnd?: Expression
}
export interface MemberAccess extends BaseASTNode {
  type: 'MemberAccess'
  expression: Expression
  memberName: string
}
export interface HexNumber extends BaseASTNode {
  type: 'HexNumber'
  value: string
}
export interface DecimalNumber extends BaseASTNode {
  type: 'DecimalNumber'
  value: string
}
export interface NameValueList extends BaseASTNode {
  type: 'NameValueList'
  names: string[]
  identifiers: Identifier[]
  arguments: Expression[]
}
export type ASTNode =
  | SourceUnit
  | ContractDefinition
  | InheritanceSpecifier
  | StateVariableDeclaration
  | UsingForDeclaration
  | StructDefinition
  | ModifierDefinition
  | ModifierInvocation
  | FunctionDefinition
  | EventDefinition
  | CustomErrorDefinition
  | EnumValue
  | EnumDefinition
  | VariableDeclaration
  | TypeName
  | UserDefinedTypeName
  | Mapping
  | FunctionTypeName
  | Block
  | Statement
  | ElementaryTypeName
  | AssemblyLiteral
  | BinaryOperation
  | Conditional
  | IndexAccess
  | IndexRangeAccess
  | AssemblyItem
  | Expression
  | NameValueList
  | TypeDefinition

export type AssemblyItem = Identifier | NumberLiteral | StringLiteral | HexNumber | HexLiteral | DecimalNumber

export type Expression =
  | IndexAccess
  | IndexRangeAccess
  | BinaryOperation
  | Conditional
  | MemberAccess
  | FunctionCall
  | UnaryOperation
  | NewExpression
  | PrimaryExpression
  | NameValueExpression
export type PrimaryExpression = BooleanLiteral | HexLiteral | StringLiteral | NumberLiteral | Identifier | TypeName
export type SimpleStatement = VariableDeclarationStatement | ExpressionStatement
export type TypeName = ElementaryTypeName | UserDefinedTypeName | Mapping | ArrayTypeName | FunctionTypeName
export type Statement =
  | IfStatement
  | WhileStatement
  | ForStatement
  | Block
  | ReturnStatement
  | EmitStatement
  | SimpleStatement
  | VariableDeclarationStatement

type ASTMap<U> = { [K in ASTNodeTypeString]: U extends { type: K } ? U : never }
type ASTTypeMap = ASTMap<ASTNode>
type ASTVisitorEnter = {
  [K in keyof ASTTypeMap]?: (ast: ASTTypeMap[K], parent?: ASTNode) => any
}
type ASTVisitorExit = {
  [K in keyof ASTTypeMap as `${K}:exit`]?: (ast: ASTTypeMap[K], parent?: ASTNode) => any
}

export type ASTVisitor = ASTVisitorEnter & ASTVisitorExit
