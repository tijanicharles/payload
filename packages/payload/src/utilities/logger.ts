import pino from 'pino'
import PinoPretty from 'pino-pretty'

export type PayloadLogger = pino.Logger

const prettyOptions = {
  colorize: true,
  ignore: 'pid,hostname',
  translateTime: 'SYS:HH:MM:ss',
}

export const defaultLoggerOptions: pino.LoggerOptions = {
  transport: {
    options: prettyOptions,
    target: 'pino-pretty',
  },
}

export const prettySyncLoggerDestination = PinoPretty.default({
  ...prettyOptions,
  destination: 1, // stdout
  sync: true,
})

const getLogger = (
  name = 'payload',
  options?: pino.LoggerOptions,
  destination?: pino.DestinationStream,
): PayloadLogger => {
  if (options) {
    return pino.default(
      {
        name: options?.name || name,
        enabled: process.env.DISABLE_LOGGING !== 'true',
        ...(options || defaultLoggerOptions),
      },
      destination,
    )
  }

  return pino.default(prettySyncLoggerDestination)
}

export default getLogger
