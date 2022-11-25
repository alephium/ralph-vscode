import vscode from 'vscode'

export interface Global {
  contractsDir?: string
}

export const global: Global = vscode.workspace.getConfiguration().get('ralph.set.global') as Global
