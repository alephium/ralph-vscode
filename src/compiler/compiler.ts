import * as vscode from 'vscode'
import * as fs from 'fs'
import { exec } from 'child_process'
import path from 'path'
import { cwd } from 'process'
import * as logger from '../logger/logger'
import { Logger } from '../logger/logger'
import { getCLI, getCompileCommand, getWorkspaceFolder } from '../util/util'

export class Compiler {
  log: logger.Logger

  constructor() {
    this.log = new logger.Logger('Compiler')
  }

  async compile(editor: vscode.TextEditor) {
    const workspace = getWorkspaceFolder()
    if (workspace === undefined) {
      return
    }

    if (!fs.existsSync(path.join(workspace, 'alephium.config.ts'))) {
      vscode.window.showErrorMessage(
        'Unrecognized Ralph project, please create one following: https://docs.alephium.org/dapps/getting-started'
      )
      return
    }

    if (editor.document.isDirty) {
      editor.document.save()
    }

    const cli = getCLI()
    if (!cli) {
      vscode.window.showErrorMessage('Please add `@alephium/cli` as dev dependency\n\nnpm i D @alephium/cli')
      return
    }

    const cmd = `node ${cli} compile -n devnet`
    Logger.show()
    this.log.info(`CMD: ${cmd}`)
    vscode.window.setStatusBarMessage(`Execute command: ${cmd}`)

    this.log.info(`cwd: ${workspace}`)
    exec(cmd, { cwd: `${workspace}` }, (_error: any, stdout: string, stderr: string) => {
      if (stderr) {
        this.log.info(stderr)
        vscode.window.showErrorMessage(stderr)
      } else if (stdout) {
        this.log.info(stdout)
      }
    })
  }
}
