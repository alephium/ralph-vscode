import * as vscode from 'vscode'
import { Downloader } from '../downloader/downloader'
import { Compiler } from '../compiler/compiler'
import { deployToDevnet } from '../deploy/deploy'
import { build } from '../deploy/build'

interface Command {
  command: string
  title: string
  callback: (...args: any[]) => any
}

const commands: Command[] = [
  {
    command: 'ralph.download',
    title: 'Ralph: downloader',
    callback: () => {
      const download = new Downloader()
      download.showQuickPick()
    },
  },
  {
    command: 'ralph.compile',
    title: 'Ralph: compiler',
    callback: () => {
      if (vscode.window.activeTextEditor) {
        new Compiler().compiler(vscode.window.activeTextEditor)
      }
    },
  },
  {
    command: 'ralph.online.compile',
    title: 'Ralph Online Compile',
    callback: () => {
      console.log('begin remote Compile')
      build().catch((err) => console.log(err))
      console.log('end remote Compile')
    },
  },
  {
    command: 'ralph.online.deploy',
    title: 'Ralph Online Deploy',
    callback: () => {
      console.log('begin deploy')
      deployToDevnet().catch((err) => console.log(err))
      console.log('end deploy')
    },
  },
]

export default commands
