import { Word } from './word'
// eslint-disable-next-line import/no-cycle
import { Identifier } from './identifier'
import { Position } from './position'

export interface Finder {
  findAll?(condition: Word): Identifier[]

  defs?(): Identifier[]

  def?(word: Word): Identifier | undefined

  ref?(): Identifier[]

  container?(position: Position): Identifier | undefined

  owner?(word: Word): Identifier | undefined
}
