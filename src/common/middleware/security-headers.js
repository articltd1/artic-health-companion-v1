import config from '../../config/environment.js';

export default function securityHeaders(req, res, next) {
  // Basic recommended security headers (CSP-lite to avoid breaking legacy inline scripts)
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'no-referrer-when-downgrade');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=()');

  // Content Security Policy (light) — adjust when modernizing frontend
  const csp = "default-src 'self' 'unsafe-inline' data: https:; img-src 'self' data: https:; connect-src 'self' https:; font-src 'self' data:; style-src 'self' 'unsafe-inline' https:; script-src 'self' 'unsafe-inline' https:';";
  res.setHeader('Content-Security-Policy', csp);

  // Strict-Transport-Security only in production
  if (config.nodeEnv === 'production') {
    res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  }

  return next();
}
export default function securityHeaders(req, res, next) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
}
