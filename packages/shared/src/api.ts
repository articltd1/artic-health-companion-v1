export const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL || 'http://localhost:4000';

export async function fetchHealth() {
  const response = await fetch(`${apiBase}/api/v1/health`, { cache: 'no-store' });
  if (!response.ok) throw new Error('Unable to fetch API health');
  return response.json();
}

export async function fetchPatients() {
  const response = await fetch(`${apiBase}/api/v1/patients`, { cache: 'no-store' });
  if (!response.ok) throw new Error('Unable to fetch patients');
  return response.json();
}

export async function fetchDoctors() {
  const response = await fetch(`${apiBase}/api/v1/doctors`, { cache: 'no-store' });
  if (!response.ok) throw new Error('Unable to fetch doctors');
  return response.json();
}

export async function fetchTelemedicineSessions() {
  const response = await fetch(`${apiBase}/api/v1/telemedicine`, { cache: 'no-store' });
  if (!response.ok) throw new Error('Unable to fetch telemedicine sessions');
  return response.json();
}
