import express from 'express';
import bcrypt from 'bcrypt';
import db from '../common/db.js';
import logger from '../common/services/logger.service.js';
import validate from '../common/middleware/validate.js';
import ensureAuthenticated from '../common/middleware/authenticate.js';
import { doctorRegisterSchema } from '../common/validation/schemas.js';
import doctorpassport from '../../controllers/doctorauth.js';

const router = express.Router();

router.get('/login', (req, res) => {
  res.render('doctor/login.ejs');
});

router.get('/register', (req, res) => {
  res.render('doctor/register.ejs');
});

router.get('/dashboard', ensureAuthenticated('/doctor/login'), async (req, res) => {
  const doctorId = req.user.doctor_id;
  logger.debug('Doctor dashboard accessed', {
    user: req.user ? { id: req.user.doctor_id, email: req.user.email } : null,
  });
  const statusFilter = req.query.status || 'pending';
  try {
    const result = await db.query(
      'SELECT * FROM appointment WHERE doctor_id = $1 AND status = $2 ORDER BY date, time',
      [doctorId, statusFilter]
    );
    const appointments = result.rows;
    res.render('doctor/dashboard.ejs', { appointments, statusFilter });
  } catch (error) {
    logger.error('Error fetching doctor appointments', { message: error.message });
    res.status(500).send('Internal Server Error');
  }
});

router.get('/profile', ensureAuthenticated('/doctor/login'), (req, res) => {
  res.render('doctor/profile.ejs', {
    doctor: req.user,
    currYear: new Date().getFullYear(),
  });
});

router.post('/register', validate(doctorRegisterSchema), async (req, res) => {
  const { name, contact_number, specialization, email, password } = req.body;
  try {
    const checkResult = await db.query('SELECT * FROM doctors WHERE email = $1', [email]);
    if (checkResult.rows.length > 0) {
      res.status(400).send('Email already exists. Try logging in.');
    } else {
      bcrypt.hash(password, 10, async (error, hash) => {
        if (error) {
          logger.error('Error hashing doctor password', { error });
          return res.status(500).send('Internal Server Error');
        }
        const result = await db.query(
          'INSERT INTO doctors (name, contact_number, specialization, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
          [name, contact_number, specialization, email, hash]
        );
        const doctor = result.rows[0];
        req.login(doctor, (error) => {
          if (error) {
            logger.error('Doctor login error after register', { error });
            return res.status(500).send('Internal Server Error');
          }
          res.redirect('/doctor/dashboard');
        });
      });
    }
  } catch (error) {
    logger.error('Doctor registration error', { error });
    res.status(500).send('Internal Server Error');
  }
});

router.post('/login', doctorpassport.authenticate('doctor', {
  successRedirect: '/doctor/dashboard',
  failureRedirect: '/doctor/login',
}));

export default router;
