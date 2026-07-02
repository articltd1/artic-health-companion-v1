import Joi from 'joi';

export const registerSchema = Joi.object({
  username: Joi.string().trim().min(3).max(50).required(),
  email: Joi.string().trim().email().required(),
  password: Joi.string().min(8).required(),
  yearOfBirth: Joi.number().integer().min(1900).max(new Date().getFullYear()).required(),
  gender: Joi.string().valid('male', 'female', 'other').insensitive().required(),
});

export const loginSchema = Joi.object({
  username: Joi.string().trim().email(),
  email: Joi.string().trim().email(),
  password: Joi.string().required(),
}).or('username', 'email');

export const appointmentSchema = Joi.object({
  patient_id: Joi.number().integer().required(),
  doctor_id: Joi.number().integer().required(),
  time: Joi.string().trim().required(),
  date: Joi.string().trim().required(),
  problem: Joi.string().trim().min(10).required(),
});

export const doctorRegisterSchema = Joi.object({
  name: Joi.string().trim().min(3).max(100).required(),
  contact_number: Joi.string().trim().pattern(/^[0-9()+\-\s]+$/).required(),
  specialization: Joi.string().trim().min(3).max(100).required(),
  email: Joi.string().trim().email().required(),
  password: Joi.string().min(8).required(),
});

export const diseasePredictionSchema = Joi.object({
  symptoms: Joi.array().items(Joi.string().trim().required()).min(1).required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  yearOfBirth: Joi.number().integer().min(1900).max(new Date().getFullYear()).required(),
});
