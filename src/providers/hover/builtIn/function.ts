/* eslint-disable @typescript-eslint/no-non-null-assertion */
// eslint-disable-next-line import/no-unresolved, max-classes-per-file
import * as vscode from 'vscode'
import { Item } from './item'

export class FunctionHoverProvider implements vscode.HoverProvider {
  builtItems!: Map<string, Item>

  items: Array<Item>

  constructor() {
    this.builtItems = new Map()
    this.items = [
      {
        name: 'assert!',
        detail: 'assert!(input: Bool) -> () \n Will halt execution if false',
        kind: 'function',
      },
      {
        name: 'isAssetAddress!',
        detail: 'isAssetAddress!(input: Address) -> (Bool)',
        kind: 'function',
      },
      {
        name: 'isContractAddress!',
        detail: 'isContractAddress!(input: Address) -> (Bool)',
        kind: 'function',
      },
      {
        name: 'blake2b!',
        detail: 'blake2b!(input: ByteVec) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'keccak256!',
        detail: 'keccak256!(input: ByteVec) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'sha256!',
        detail: 'sha256!(input: ByteVec) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'sha3!',
        detail: 'sha3!(input: ByteVec) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'verifyTxSignature!',
        detail: 'verifyTxSignature!(signature: ByteVec) -> ()',
        kind: 'function',
      },
      {
        name: 'verifySecP256K1!',
        detail: 'verifySecP256K1!(input: ByteVec, publicKey: ByteVec, signature: ByteVec) -> ()',
        kind: 'function',
      },
      {
        name: 'verifyED25519!',
        detail: 'verifyED25519!(input: ByteVec, publicKey: ByteVec, signature: ByteVec) -> ()',
        kind: 'function',
      },
      {
        name: 'verifyAbsoluteLocktime!',
        detail: 'verifyAbsoluteLocktime!(unixTimestampMillis: U256) -> ()',
        kind: 'function',
      },
      {
        name: 'verifyRelativeLocktime!',
        detail: 'verifyRelativeLocktime!(txHash: U256, timestampMillisRelative: U256) -> ()',
        kind: 'function',
      },
      {
        name: 'ethEcRecover!',
        detail: 'ethEcRecover!(messageHash: ByteVec, sigBytes: ByteVec) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'networkId!',
        detail: 'networkId!() -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'blockTimeStamp!',
        detail: 'blockTimeStamp!() -> (U256)',
        kind: 'function',
      },
      {
        name: 'blockTarget!',
        detail: 'blockTarget!() -> (U256)',
        kind: 'function',
      },
      {
        name: 'txId!',
        detail: 'txId!() -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'txInputAddress!',
        detail:
          'txInputAddress!(utxoIndex: U256) -> (Address)  \n Returns the address of the utxo at an index (since multiple utxo can exist in a transaction)',
        kind: 'function',
      },
      {
        name: 'uniqueTxInputAddress!',
        detail: 'uniqueTxInputAddress!() -> (Address)',
        kind: 'function',
      },
      {
        name: 'toI256!',
        detail: 'toI256!(input: U256) -> (I256)',
        kind: 'function',
      },
      {
        name: 'toU256!',
        detail: 'toU256!(input: I256) -> (U256)',
        kind: 'function',
      },
      {
        name: 'byteVecSlice!',
        detail: 'byteVecSlice!(input: ByteVec, start: U256, end: U256) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'size!',
        detail: 'size!(input: ByteVec) -> (U256)',
        kind: 'function',
      },
      {
        name: 'zeros!',
        detail: 'zeros!(amountOfZeros: U256) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'encodeToByteVec!',
        detail: 'encodeToByteVec!(fields...) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'toByteVec!',
        detail: 'toByteVec!(input: (Bool|I256|U256|Address)) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'u256To1Byte!',
        detail: 'u256To1Byte!(a: U256) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'u256To2Byte!',
        detail: 'u256To2Byte!(a: U256) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'u256To4Byte!',
        detail: ' u256To4Byte!(a: U256) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'u256To8Byte!',
        detail: 'u256To8Byte!(a: U256) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'u256To16Byte!',
        detail: 'u256To16Byte!(a: U256) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'u256To32Byte!',
        detail: 'u256To32Byte!(a: U256) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'u256From1Byte!',
        detail: 'u256From1Byte!(a: U256) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'u256From2Byte!',
        detail: 'u256From2Byte!(a: U256) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'u256From4Byte!',
        detail: 'u256From4Byte!(a: U256) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'u256From8Byte!',
        detail: 'u256From8Byte!(a: U256) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'u256From16Byte!',
        detail: 'u256From16Byte!(a: U256) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'u256From32Byte!',
        detail: 'u256From32Byte!(a: U256) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'isPaying!',
        detail: 'isPaying!(address: Address) -> (Bool)',
        kind: 'function',
      },
      {
        name: 'isCalledFromTxScript!',
        detail: 'isCalledFromTxScript!() -> (Bool)',
        kind: 'function',
      },
      {
        name: 'approveAlph!',
        detail: 'approveAlph!(forAddress: Address, amount: U256)) -> ()',
        kind: 'function',
      },
      {
        name: 'approveToken!',
        detail: 'approveToken!(forAddress: Address, tokenId: ByteVec, amount:U256)) -> ()',
        kind: 'function',
      },
      {
        name: 'alphRemaining!',
        detail: 'alphRemaining!(address: Address) -> (U256)',
        kind: 'function',
      },
      {
        name: 'tokenRemaining!',
        detail: 'tokenRemaining!(address: Address, tokenId: ByteVec) -> (U256)',
        kind: 'function',
      },
      {
        name: 'transferAlph!',
        detail: 'transferAlph!(from: Address, to: Address, amount: U256) -> ()',
        kind: 'function',
      },
      {
        name: 'transferAlphFromSelf!',
        detail: 'transferAlphFromSelf!(toBeneficiary: Address, amount: U256) -> ()',
        kind: 'function',
      },
      {
        name: 'transferAlphToSelf!',
        detail: `transferAlphToSelf!(fromBeneficiary: Address, amount: U256) -> () \n This pair of transferAlph functions are useful to avoid accidentally sending or receiving money to another address.`,
        kind: 'function',
      },
      {
        name: 'transferToken!',
        detail: 'transferToken!(from: Address, to: Address, tokenId: ByteVec, amount: U256) -> ()',
        kind: 'function',
      },
      {
        name: 'ransferTokenFromSelf!',
        detail: 'ransferTokenFromSelf!(toBeneficiary: Address, tokenId: ByteVec, amount: U256) -> ()',
        kind: 'function',
      },
      {
        name: 'transferTokenToSelf!',
        detail:
          'transferTokenToSelf!(fromBeneficiary: Address, tokenId: ByteVec, amount: U256) -> () \n Same usage as the other pair of transferAlph functions.',
        kind: 'function',
      },
      {
        name: 'createContract!',
        detail: 'createContract!(codeCompiled: ByteVec, state: ByteVec) -> (ByteVec)',
      },
      {
        name: 'createContractWithToken!',
        detail:
          'createContractWithToken!(codeCompiled: ByteVec, state: ByteVec, tokenAmount: U256) -> (ByteVec) \n state is the state as its passed to the build-contract endpoint.',
        kind: 'function',
      },
      {
        name: 'copyCreateContract!',
        detail: 'copyCreateContract!(contractId: ByteVec, state: ByteVec) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'copyCreateContractWithToken!',
        detail: 'copyCreateContractWithToken!(contractId: ByteVec, state: ByteVec, tokenAmount: U256) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'createSubContract!',
        detail: 'createSubContract!(path: ByteVec, byteCode: ByteVec, state: ByteVec) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'createSubContractWithToken!',
        detail: 'createSubContractWithToken!(path: ByteVec, byteCode: ByteVec, state: ByteVec, amount: U256) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'copyCreateSubContract!',
        detail: 'copyCreateSubContract!(path: ByteVec, byteCode: ByteVec, state: ByteVec) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'copyCreateSubContractWithToken!',
        detail: 'copyCreateSubContractWithToken!(path: ByteVec, byteCode: ByteVec, state: ByteVec, amount: U256) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'destroySelf!',
        detail: 'destroySelf!(address: Address) -> ()',
        kind: 'function',
      },
      {
        name: 'migrate!',
        detail: 'migrate!(codeCompiled: ByteVec) \n Updates the contract in-place',
        kind: 'function',
      },
      {
        name: 'migrateWithState!',
        detail: 'migrateWithState!(codeCompiled: ByteVec, state: ByteVec)',
        kind: 'function',
      },
      {
        name: 'selfAddress!',
        detail: 'selfAddress!() -> (Address)',
        kind: 'function',
      },
      {
        name: 'selfContractId!',
        detail: 'selfContractId!() -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'selfTokenId!',
        detail: 'selfTokenId!() -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'callerContractId!',
        detail: 'callerContractId!() -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'callerAddress!',
        detail: 'callerAddress!() -> (Address) \n This is the last caller, in case of chained calls across contracts, scripts and users.',
        kind: 'function',
      },
      {
        name: 'callerInitialStateHash!',
        detail: 'callerInitialStateHash!() -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'callerCodeHash!',
        detail: 'callerCodeHash!() -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'contractInitialStateHash!',
        detail: 'contractInitialStateHash!(contractId: ByteVec) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'contractCodeHash!',
        detail: 'contractCodeHash!() -> (contractId: ByteVec) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'dustAmount!',
        detail: 'dustAmount!() -> (U256)',
        kind: 'function',
      },
      {
        name: 'nullAddress!',
        detail: 'nullAddress!() -> (Address)',
        kind: 'function',
      },
      {
        name: 'contractIdToAddress!',
        detail: 'contractIdToAddress!(contractId: ByteVec) -> (Address)',
        kind: 'function',
      },
      {
        name: 'panic!',
        detail: 'panic!([input: U256])',
        kind: 'function',
      },
      {
        name: 'lockApprovedAssets!',
        detail: 'lockApprovedAssets!(address: Address, tokenId: ByteVec, amount: U256) -> ()',
        kind: 'function',
      },
      {
        name: 'burnToken!',
        detail: 'burnToken!() -> (Address, ByteVec, U256)',
        kind: 'function',
      },
      {
        name: 'migrateWithState!',
        detail: 'migrateWithState!(codeCompiled: ByteVec, state: ByteVec) \n Deprecated',
        kind: 'function',
      },
      {
        name: 'migrateWithFields!',
        detail: 'migrateWithFields!(codeCompiled: ByteVec, field: ByteVec)',
        kind: 'function',
      },
      {
        name: 'subContractId!',
        detail: 'subContractId!(id: ByteVec) -> (ByteVec)',
        kind: 'function',
      },
      {
        name: 'subContractIdOf!',
        detail: 'subContractIdOf!(contract: Contract, id: ByteVec) -> (ByteVec)',
        kind: 'function',
      },
    ]

    this.items.forEach((item) => this.builtItems.set(item.name, item))
  }

  provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    const range = document.getWordRangeAtPosition(position)
    const globalFun = document.getText(range?.with(range.start, new vscode.Position(range.end.line, range.end.character + 1)))
    const item = this.builtItems.get(globalFun)!
    return new vscode.Hover([`(builtIn global ${item.kind}) \n ${item.name}`, item.detail])
  }
}
