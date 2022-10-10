import { Word } from './word'
import { Identifier } from './identifier'
import { Position } from './position'

export interface Finder {
  findOne?(condition: Word): Identifier | undefined

  findAll?(condition: Word): Identifier[] | undefined

  find?(condition: Word): Identifier[] | undefined

  def?(condition: Word): Identifier[] | undefined

  ref?(condition: Word): Identifier[] | undefined

  container?(position?: Position): Identifier | undefined
}
