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
    members.forEach((member) => {
      if (this.members.has(member.name!)) {
        const has = this.members.get(member.name!)
        if (member instanceof Interface && has instanceof Interface) {
          member.implementer = has.implementer
        }

        if (member instanceof Contract && has instanceof Contract) {
          member.subclass = has.subclass
          member.interfaces = has.interfaces
          member.parentClass = has.parentClass
        }
      }
    })
    this.remove(uri)
    members.forEach((value) => this.add(value))
  }

  remove(uri: Uri) {
    Array.from(this.members.values()).forEach((value) => {
      if (value.getUri!() === uri) {
        this.members = this.members.delete(value.name!)
      }
    })
  }

  get(name: string): Identifier | undefined {
    return this.members.get(name)
  }

  analyse() {
    this.members
      .valueSeq()
      .toArray()
      .forEach((identifier) => {
        if (identifier instanceof Contract) {
          identifier.subclass.forEach((value, key) => {
            const member = this.members.get(key)
            if (member && member instanceof Contract) {
              identifier.subclass.set(key, member)
              member.members = member.members.merge(identifier.members)
            } else {
              identifier.subclass.delete(key)
            }
          })

          identifier.interfaces.forEach((value, key) => {
            const member = this.members.get(key)
            if (member && member instanceof Interface) {
              identifier.members = identifier.members.merge(member.members)
            } else {
              identifier.members = identifier.members.delete(key)
            }
          })

          identifier.parentClass.forEach((value, key) => {
            const member = this.members.get(key)
            if (member && member instanceof Contract) {
              identifier.members = identifier.members.merge(member.members)
            } else {
              identifier.members = identifier.members.delete(key)
            }
          })
        }

        if (identifier instanceof Interface) {
          identifier.implementer.forEach((value, key) => {
            const member = this.members.get(key)
            if (member && member instanceof Base) {
              identifier.implementer.set(key, member)
              member.members = member.members.merge(identifier.members)
            } else {
              identifier.implementer.delete(key)
            }
          })
        }
      })
  }
}
