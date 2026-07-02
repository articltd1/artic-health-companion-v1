import { createApiResponse } from '@artic/shared';

const demoDoctors = [
  { id: 'd-001', name: 'Dr. Sarah Mburu', specialty: 'Family Medicine', availability: 'Mon-Fri 09:00-17:00' },
  { id: 'd-002', name: 'Dr. Sameer Patel', specialty: 'Cardiology', availability: 'Tue-Thu 10:00-16:00' },
];

export function listDoctors(req, res) {
  res.json(createApiResponse(demoDoctors, demoDoctors.length));
}

export function getDoctorById(req, res) {
  const doctor = demoDoctors.find((item) => item.id === req.params.id);
  if (!doctor) {
    return res.status(404).json({ error: 'Doctor not found' });
  }

  res.json(createApiResponse(doctor));
}
