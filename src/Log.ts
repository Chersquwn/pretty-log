import chalk from 'chalk'
import { defaultLogConfig, LogType } from './constants'
import { filterKeyFromObject } from './utils/filterKeyFromObject'

export type LogConfig = Partial<typeof defaultLogConfig>

export interface LogOptions {
  symbol?: boolean
  enableBackgroundColor?: boolean
  config?: LogConfig
}

export type Symbols = Partial<Record<LogType, string>>

export type Colors = Partial<Record<LogType, string>>

export default class Log {
  private enableSymbol = false

  private enableBackgroundColor = false

  private symbols: Symbols

  private colors: Colors

  constructor(options: LogOptions = {
    symbol: false,
    enableBackgroundColor: false,
    config: defaultLogConfig
  }) {
    this.enableSymbol = options.symbol!
    this.enableBackgroundColor = options.enableBackgroundColor!
    this.symbols = filterKeyFromObject<LogType, LogConfig, Symbols>(options.config!, 'symbol')
    this.colors = filterKeyFromObject<LogType, LogConfig, Colors>(options.config!, 'color')
  }

  public useSymbol() {
    this.enableSymbol = true
  }

  public useBackgroundColor() {
    this.enableBackgroundColor = true
  }

  public setSymbols(symbols: Symbols) {
    this.symbols = {
      ...this.symbols,
      ...symbols
    }
  }

  public setColors(colors: Colors) {
    this.colors = {
      ...this.colors,
      ...colors
    }
  }

  public log(...args: any[]) {
    console.log(this.createLogMessage('log', ...args))
  }

  public success(...args: any[]) {
    console.log(this.createLogMessage('success', ...args))
  }

  public info(...args: any[]) {
    console.log(this.createLogMessage('info', ...args))
  }

  public warn(...args: any[]) {
    console.log(this.createLogMessage('warn', ...args))
  }

  public error(...args: any[]) {
    console.log(this.createLogMessage('error', ...args))
  }

  public debug(...args: any[]) {
    console.log(this.createLogMessage('debug', ...args))
  }

  public trace(...args: any[]) {
    console.log(this.createLogMessage('trace', ...args))
  }

  private createLogMessage(type: LogType, ...args: any[]) {
    const msgArr = []

    if (this.enableSymbol) {
      msgArr.push(chalk.hex(this.colors[type]!)(this.symbols[type]))
    }

    if (this.enableBackgroundColor) {
      msgArr.push(chalk.bgHex(this.colors[type]!)(chalk.whiteBright(type)))
    } else {
      msgArr.push(chalk.hex(this.colors[type]!)(type))
    }

    msgArr.push(...args)

    return msgArr.join(' ')
  }
}
