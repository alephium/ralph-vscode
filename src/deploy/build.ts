import { web3, Project } from '@alephium/web3'
import * as vscode from 'vscode'
import { defaultConfiguration as config } from './config'

export async function build() {
  const network = config.networks[config.defaultNetwork]
  web3.setCurrentNodeProvider(network.nodeUrl)
  process.chdir(vscode.workspace.rootPath!)
  // Compile the contracts of the project if they are not compiled
  await Project.build({}, vscode.workspace.rootPath!, config.sourceDir!, config.artifactDir)
}
