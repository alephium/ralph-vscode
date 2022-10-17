import { deploy, Deployments } from '@alephium/cli'
// import { Deployer, DeployFunction, Deployments, Network } from "@alephium/cli"
// import { getConfigFile, loadConfig } from '@alephium/cli/src/utils'
// import { testNodeWallet } from '@alephium/web3-test'
// import { web3, Script, Project, Contract } from '@alephium/web3'
import * as path from 'path'
import * as vscode from 'vscode'
import { defaultConfiguration } from './config'

export async function deployToDevnet(): Promise<Deployments> {
  const deployments = Deployments.empty()
  // const configuration = await loadConfig(getConfigFile())
  await deploy(defaultConfiguration, defaultConfiguration.defaultNetwork, deployments)
  await deployments.saveToFile(
    path.join(<string>defaultConfiguration.deploymentScriptDir ?? vscode.workspace.rootPath, 'project.deployments.json')
  )
  return deployments
}
