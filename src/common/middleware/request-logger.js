import logger from '../services/logger.service.js';

export default function requestLogger(req, res, next) {
  const start = Date.now();
  const { method, url, ip } = req;

  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info('HTTP access', {
      method,
      url,
      status: res.statusCode,
      durationMs: duration,
      ip,
    });
  });

  next();
}
