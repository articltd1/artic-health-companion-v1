import logger from '../services/logger.service.js';
import AppError from '../errors/AppError.js';

export default function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  // Log full error for diagnostics, but avoid leaking PII
  logger.error('Unhandled error', {
    message: err.message,
    stack: err.stack,
    status,
    route: req.originalUrl,
    method: req.method,
  });

  if (req.xhr || req.headers.accept?.includes('application/json') || req.path.startsWith('/api')) {
    res.status(status).json({
      status: 'error',
      message,
    });
  } else {
    res.status(status).render('error', { message });
  }
}
