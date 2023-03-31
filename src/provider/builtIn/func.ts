// https://raw.githubusercontent.com/alephium/alephium/master/protocol/src/main/resources/ralph-built-in-functions.json
export interface Func {
  name: string

  category: string

  signature: string

  doc: string

  params: string[]

  paramNames: string[]

  returns: string
}
