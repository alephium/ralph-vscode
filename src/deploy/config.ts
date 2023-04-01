import { Configuration } from '@alephium/cli'
import { Number256 } from '@alephium/web3'
import * as vscode from 'vscode'

// Settings are usually for configuring
export type Settings = {
  issueTokenAmount: Number256
}

const defaultSettings: Settings = { issueTokenAmount: 100n }

const vscodeConfig = vscode.workspace.getConfiguration().get('ralph.online.configuration') as Configuration<Settings>

const configuration: Configuration<Settings> = {
  defaultNetwork: 'devnet',
  networks: {
    devnet: {
      nodeUrl: 'http://localhost:22973',
      privateKeys: ['a642942e67258589cd2b1822c631506632db5a12aabcf413604e785300d762a5'],
      settings: defaultSettings,
    },
    testnet: {
      nodeUrl: process.env.NODE_URL as string,
      privateKeys: process.env.PRIVATE_KEYS === undefined ? [] : process.env.PRIVATE_KEYS.split(','),
      settings: defaultSettings,
    },
    mainnet: {
      nodeUrl: process.env.NODE_URL as string,
      privateKeys: process.env.PRIVATE_KEYS === undefined ? [] : process.env.PRIVATE_KEYS.split(','),
      settings: defaultSettings,
    },
  },
}

const defaultConfiguration = { ...configuration, ...vscodeConfig }

export { defaultConfiguration }
