import db from '../../common/db.js';

export async function findByPatientId(patientId) {
  const result = await db.query(
    'SELECT * FROM medical_records WHERE patient_id = $1 AND deleted_at IS NULL',
    [patientId]
  );
  return result.rows[0] || null;
}

export async function findById(recordId) {
  const result = await db.query(
    'SELECT * FROM medical_records WHERE medical_record_id = $1 AND deleted_at IS NULL',
    [recordId]
  );
  return result.rows[0] || null;
}

export async function create(record) {
  const result = await db.query(
    `INSERT INTO medical_records (patient_id, primary_doctor_id, summary, record_status)
      VALUES ($1, $2, $3, $4) RETURNING *`,
    [record.patient_id, record.primary_doctor_id, record.summary, record.record_status || 'active']
  );
  return result.rows[0];
}

export async function update(recordId, updates) {
  const setClauses = [];
  const values = [];
  let idx = 1;

  if (updates.primary_doctor_id !== undefined) {
    setClauses.push(`primary_doctor_id = $${idx++}`);
    values.push(updates.primary_doctor_id);
  }
  if (updates.summary !== undefined) {
    setClauses.push(`summary = $${idx++}`);
    values.push(updates.summary);
  }
  if (updates.record_status !== undefined) {
    setClauses.push(`record_status = $${idx++}`);
    values.push(updates.record_status);
  }

  if (setClauses.length === 0) {
    const existing = await findById(recordId);
    return existing;
  }

  setClauses.push(`updated_at = CURRENT_TIMESTAMP`);
  const query = `UPDATE medical_records SET ${setClauses.join(', ')} WHERE medical_record_id = $${idx} RETURNING *`;
  values.push(recordId);

  const result = await db.query(query, values);
  return result.rows[0];
}
