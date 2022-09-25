/* eslint-disable import/no-unresolved */
import * as vscode from 'vscode'

import { FunctionHoverProvider } from './builtIn/function'
import { TokenHoverProvider } from './builtIn/token'
import { BuiltInTypeHoverProvider } from './builtIn/type'
import { HoverProvider } from './hoverProvider'

export function Providers(): vscode.HoverProvider[] {
  return [new FunctionHoverProvider(), new TokenHoverProvider(), new BuiltInTypeHoverProvider(), new HoverProvider()]
}
