import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

export function getLogger(appName: string): winston.Logger {
  const loggerFormat = winston.format.printf((info) => {
    let { message } = info;
    if (info.level === 'error') {
      message = JSON.stringify(info.stack);
    } else if (typeof info.message === 'object') {
      message = JSON.stringify(info.message);
    }
    if (!message) {
      message = JSON.stringify(info);
    }
    return `${info.timestamp} [${info.label}] ${info.level}: ${message}`;
  });
  const consoleFormat = winston.format.combine(
    winston.format.label({ label: appName }), winston.format.timestamp(), winston.format.splat(), winston.format.errors({ stack: true }), loggerFormat,
  );
  return winston.createLogger({
    level: 'info',
    format: consoleFormat,
    transports: [
      new winston.transports.Console(),
      new DailyRotateFile({
        filename: 'logs/worker-ts-%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxFiles: '3d',
      }),
    ],
  });
}