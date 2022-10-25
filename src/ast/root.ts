import { Base } from './base'
import { Position } from './position'

export class Root extends Base {
  constructor() {
    super()
    this.name = 'Root'
  }

  contains(position: Position): boolean {
    return true
  }

  get(name: string) {
    return this.members.get(name)
  }
}
