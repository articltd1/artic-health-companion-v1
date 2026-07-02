import express from 'express';
import { listPatients, getPatientById } from '../controllers/patient.controller.js';

const router = express.Router();

router.get('/', listPatients);
router.get('/:id', getPatientById);

export default router;
