export function healthCheck(req, res) {
  res.json({
    status: 'ok',
    version: 'v1',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
}
