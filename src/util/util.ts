import * as fs from 'fs'
import * as vscode from 'vscode'
import * as request from 'request'
import path from 'path'
import { Logger } from '../logger/logger'

const requestProgress = require('request-progress')

export function download(srcUrl: string, destPath: fs.PathLike, progress: (state: any) => void): Promise<void> {
  return new Promise((resolve, reject) => {
    requestProgress(request.get(srcUrl))
      .on(
        'progress',
        (state: {
          percent: number
          speed: number
          size: { total: number; transferred: number }
          time: { elapsed: number; remaining: number }
        }) => progress(state)
      )
      .on('complete', () => resolve())
      .on('error', (err: any) => reject(err))
      .pipe(fs.createWriteStream(destPath))
  })
}

export function getWorkspaceFolder(): string | undefined {
  if (vscode.workspace.workspaceFolders === undefined) {
    vscode.window.showErrorMessage('Working folder not found, open a folder and try again')
    return undefined
  }
  return vscode.workspace.workspaceFolders[0].uri.path
}

export function getConfigString(key: string, defaultValue: string): string {
  return vscode.workspace.getConfiguration().get<string>(key) ?? defaultValue
}

export function getCompileCommand(): string {
  const cmd = getConfigString('ralph.compile.command', 'npx --yes @alephium/cli compile -n devnet')
  const version = getConfigString('ralph.compile.cliVersion', 'latest')
  return updateCompileCommandVersion(cmd, version)
}

export function updateCompileCommandVersion(initialCmd: string, newVersion: string): string {
  return initialCmd.replace(/@alephium\/cli[^\s]*/, `@alephium/cli@${newVersion}`)
}

export function getCLI(): string | undefined {
  const workspaceFolder = getWorkspaceFolder()
  const cli = path.join(workspaceFolder ?? '', 'node_modules/@alephium/cli/cli.js')
  if (workspaceFolder && fs.existsSync(cli)) {
    return cli
  }
  return undefined
}

export async function fsExists(path: fs.PathLike): Promise<boolean> {
  try {
    await fs.promises.access(path)
    return true
  } catch {
    return false
  }
}

export function isOSWindows(): boolean {
  return process.platform === 'win32'
}

export function isOSUnixoid(): boolean {
  const { platform } = process
  return platform === 'linux' || platform === 'darwin' || platform === 'freebsd' || platform === 'openbsd'
}

export function correctBinname(binname: string): string {
  return binname + (process.platform === 'win32' ? '.exe' : '')
}

export function correctScriptName(binname: string): string {
  return binname + (process.platform === 'win32' ? '.bat' : '')
}

export interface Status {
  // Updates the message.
  update(msg: string): void

  dispose(): void
}

// Encapsulates a status bar item.
export class StatusBarEntry implements Status {
  private barItem: vscode.StatusBarItem

  private prefix?: string

  private disposed = false

  constructor(context: vscode.ExtensionContext, prefix?: string) {
    this.prefix = prefix
    this.barItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left)
    context.subscriptions.push(this.barItem)
  }

  show(): void {
    this.barItem.show()
  }

  update(msg: string): void {
    this.barItem.text = `${this.prefix} ${msg}`
  }

  dispose(): void {
    if (!this.disposed) {
      this.disposed = true
      this.barItem.dispose()
    }
  }
}
