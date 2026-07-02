export default function ensureAuthenticated(redirectPath = '/login') {
  return (req, res, next) => {
    if (req.isAuthenticated && req.isAuthenticated()) {
      return next();
    }

    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    return res.redirect(redirectPath);
  };
}
