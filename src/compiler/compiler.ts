import * as vscode from 'vscode'
import * as fs from 'fs'
import { exec } from 'child_process'
import path from 'path'
import * as logger from '../logger/logger'
import { Logger } from '../logger/logger'
import { getCompileCommand, getWorkspaceFolder } from '../util/util'

export class Compiler {
  cmd: string | undefined

  log: logger.Logger

  constructor() {
    this.log = new logger.Logger('Compiler')
    this.cmd = getCompileCommand()
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

    Logger.show()
    this.log.info(`CMD: ${this.cmd}`)
    vscode.window.setStatusBarMessage(`Execute command: ${this.cmd}`)

    if (this.cmd != null) {
      exec(this.cmd, { cwd: `${workspace}` }, (_error: any, stdout: string, stderr: string) => {
        if (stderr) {
          this.log.info(stderr)
          vscode.window.showErrorMessage(stderr)
        } else if (stdout) {
          this.log.info(stdout)
        }
      })
    }
  }
}
