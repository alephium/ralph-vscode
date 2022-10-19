import { Hover, MarkdownString } from 'vscode'

export class Item {
  name: string

  detail: string

  kind: string

  constructor(name: string, detail: string, kind: string) {
    this.name = name
    this.detail = detail
    this.kind = kind
  }

  hover(): Hover {
    const value = new MarkdownString()
    value.appendMarkdown(`
    builtIn global ${this.kind}: ${this.name}
    ${this.detail}
    `)
    return new Hover(value)
  }
}
