import express from 'express';
import ensureAuthenticated from '../../common/middleware/authenticate.js';
import validate from '../../common/middleware/validate.js';
import {
  medicalRecordCreateSchema,
  medicalRecordUpdateSchema,
  patientVisitSchema,
} from '../validation/emr.schemas.js';
import {
  getPatientMedicalRecord,
  getMedicalRecordById,
  createMedicalRecord,
  updateMedicalRecord,
  getVisitTimeline,
  createPatientVisit,
} from '../controllers/emr.controller.js';
import {
  ensureDoctorOrAdmin,
  ensureRecordAccess,
} from '../middleware/emrAuth.js';

const router = express.Router();

router.get('/patient/:patientId', ensureAuthenticated('/login'), getPatientMedicalRecord);
router.get('/records/:recordId', ensureAuthenticated('/login'), ensureRecordAccess, getMedicalRecordById);
router.get('/records/:recordId/visits', ensureAuthenticated('/login'), ensureRecordAccess, getVisitTimeline);
router.post('/records', ensureAuthenticated('/login'), ensureDoctorOrAdmin, validate(medicalRecordCreateSchema), createMedicalRecord);
router.put('/records/:recordId', ensureAuthenticated('/login'), ensureDoctorOrAdmin, validate(medicalRecordUpdateSchema), updateMedicalRecord);
router.post('/records/:recordId/visits', ensureAuthenticated('/login'), ensureDoctorOrAdmin, validate(patientVisitSchema), createPatientVisit);

export default router;
