export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  availability: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  condition: string;
  lastVisit: string;
}

export interface TelemedicineSession {
  id: string;
  patient: string;
  doctor: string;
  status: string;
  startsAt: string;
}

export interface HealthResponse {
  status: string;
  message: string;
}
