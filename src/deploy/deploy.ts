import * as vscode from 'vscode'
import { exec } from 'child_process'
import { Logger } from '../logger/logger'
import { getWorkspaceFolder } from '../util/util'

const logger = new Logger('Deployer')

export async function deployToDevnet(): Promise<void> {
  const workspaceFolder = getWorkspaceFolder()
  if (workspaceFolder === undefined) {
    return
  }

  const cmd = `npx --yes @alephium/cli@latest deploy -n devnet`
  exec(cmd, { cwd: `${workspaceFolder}` }, (_error: any, stdout: string, stderr: string) => {
    if (stderr) {
      logger.info(stderr)
      vscode.window.showErrorMessage(stderr)
    } else if (stdout) {
      logger.info(stdout)
    }
  })
}
