import db from '../../common/db.js';

export async function findByRecordId(recordId) {
  const result = await db.query(
    'SELECT * FROM patient_visits WHERE medical_record_id = $1 AND deleted_at IS NULL ORDER BY visit_date DESC',
    [recordId]
  );
  return result.rows;
}

export async function findById(visitId) {
  const result = await db.query(
    'SELECT * FROM patient_visits WHERE visit_id = $1 AND deleted_at IS NULL',
    [visitId]
  );
  return result.rows[0] || null;
}

export async function create(visit) {
  const result = await db.query(
    `INSERT INTO patient_visits (medical_record_id, doctor_id, appointment_id, visit_date, visit_type, reason, encounter_summary, follow_up_instructions)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
    [visit.medical_record_id, visit.doctor_id, visit.appointment_id, visit.visit_date, visit.visit_type, visit.reason, visit.encounter_summary, visit.follow_up_instructions]
  );
  return result.rows[0];
}

export async function update(visitId, updates) {
  const setClauses = [];
  const values = [];
  let idx = 1;

  if (updates.visit_type !== undefined) {
    setClauses.push(`visit_type = $${idx++}`);
    values.push(updates.visit_type);
  }
  if (updates.reason !== undefined) {
    setClauses.push(`reason = $${idx++}`);
    values.push(updates.reason);
  }
  if (updates.encounter_summary !== undefined) {
    setClauses.push(`encounter_summary = $${idx++}`);
    values.push(updates.encounter_summary);
  }
  if (updates.follow_up_instructions !== undefined) {
    setClauses.push(`follow_up_instructions = $${idx++}`);
    values.push(updates.follow_up_instructions);
  }

  if (setClauses.length === 0) {
    const existing = await findById(visitId);
    return existing;
  }

  setClauses.push(`updated_at = CURRENT_TIMESTAMP`);
  const query = `UPDATE patient_visits SET ${setClauses.join(', ')} WHERE visit_id = $${idx} RETURNING *`;
  values.push(visitId);

  const result = await db.query(query, values);
  return result.rows[0];
}
