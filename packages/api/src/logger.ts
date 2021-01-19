import pino from 'pino'

const pinoSeverity = {
  trace: 'DEBUG',
  debug: 'DEBUG',
  info: 'INFO',
  warn: 'WARNING',
  error: 'ERROR',
  fatal: 'CRITICAL',
}

const logger = pino({
  messageKey: 'message',
  formatters: {
    level(label, number) {
      return {
        severity: pinoSeverity[label] || pinoSeverity.info,
        level: number,
      }
    },
    log(message) {
      return { message }
    },
  },
})

export default logger
