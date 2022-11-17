import { Uri } from 'vscode'
import { Base } from './base'
import { Position } from './position'
import { Identifier } from './identifier'
import { Interface } from './interface'
import { Contract } from './contract'

export class Root extends Base {
  constructor() {
    super()
    this.name = 'Root'
  }

  contains(position: Position): boolean {
    return true
  }

  merge(uri: Uri, members: Identifier[]) {
    this.remove(uri)
    members.forEach((value) => this.add(value))
  }

  remove(uri: Uri) {
    Array.from(this.members.values()).forEach((value) => {
      if (value.getUri!() === uri) {
        this.members.delete(value.name!)
      }
    })
  }

  add(member: Identifier) {
    if (this.members.has(member.name!)) {
      const has = this.members.get(member.name!)
      if (member instanceof Interface && has instanceof Interface) {
        member.implementer = has.implementer
      }

      if (member instanceof Contract && has instanceof Contract) {
        member.subclass = has.subclass
      }
    }
    this.members.set(member.name!, member)
  }

  get(name: string) {
    return this.members.get(name)
  }
}
