import * as vscode from 'vscode'
import { Downloader } from '../downloader/downloader'
import { Compiler } from '../compiler/compiler'

interface Command {
  command: string
  title: string
  callback: (...args: any[]) => any
}

const commands: Command[] = [
  {
    command: 'ralph.downloader',
    title: 'Ralph: downloader',
    callback: () => {
      const download = new Downloader()
      download.showQuickPick()
    },
  },
  {
    command: 'ralph.compiler',
    title: 'Ralph: compiler',
    callback: () => {
      if (vscode.window.activeTextEditor) {
        new Compiler().compiler(vscode.window.activeTextEditor)
      }
    },
  },
]

export default commands
