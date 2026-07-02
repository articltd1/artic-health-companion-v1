import winston from 'winston';
import 'winston-daily-rotate-file';
import fs from 'fs';
import path from 'path';
import config from '../../config/environment.js';

const logDirectory = path.resolve(process.cwd(), 'logs');
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const { combine, timestamp, printf, errors, json, colorize } = winston.format;

const myFormat = printf(({ level, message, timestamp, stack }) => {
  if (stack) return `${timestamp} ${level}: ${stack}`;
  return `${timestamp} ${level}: ${message}`;
});

const transports = [];

// Console transport for dev
transports.push(new winston.transports.Console({
  level: config.logging.level || 'debug',
  format: combine(colorize(), timestamp(), myFormat),
}));

// Daily rotate file transport for persistent logs
transports.push(new winston.transports.DailyRotateFile({
  level: 'info',
  filename: path.join(logDirectory, 'app-%DATE%.log'),
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  format: combine(timestamp(), errors({ stack: true }), json()),
}));

const logger = winston.createLogger({
  level: config.logging.level || 'info',
  transports,
  exitOnError: false,
});

export default logger;
