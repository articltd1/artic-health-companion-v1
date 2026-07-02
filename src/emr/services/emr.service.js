import * as medicalRecordModel from '../models/medicalRecord.model.js';
import * as patientVisitModel from '../models/patientVisit.model.js';

export async function fetchMedicalRecordByPatientId(patientId) {
  return medicalRecordModel.findByPatientId(patientId);
}

export async function fetchMedicalRecordById(recordId) {
  return medicalRecordModel.findById(recordId);
}

export async function createMedicalRecord(data) {
  return medicalRecordModel.create(data);
}

export async function updateMedicalRecord(recordId, data) {
  return medicalRecordModel.update(recordId, data);
}

export async function fetchVisitTimeline(recordId) {
  return patientVisitModel.findByRecordId(recordId);
}

export async function createPatientVisit(data) {
  return patientVisitModel.create(data);
}
