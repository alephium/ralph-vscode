import * as vscode from 'vscode'
import { Compiler } from '../compiler/compiler'
import { deployToDevnet } from '../deploy/deploy'

interface Command {
  command: string
  title: string
  callback: (...args: any[]) => any
}

export const commands: Command[] = [
  {
    command: 'ralph.compile',
    title: 'Ralph compile',
    callback: () => {
      if (vscode.window.activeTextEditor) {
        new Compiler().compile(vscode.window.activeTextEditor)
      }
    },
  },
  {
    command: 'ralph.deploy',
    title: 'Ralph deploy',
    callback: () => {
      console.log('Begin deploy')
      deployToDevnet()
        .catch((err) => {
          console.log(err)
          vscode.window.showErrorMessage(err.message)
        })
        .then((value) => {
          vscode.window.showInformationMessage('Contracts deployed!')
        })
      console.log('end deploy')
    },
  },
]
