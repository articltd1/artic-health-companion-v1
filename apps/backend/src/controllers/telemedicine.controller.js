import { createApiResponse } from '@artic/shared';

const demoSessions = [
  { id: 't-001', patient: 'Amina Hassan', doctor: 'Dr. Sarah Mburu', status: 'Scheduled', startsAt: '2026-06-09T14:00:00Z' },
  { id: 't-002', patient: 'Michael Chen', doctor: 'Dr. Sameer Patel', status: 'Completed', startsAt: '2026-05-28T09:30:00Z' },
];

export function listTelemedicineSessions(req, res) {
  res.json(createApiResponse(demoSessions, demoSessions.length));
}

export function getTelemedicineSession(req, res) {
  const session = demoSessions.find((item) => item.id === req.params.id);
  if (!session) {
    return res.status(404).json({ error: 'Telemedicine session not found' });
  }

  res.json(createApiResponse(session));
}
