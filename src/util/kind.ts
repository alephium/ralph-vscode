import { SymbolKind } from 'vscode'
import { RalphParser } from '../parser/RalphParser'

const mapKinds = new Map([
  [RalphParser.FN, SymbolKind.Function],
  [RalphParser.CONTRACT, SymbolKind.Class],
  [RalphParser.TXSCRIPT, SymbolKind.Class],
  [RalphParser.INTERFACE, SymbolKind.Interface],
  [RalphParser.ASSETSCRIPT, SymbolKind.Class],
  [RalphParser.ENUM, SymbolKind.Enum],
  [RalphParser.BOOL, SymbolKind.Boolean],
  [RalphParser.I256, SymbolKind.Number],
  [RalphParser.U256, SymbolKind.Number],
  [RalphParser.BYTE, SymbolKind.Array],
  [RalphParser.BYTEVEC, SymbolKind.Array],
  [RalphParser.ADDRESS, SymbolKind.Constant],
  [RalphParser.LET, SymbolKind.Variable],
  [RalphParser.CONST, SymbolKind.Constant],
])

export default function MapKinds() {
  return mapKinds
}

// File = 0,
// Module = 1,
// Namespace = 2,
// Package = 3,
// Class = 4,
// Method = 5,
// Property = 6,
// Field = 7,
// Constructor = 8,
// Enum = 9,
// Interface = 10,
// Function = 11,
// Variable = 12,
// Constant = 13,
// String = 14,
// Number = 15,
// Boolean = 16,
// Array = 17,
// Object = 18,
// Key = 19,
// Null = 20,
// EnumMember = 21,
// Struct = 22,
// Event = 23,
// Operator = 24,
// TypeParameter = 25
