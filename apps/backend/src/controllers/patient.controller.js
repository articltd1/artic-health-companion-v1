import { createApiResponse } from '@artic/shared';

const demoPatients = [
  { id: 'p-001', name: 'Amina Hassan', age: 32, condition: 'Asthma', lastVisit: '2026-06-03' },
  { id: 'p-002', name: 'Michael Chen', age: 45, condition: 'Hypertension', lastVisit: '2026-05-22' },
];

export function listPatients(req, res) {
  res.json(createApiResponse(demoPatients, demoPatients.length));
}

export function getPatientById(req, res) {
  const patient = demoPatients.find((item) => item.id === req.params.id);
  if (!patient) {
    return res.status(404).json({ error: 'Patient not found' });
  }

  res.json(createApiResponse(patient));
}
