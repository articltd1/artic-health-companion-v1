-- migrations/001_create_emr_schema.sql
-- EMR Core Database Schema for ARTIC Health Companion

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS medical_records (
  medical_record_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id INT NOT NULL REFERENCES users(id),
  primary_doctor_id INT REFERENCES doctors(doctor_id),
  summary TEXT,
  record_status VARCHAR(50) NOT NULL DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE NULL
);
CREATE INDEX IF NOT EXISTS idx_medical_records_patient_id ON medical_records(patient_id);
CREATE INDEX IF NOT EXISTS idx_medical_records_doctor_id ON medical_records(primary_doctor_id);

CREATE TABLE IF NOT EXISTS patient_visits (
  visit_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  medical_record_id UUID NOT NULL REFERENCES medical_records(medical_record_id),
  doctor_id INT REFERENCES doctors(doctor_id),
  appointment_id INT REFERENCES appointment(appointment_id),
  visit_date TIMESTAMP WITH TIME ZONE NOT NULL,
  visit_type VARCHAR(100),
  reason TEXT,
  encounter_summary TEXT,
  follow_up_instructions TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE NULL
);
CREATE INDEX IF NOT EXISTS idx_patient_visits_medical_record_id ON patient_visits(medical_record_id);
CREATE INDEX IF NOT EXISTS idx_patient_visits_doctor_id ON patient_visits(doctor_id);
CREATE INDEX IF NOT EXISTS idx_patient_visits_visit_date ON patient_visits(visit_date);

CREATE TABLE IF NOT EXISTS diagnoses (
  diagnosis_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  visit_id UUID NOT NULL REFERENCES patient_visits(visit_id),
  doctor_id INT REFERENCES doctors(doctor_id),
  condition_name TEXT NOT NULL,
  diagnosis_code VARCHAR(50),
  severity VARCHAR(50),
  status VARCHAR(50) DEFAULT 'active',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE NULL
);
CREATE INDEX IF NOT EXISTS idx_diagnoses_visit_id ON diagnoses(visit_id);
CREATE INDEX IF NOT EXISTS idx_diagnoses_doctor_id ON diagnoses(doctor_id);

CREATE TABLE IF NOT EXISTS prescriptions (
  prescription_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  visit_id UUID NOT NULL REFERENCES patient_visits(visit_id),
  patient_id INT NOT NULL REFERENCES users(id),
  doctor_id INT REFERENCES doctors(doctor_id),
  medical_record_id UUID NOT NULL REFERENCES medical_records(medical_record_id),
  medication_name TEXT NOT NULL,
  dosage TEXT,
  frequency TEXT,
  route TEXT,
  duration TEXT,
  start_date DATE,
  end_date DATE,
  instructions TEXT,
  prescription_status VARCHAR(50) DEFAULT 'active',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE NULL
);
CREATE INDEX IF NOT EXISTS idx_prescriptions_patient_id ON prescriptions(patient_id);
CREATE INDEX IF NOT EXISTS idx_prescriptions_doctor_id ON prescriptions(doctor_id);

CREATE TABLE IF NOT EXISTS allergies (
  allergy_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id INT NOT NULL REFERENCES users(id),
  medical_record_id UUID NOT NULL REFERENCES medical_records(medical_record_id),
  allergen TEXT NOT NULL,
  reaction TEXT,
  severity VARCHAR(50),
  status VARCHAR(50) DEFAULT 'active',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE NULL,
  UNIQUE(patient_id, allergen)
);
CREATE INDEX IF NOT EXISTS idx_allergies_patient_id ON allergies(patient_id);

CREATE TABLE IF NOT EXISTS vaccinations (
  vaccination_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id INT NOT NULL REFERENCES users(id),
  medical_record_id UUID NOT NULL REFERENCES medical_records(medical_record_id),
  vaccine_name TEXT NOT NULL,
  administration_date DATE,
  batch_number TEXT,
  provider TEXT,
  site TEXT,
  status VARCHAR(50) DEFAULT 'completed',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE NULL
);
CREATE INDEX IF NOT EXISTS idx_vaccinations_patient_id ON vaccinations(patient_id);

CREATE TABLE IF NOT EXISTS vital_signs (
  vital_sign_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id INT NOT NULL REFERENCES users(id),
  medical_record_id UUID NOT NULL REFERENCES medical_records(medical_record_id),
  visit_id UUID REFERENCES patient_visits(visit_id),
  recorded_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  blood_pressure_systolic INT,
  blood_pressure_diastolic INT,
  heart_rate INT,
  respiratory_rate INT,
  temperature DECIMAL(5,2),
  weight DECIMAL(8,2),
  height DECIMAL(8,2),
  bmi DECIMAL(6,2),
  oxygen_saturation DECIMAL(5,2),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE NULL
);
CREATE INDEX IF NOT EXISTS idx_vital_signs_patient_id ON vital_signs(patient_id);
CREATE INDEX IF NOT EXISTS idx_vital_signs_recorded_at ON vital_signs(recorded_at);

CREATE TABLE IF NOT EXISTS laboratory_results (
  lab_result_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id INT NOT NULL REFERENCES users(id),
  medical_record_id UUID NOT NULL REFERENCES medical_records(medical_record_id),
  visit_id UUID REFERENCES patient_visits(visit_id),
  test_name TEXT NOT NULL,
  result_value TEXT,
  unit TEXT,
  reference_range TEXT,
  status VARCHAR(50) DEFAULT 'final',
  result_date TIMESTAMP WITH TIME ZONE,
  provider TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE NULL
);
CREATE INDEX IF NOT EXISTS idx_laboratory_results_patient_id ON laboratory_results(patient_id);

CREATE TABLE IF NOT EXISTS medical_imaging (
  imaging_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id INT NOT NULL REFERENCES users(id),
  medical_record_id UUID NOT NULL REFERENCES medical_records(medical_record_id),
  visit_id UUID REFERENCES patient_visits(visit_id),
  study_type TEXT,
  modality TEXT,
  image_url TEXT,
  report_text TEXT,
  performed_date TIMESTAMP WITH TIME ZONE,
  ordering_doctor_id INT REFERENCES doctors(doctor_id),
  status VARCHAR(50) DEFAULT 'completed',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE NULL
);
CREATE INDEX IF NOT EXISTS idx_medical_imaging_patient_id ON medical_imaging(patient_id);

CREATE TABLE IF NOT EXISTS clinical_notes (
  clinical_note_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id INT NOT NULL REFERENCES users(id),
  visit_id UUID REFERENCES patient_visits(visit_id),
  doctor_id INT REFERENCES doctors(doctor_id),
  note_type VARCHAR(100),
  title TEXT,
  body TEXT,
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE NULL
);
CREATE INDEX IF NOT EXISTS idx_clinical_notes_patient_id ON clinical_notes(patient_id);

CREATE TABLE IF NOT EXISTS medical_documents (
  document_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id INT NOT NULL REFERENCES users(id),
  medical_record_id UUID NOT NULL REFERENCES medical_records(medical_record_id),
  visit_id UUID REFERENCES patient_visits(visit_id),
  uploaded_by INT REFERENCES doctors(doctor_id),
  document_type VARCHAR(100),
  file_name TEXT,
  file_url TEXT,
  content_type VARCHAR(100),
  size_bytes BIGINT,
  status VARCHAR(50) DEFAULT 'active',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE NULL
);
CREATE INDEX IF NOT EXISTS idx_medical_documents_patient_id ON medical_documents(patient_id);
