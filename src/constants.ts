export type LogType = 'log' | 'success' | 'info' | 'warn' | 'error' | 'debug' | 'trace'

export interface LogConfig {
  symbol?: string
  color?: string
}

export const defaultLogConfig: { [key in LogType]: LogConfig } = {
  log: {
    symbol: '',
    color: ''
  },
  success: {
    symbol: '✔',
    color: '#8bc34a'
  },
  info: {
    symbol: 'ℹ',
    color: '#03a9f4'
  },
  warn: {
    symbol: '⚠',
    color: '#ffc107'
  },
  error: {
    symbol: '✖',
    color: '#ff5722'
  },
  debug: {
    symbol: 'ℹ',
    color: '#34dada'
  },
  trace: {
    symbol: '⁇',
    color: '#03a9f4'
  }
}
