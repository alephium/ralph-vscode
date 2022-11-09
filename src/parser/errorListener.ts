import { ANTLRErrorListener } from 'antlr4ts'
import { Token } from 'antlr4ts/Token'

class ErrorListener implements ANTLRErrorListener<Token> {
  private readonly _errors: any[]

  constructor() {
    this._errors = []
  }

  syntaxError(recognizer: any, offendingSymbol: any, line: number, column: number, message: string) {
    this._errors.push({ message, line, column })
  }

  getErrors(): any[] {
    return this._errors
  }

  hasErrors() {
    return this._errors.length > 0
  }
}

export default ErrorListener
