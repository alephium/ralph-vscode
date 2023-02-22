import * as vscode from 'vscode'
import { exec } from 'child_process'
import { Logger } from '../logger/logger'
import { getCLI, getWorkspaceFolder } from '../util/util'

const logger = new Logger('Deployer')

export async function deployToDevnet(): Promise<void> {
  const workspaceFolder = getWorkspaceFolder()
  if (workspaceFolder === undefined) {
    return
  }

  const cli = getCLI()
  if (!cli) {
    vscode.window.showErrorMessage('Please add `@alephium/cli` as dev dependency\n\nnpm i D @alephium/cli')
    return
  }

  process.chdir(workspaceFolder)
  const cmd = `${cli} deploy -n devnet`
  exec(cmd, { cwd: `${workspaceFolder}` }, (_error: any, stdout: string, stderr: string) => {
    if (stderr) {
      logger.info(stderr)
      vscode.window.showErrorMessage(stderr)
    } else if (stdout) {
      logger.info(stdout)
    }
  })
}
