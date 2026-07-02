import * as emrService from '../services/emr.service.js';
import logger from '../../common/services/logger.service.js';

function isDoctor(req) {
  return Boolean(req.user && req.user.doctor_id);
}

function patientOwnsRecord(req, patientId) {
  return Boolean(req.user && req.user.id === patientId);
}

export async function getPatientMedicalRecord(req, res) {
  try {
    const patientId = parseInt(req.params.patientId, 10);
    if (!isDoctor(req) && !patientOwnsRecord(req, patientId)) {
      return res.status(403).send('Access denied');
    }

    const medicalRecord = await emrService.fetchMedicalRecordByPatientId(patientId);
    const visits = medicalRecord ? await emrService.fetchVisitTimeline(medicalRecord.medical_record_id) : [];
    return res.render('emr/patient-record.ejs', { medicalRecord, visits });
  } catch (error) {
    logger.error('Error fetching medical record', { error });
    return res.status(500).send('Internal Server Error');
  }
}

export async function getMedicalRecordById(req, res) {
  try {
    const recordId = req.params.recordId;
    const medicalRecord = await emrService.fetchMedicalRecordById(recordId);

    if (!medicalRecord) {
      return res.status(404).send('Medical record not found');
    }

    if (!isDoctor(req) && !patientOwnsRecord(req, medicalRecord.patient_id)) {
      return res.status(403).send('Access denied');
    }

    const visits = await emrService.fetchVisitTimeline(recordId);
    return res.render('emr/patient-record.ejs', { medicalRecord, visits });
  } catch (error) {
    logger.error('Error fetching medical record by id', { error });
    return res.status(500).send('Internal Server Error');
  }
}

export async function createMedicalRecord(req, res) {
  try {
    const data = req.body;
    const record = await emrService.createMedicalRecord(data);
    return res.status(201).json(record);
  } catch (error) {
    logger.error('Error creating medical record', { error });
    return res.status(500).json({ message: 'Unable to create medical record' });
  }
}

export async function updateMedicalRecord(req, res) {
  try {
    const recordId = req.params.recordId;
    const data = req.body;
    const updated = await emrService.updateMedicalRecord(recordId, data);
    if (!updated) {
      return res.status(404).json({ message: 'Medical record not found' });
    }
    return res.status(200).json(updated);
  } catch (error) {
    logger.error('Error updating medical record', { error });
    return res.status(500).json({ message: 'Unable to update medical record' });
  }
}

export async function getVisitTimeline(req, res) {
  try {
    const recordId = req.params.recordId;
    const medicalRecord = await emrService.fetchMedicalRecordById(recordId);

    if (!medicalRecord) {
      return res.status(404).json({ message: 'Medical record not found' });
    }

    if (!isDoctor(req) && !patientOwnsRecord(req, medicalRecord.patient_id)) {
      return res.status(403).json({ message: 'Access denied' });
    }

    const visits = await emrService.fetchVisitTimeline(recordId);
    return res.json(visits);
  } catch (error) {
    logger.error('Error fetching visit timeline', { error });
    return res.status(500).json({ message: 'Unable to fetch visit timeline' });
  }
}

export async function createPatientVisit(req, res) {
  try {
    const recordId = req.params.recordId;
    const medicalRecord = await emrService.fetchMedicalRecordById(recordId);

    if (!medicalRecord) {
      return res.status(404).json({ message: 'Medical record not found' });
    }

    const visitData = {
      medical_record_id: recordId,
      doctor_id: req.body.doctor_id || req.user.doctor_id,
      appointment_id: req.body.appointment_id,
      visit_date: req.body.visit_date,
      visit_type: req.body.visit_type,
      reason: req.body.reason,
      encounter_summary: req.body.encounter_summary,
      follow_up_instructions: req.body.follow_up_instructions,
    };

    const createdVisit = await emrService.createPatientVisit(visitData);
    return res.status(201).json(createdVisit);
  } catch (error) {
    logger.error('Error creating patient visit', { error });
    return res.status(500).json({ message: 'Unable to create patient visit' });
  }
}
