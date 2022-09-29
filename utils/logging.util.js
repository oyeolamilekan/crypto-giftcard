const { createLogger, transports, format } = require('winston');

const customFormat = format.combine(format.timestamp(), format.printf((info) => {
  return `${info.timestamp} [${info.level.toUpperCase()}]: {"message": ${info.message}}`
}))

let today = new Date().toISOString().slice(0, 10)

/**
 * Logs application level actions on a day by day basis to avoid long logs.
 */
const logger = createLogger({
  format: customFormat,
  transports: [
    new transports.Console({level: 'silly'}),
    new transports.File({ filename: `logs/app-${today}.log`, level: 'info'}),
    new transports.File({ filename: `logs/error-${today}.log`, level: 'error'})
  ]
});

module.exports = logger;