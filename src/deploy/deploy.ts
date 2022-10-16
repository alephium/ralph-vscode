import { Network, deploy, Deployments } from '@alephium/cli'
// import { Deployer, DeployFunction, Deployments, Network } from "@alephium/cli"
// import { getConfigFile, loadConfig } from '@alephium/cli/src/utils'
// import { testNodeWallet } from '@alephium/web3-test'
import { web3, Script, Project, Contract } from '@alephium/web3'
import * as path from 'path'
import * as vscode from 'vscode'
import { defaultConfiguration, Settings } from './config'

export async function build() {
  let network: Network<Settings>
  switch (defaultConfiguration.defaultNetwork) {
    case 'devnet':
      network = defaultConfiguration.networks.devnet
      break
    case 'testnet':
      network = defaultConfiguration.networks.testnet
      break
    case 'mainnet':
      network = defaultConfiguration.networks.mainnet
      break
    default:
      network = defaultConfiguration.networks.devnet
  }
  web3.setCurrentNodeProvider(network.nodeUrl)
  // Compile the contracts of the project if they are not compiled
  await Project.build(
    {},
    path.join(vscode.workspace.rootPath!, defaultConfiguration.sourceDir!),
    path.join(vscode.workspace.rootPath!, defaultConfiguration.artifactDir!)
  )
}

export async function deployToDevnet(): Promise<Deployments> {
  const deployments = Deployments.empty()
  // const configuration = await loadConfig(getConfigFile())
  await deploy(defaultConfiguration, defaultConfiguration.defaultNetwork, deployments)
  await deployments.saveToFile(
    path.join(<string>defaultConfiguration.deploymentScriptDir ?? vscode.workspace.rootPath, 'project.deployments.json')
  )
  return deployments
}
