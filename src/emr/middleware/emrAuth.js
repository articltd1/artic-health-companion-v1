import * as medicalRecordModel from '../models/medicalRecord.model.js';

export function ensureDoctorOrAdmin(req, res, next) {
  if (req.isAuthenticated && req.isAuthenticated() && req.user && req.user.doctor_id) {
    return next();
  }

  if (req.headers.accept && req.headers.accept.includes('application/json')) {
    return res.status(403).json({ message: 'Doctor or administrator privileges required' });
  }

  return res.redirect('/doctor/login');
}

export async function ensureRecordAccess(req, res, next) {
  if (!req.isAuthenticated || !req.isAuthenticated() || !req.user) {
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      return res.status(401).json({ message: 'Authentication required' });
    }
    return res.redirect('/login');
  }

  const recordId = req.params.recordId;
  const record = await medicalRecordModel.findById(recordId);

  if (!record) {
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      return res.status(404).json({ message: 'Medical record not found' });
    }
    return res.status(404).send('Medical record not found');
  }

  if (req.user.doctor_id || req.user.id === record.patient_id) {
    return next();
  }

  if (req.headers.accept && req.headers.accept.includes('application/json')) {
    return res.status(403).json({ message: 'Access denied' });
  }

  return res.status(403).send('Access denied');
}
