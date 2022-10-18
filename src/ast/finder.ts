import { Word } from './word'
// eslint-disable-next-line import/no-cycle
import { Identifier } from './identifier'
import { Position } from './position'

export interface Finder {
  findOne?(condition: Word): Identifier | undefined

  findAll?(condition: Word): Identifier[] | undefined

  find?(condition: Word): Identifier[] | undefined

  defs?(): Identifier[] | undefined

  def?(word: Word): Identifier | undefined

  ref?(): Identifier[] | undefined

  container?(position: Position): Identifier | undefined

  owner?(word: Word): Identifier | undefined
}
