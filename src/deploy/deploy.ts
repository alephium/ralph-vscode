import { deploy, Deployments } from '@alephium/cli'
import * as path from 'path'
import * as vscode from 'vscode'
import { defaultConfiguration as config } from './config'

export async function deployToDevnet(): Promise<Deployments> {
  process.chdir(vscode.workspace.rootPath!)
  const deployments = Deployments.empty()
  // const configuration = await loadConfig(getConfigFile())
  await deploy(config, config.defaultNetwork, deployments)
  await deployments.saveToFile(path.join(<string>config.deploymentScriptDir ?? vscode.workspace.rootPath, 'deployments.project.json'))
  return deployments
}
