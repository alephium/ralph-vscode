import { Network } from '@alephium/cli'
import { web3, Project } from '@alephium/web3'
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
