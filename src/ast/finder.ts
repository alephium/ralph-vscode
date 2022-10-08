import { Word } from './word'
import { Identifier } from './identifier'

export interface Finder {
  findOne?(condition: Word): Identifier | undefined

  findAll?(condition: Word): Identifier[] | undefined

  find?(condition: Word): Identifier[] | undefined

  def?(condition: Word): Identifier | undefined

  ref?(condition: Word): Identifier[] | undefined

  container?(identifier: Identifier): Identifier | undefined
}
