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
    title: 'ralph: downloader',
    callback: () => {
      const download = new Downloader()
      download.showQuickPick()
    },
  },
  {
    command: 'ralph.compiler',
    title: 'ralph: compiler',
    callback: () => {
      if (vscode.window.activeTextEditor) {
        new Compiler().compiler(vscode.window.activeTextEditor)
      }
    },
  },
]

export default commands
