import AppError from '../errors/AppError.js';

export default function validate(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const validationError = new AppError('Validation Error', 400, true);
      validationError.details = error.details.map(detail => ({
        message: detail.message,
        path: detail.path,
      }));
      return next(validationError);
    }

    req.body = value;
    next();
  };
}
