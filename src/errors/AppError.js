export default class AppError extends Error {
  constructor(message, status = 500, isOperational = false) {
    super(message);
    this.name = 'AppError';
    this.status = status;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}
