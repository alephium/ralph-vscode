import * as vscode from 'vscode'
import { Contract } from '../../ast/contract'
import { Property } from '../../ast/property'
import cache from '../../cache/cache'
import { Func } from './func'

export const ContractBuiltInFuncs: Record<string, (c: Contract) => Func> = {
  encodeImmFields: getEncodeImmFieldsFunc,
  encodeMutFields: getEncodeMutFieldsFunc,
  encodeFields: getEncodeFieldsFunc,
}

export const ContractBuiltInFuncNames = Object.keys(ContractBuiltInFuncs)

function getEncodeFunc(fields: Property[], funcName: string, returnTypes: string, doc: string, returns: string): Func {
  const fieldsNameAndType = fields.map((field) => [field.name!, field.type_!.name!])
  const fieldsSig = fieldsNameAndType.map(([name, type]) => `${name}:${type}`).join(', ')
  const signature = `fn ${funcName}(${fieldsSig}) -> ${returnTypes}`
  return {
    name: funcName,
    category: 'Contract',
    signature,
    doc,
    params: fieldsNameAndType.map(([name, type]) => `${name}: ${type}`),
    paramNames: fieldsNameAndType.map(([name, _]) => name),
    returns,
  }
}

export function getEncodeImmFieldsFunc(contract: Contract): Func {
  const immFields = contract.getImmutableFields()
  return getEncodeFunc(
    immFields,
    'encodeImmFields',
    'ByteVec',
    'Encode contract immutable fields to bytevec',
    '@returns a ByteVec encoding the inputs'
  )
}

export function getEncodeMutFieldsFunc(contract: Contract): Func {
  const mutFields = contract.getMutableFields()
  return getEncodeFunc(
    mutFields,
    'encodeMutFields',
    'ByteVec',
    'Encode contract mutable fields to bytevec',
    '@returns a ByteVec encoding the inputs'
  )
}

export function getEncodeFieldsFunc(contract: Contract): Func {
  const fields = contract.getFields()
  return getEncodeFunc(
    fields,
    'encodeFields',
    '(ByteVec, ByteVec)',
    'Encode contract fields',
    '@returns two ByteVec values, where the first is the encoded immutable fields and the second is the encoded mutable fields'
  )
}

export function getContractBiltInFunction(contract: Contract): Func[] {
  return [getEncodeImmFieldsFunc(contract), getEncodeMutFieldsFunc(contract), getEncodeFieldsFunc(contract)]
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
