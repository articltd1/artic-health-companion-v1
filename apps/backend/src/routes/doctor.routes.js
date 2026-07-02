import express from 'express';
import { listDoctors, getDoctorById } from '../controllers/doctor.controller.js';

const router = express.Router();

router.get('/', listDoctors);
router.get('/:id', getDoctorById);

export default router;
