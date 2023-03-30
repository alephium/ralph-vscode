import * as vscode from 'vscode'
import { Contract } from '../../ast/contract'
import { Property } from '../../ast/property'
import cache from '../../cache/cache'
import { Func } from './func'

export const ContractBuiltInFuncs: Record<string, (c: Contract) => Func> = {
  encodeImmFields: getEncodeImmFieldsFunc,
  encodeMutFields: getEncodeMutFieldsFunc,
}

export const ContractBuiltInFuncNames = Object.keys(ContractBuiltInFuncs)

export function getEncodeFunc(fields: Property[], funcName: string, doc: string): Func {
  const fieldsNameAndType = fields.map((field) => [field.name!, field.type_!.name!])
  const fieldsSig = fieldsNameAndType.map(([name, type]) => `${name}:${type}`).join(', ')
  const signature = `fn ${funcName}(${fieldsSig}) -> (ByteVec)`
  return {
    name: funcName,
    category: 'Contract',
    signature,
    doc,
    params: fieldsNameAndType.map(([name, type]) => `${name}: ${type}`),
    paramValue: [],
    returns: '@returns a ByteVec encoding the inputs',
  }
}

export function getEncodeImmFieldsFunc(contract: Contract): Func {
  const immFields = contract.getImmutableFields()
  return getEncodeFunc(immFields, 'encodeImmFields', 'Encode contract immutable fields to bytevec')
}

export function getEncodeMutFieldsFunc(contract: Contract): Func {
  const mutFields = contract.getMutableFields()
  return getEncodeFunc(mutFields, 'encodeMutFields', 'Encode contract mutable fields to bytevec')
}

export function getContractBiltInFunction(contract: Contract): Func[] {
  return [getEncodeImmFieldsFunc(contract), getEncodeMutFieldsFunc(contract)]
}

export function tryGetContractBuiltInFunction(
  document: vscode.TextDocument,
  range: vscode.Range,
  builtInFuncName: string
): Func | undefined {
  if (!builtInFuncName.endsWith('!')) {
    return undefined
  }
  const funcName = builtInFuncName.slice(0, -1)
  if (!ContractBuiltInFuncNames.includes(funcName)) {
    return undefined
  }
  const regex = new RegExp(`[A-Z][a-zA-Z0-9_]*\\.${funcName}`)
  const fullyQualifiedRange = document.getWordRangeAtPosition(range.start, regex)
  const fullyQualifiedName = document.getText(fullyQualifiedRange)
  const typeId = fullyQualifiedName.split('.')[0]
  const contractDef = cache.get(document.uri, typeId)
  if (contractDef === undefined || !(contractDef instanceof Contract)) {
    return undefined
  }
  return ContractBuiltInFuncs[`${funcName}`](contractDef)
}
