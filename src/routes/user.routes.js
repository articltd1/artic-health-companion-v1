import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import bcrypt from 'bcrypt';
import db from '../common/db.js';
import config from '../config/environment.js';
import logger from '../common/services/logger.service.js';
import validate from '../common/middleware/validate.js';
import ensureAuthenticated from '../common/middleware/authenticate.js';
import {
  registerSchema,
  loginSchema,
  appointmentSchema,
  diseasePredictionSchema,
} from '../common/validation/schemas.js';
import passport from '../../controllers/auth.js';
import { getDiagnosis } from '../../controllers/symp.js';
import { query } from '../../controllers/chatbot.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const symptomsFilePath = path.resolve(__dirname, '../../controllers/symptoms.json');

const router = express.Router();
const newsAPI_Key = config.apis.newsApi.key;

router.get('/login', (req, res) => {
  res.render('login.ejs');
});

router.get('/register', (req, res) => {
  res.render('register.ejs');
});

router.get('/profile', ensureAuthenticated('/login'), async (req, res) => {
  try {
    const user = await db.query(
      'SELECT * FROM users WHERE id = $1',
      [req.user.id]
    );

    if (user.rows.length > 0) {
      res.render('profile.ejs', {
        user: user.rows[0],
        currYear: new Date().getFullYear(),
      });
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    logger.error('Error fetching user', { error: err });
    res.status(500).send('Internal Server Error');
  }
});

router.post('/editProfile', async (req, res) => {
  const { id, username, email, gender, yearOfBirth } = req.body;

  try {
    await db.query(
      'UPDATE users SET username = $1, email = $2, gender = $3, yearofbirth = $4 WHERE id = $5',
      [username, email, gender, yearOfBirth, id]
    );
    res.redirect('/profile');
  } catch (error) {
    logger.error('Error editing profile', { error });
    res.status(500).send('Internal Server Error');
  }
});

router.get('/logout', (req, res) => {
  req.logout((error) => {
    if (error) logger.error('Logout error', { error });
    res.redirect('/login');
  });
});

router.get('/', (req, res) => {
  logger.debug('Rendering homepage', {
    user: req.user ? { id: req.user.id, email: req.user.email } : null,
  });
  res.render('index.ejs');
});

router.post('/register', validate(registerSchema), async (req, res) => {
  const { username, email, password, yearOfBirth, gender } = req.body;

  try {
    const checkResult = await db.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    if (checkResult.rows.length > 0) {
      res.status(400).send('Email already exists. Try logging in.');
    } else {
      bcrypt.hash(password, 10, async (error, hash) => {
        if (error) {
          logger.error('Error hashing password', { error });
          return res.status(500).send('Internal Server Error');
        }
        const result = await db.query(
          'INSERT INTO users (username, yearOfBirth, gender, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
          [username, yearOfBirth, gender, email, hash]
        );
        const user = result.rows[0];
        req.login(user, (error) => {
          if (error) {
            logger.error('Login error after register', { error });
            return res.status(500).send('Internal Server Error');
          }
          res.redirect('/');
        });
      });
    }
  } catch (error) {
    logger.error('Registration error', { error });
    res.status(500).send('Internal Server Error');
  }
});

router.post('/login', validate(loginSchema), passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
}));

router.get('/doctors', ensureAuthenticated('/login'), async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM doctors');
    const doctors = result.rows;
    const user_id = req.user.id;
    res.render('doctors.ejs', { doctors, doctorId: undefined, user_id });
  } catch (err) {
    logger.error('Error fetching doctors', { error: err });
    res.status(500).send('Internal Server Error');
  }
});

router.post('/book-appointment', ensureAuthenticated('/login'), validate(appointmentSchema), async (req, res) => {
  try {
    const { patient_id, doctor_id, time, date, problem } = req.body;
    const checkResult = await db.query(
      'SELECT * FROM appointment WHERE patient_id = $1 AND doctor_id = $2 AND time = $3 AND date = $4',
      [patient_id, doctor_id, time, date]
    );
    if (checkResult.rows.length > 0) {
      return res.status(409).send('Same appointment already exists.');
    }
    const insertResult = await db.query(
      'INSERT INTO appointment (doctor_id, patient_id, date, time, problem_description, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [doctor_id, patient_id, date, time, problem, 'pending']
    );
    const newAppointment = insertResult.rows[0];
    logger.info('New appointment created', { appointment: newAppointment });
    res.redirect('/doctors');
  } catch (error) {
    logger.error('Error in /book-appointment', { message: error.message });
    res.status(500).send('Internal Server Error');
  }
});

router.get('/user-appointments', ensureAuthenticated('/login'), async (req, res) => {
  const userId = req.user.id;
  const statusFilter = req.query.status || 'pending';

  try {
    const result = await db.query(
      'SELECT * FROM appointment WHERE patient_id = $1 AND status = $2 ORDER BY date, time',
      [userId, statusFilter]
    );
    const appointments = result.rows;
    res.render('user-appointments.ejs', { appointments, statusFilter });
  } catch (error) {
    logger.error('Error fetching user appointments', { message: error.message });
    res.status(500).send('Internal Server Error');
  }
});

router.post('/delete-appointment', ensureAuthenticated('/login'), async (req, res) => {
  const appointmentId = req.body.appointment_id;
  try {
    await db.query('DELETE FROM appointment WHERE appointment_id = $1', [appointmentId]);
    res.redirect('/user-appointments');
  } catch (error) {
    logger.error('Error deleting appointment', { message: error.message });
    res.status(500).send('Internal Server Error');
  }
});

router.get('/symptoms', async (req, res) => {
  try {
    const data = await fs.readFile(symptomsFilePath, 'utf-8');
    const symptoms = JSON.parse(data);
    res.json(symptoms);
  } catch (error) {
    logger.error('Error reading symptoms from file', { message: error.message });
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/predict-disease', ensureAuthenticated('/login'), (req, res) => {
  res.render('disease-prediction.ejs');
});

router.post('/predict-disease', ensureAuthenticated('/login'), validate(diseasePredictionSchema), async (req, res) => {
  try {
    const { symptoms: userSymptoms, gender, yearOfBirth } = req.body;
    logger.info('Received symptoms for prediction', { symptoms: userSymptoms });
    const result = await getDiagnosis(userSymptoms, gender, yearOfBirth);
    logger.info('Disease prediction result', { result });
    res.json({ diseases: result });
  } catch (error) {
    logger.error('Disease prediction error', { message: error.message });
    res.render('disease-prediction.ejs', { error: 'Something went wrong! Please try again' });
  }
});

router.get('/news', ensureAuthenticated('/login'), async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=health&apiKey=${newsAPI_Key}`
    );
    const result = response.data.articles.filter(
      news => news.urlToImage != null && news.content != null
    );
    logger.info('Fetched news articles count', { count: result.length });
    res.render('news.ejs', { news: result });
  } catch (error) {
    logger.error('News fetch error', { error });
    res.status(500).send('Internal Server Error');
  }
});

router.post('/api/query', async (req, res) => {
  try {
    logger.debug('Incoming /api/query request', { body: req.body });
    const data = req.body.inputs;
    logger.debug('AI query inputs', { inputs: data });
    query(data).then(response => {
      logger.debug('AI response', { response });
      res.json(response);
    }).catch(err => {
      logger.error('AI provider error', { error: err });
      res.status(500).json({ error: 'AI provider error' });
    });
  } catch (error) {
    logger.error('API query handler error', { error });
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
