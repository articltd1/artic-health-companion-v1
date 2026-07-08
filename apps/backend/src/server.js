import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import securityHeaders from '../../../src/common/middleware/security-headers.js';
import healthRoutes from './routes/health.routes.js';
import authRoutes from './routes/auth.routes.js';
import patientRoutes from './routes/patient.routes.js';
import doctorRoutes from './routes/doctor.routes.js';
import telemedicineRoutes from './routes/telemedicine.routes.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));
// Apply lightweight security headers for API responses
app.use(securityHeaders);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'artic-dev-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
}));

app.use('/api/v1/health', healthRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/patients', patientRoutes);
app.use('/api/v1/doctors', doctorRoutes);
app.use('/api/v1/telemedicine', telemedicineRoutes);

app.get('/api/v1', (req, res) => {
  res.json({ status: 'ARTIC API v1', message: 'Use /api/v1/health, /api/v1/auth, /api/v1/patients, /api/v1/doctors, or /api/v1/telemedicine' });
});

app.listen(port, () => {
  console.log(`ARTIC backend API listening on port ${port}`);
});
