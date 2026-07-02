import Joi from 'joi';

export const medicalRecordCreateSchema = Joi.object({
  patient_id: Joi.number().integer().required(),
  primary_doctor_id: Joi.number().integer().optional(),
  summary: Joi.string().allow('').optional(),
  record_status: Joi.string().valid('active', 'inactive', 'archived').optional(),
});

export const medicalRecordUpdateSchema = Joi.object({
  primary_doctor_id: Joi.number().integer().optional(),
  summary: Joi.string().allow('').optional(),
  record_status: Joi.string().valid('active', 'inactive', 'archived').optional(),
});

export const patientVisitSchema = Joi.object({
  visit_date: Joi.date().iso().required(),
  visit_type: Joi.string().trim().optional(),
  reason: Joi.string().trim().optional(),
  encounter_summary: Joi.string().trim().optional(),
  follow_up_instructions: Joi.string().trim().optional(),
  doctor_id: Joi.number().integer().optional(),
  appointment_id: Joi.number().integer().optional(),
});
