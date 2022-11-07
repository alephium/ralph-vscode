import { Token } from 'antlr4ts/Token'

export function locStart(node: Token) {
  // TODO: fix
  return node.startIndex
}

export function locEnd(node: Token) {
  // TODO: fix
  return node.stopIndex
}
