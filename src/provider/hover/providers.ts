import * as vscode from 'vscode'
import { FunctionHoverProvider } from './builtIn/function'
import { KeywordHoverProvider } from './builtIn/keyword'
import { BuiltInPrimitivesHoverProvider } from './builtIn/primitives'
import { HoverProvider } from './hoverProvider'

export function Providers(): vscode.HoverProvider[] {
  return [new FunctionHoverProvider(), new KeywordHoverProvider(), new BuiltInPrimitivesHoverProvider(), new HoverProvider()]
}
