import express from 'express';
import { listTelemedicineSessions, getTelemedicineSession } from '../controllers/telemedicine.controller.js';

const router = express.Router();

router.get('/', listTelemedicineSessions);
router.get('/:id', getTelemedicineSession);

export default router;
