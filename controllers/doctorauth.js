// Import necessary modules
import passport from "passport";
import { Strategy } from "passport-local";
import bcrypt from "bcrypt";
import db from "../src/common/db.js";

const doctorpassport = passport;

// Configure Passport local strategy for doctor authentication
doctorpassport.use('doctor', new Strategy(async function verify(username, password, done) {
  try {
    const result = await db.query(
      "SELECT * FROM doctors WHERE email = $1",
      [username]
    );
    if (result.rows.length > 0) {
      const doctor = result.rows[0];
      const storedHashedPassword = doctor.password;
      bcrypt.compare(password, storedHashedPassword, (error, result) => {
        if (error) {
          return done(error);
        } else {
          if (result) {
            return done(null, doctor);
          } else {
            return done(null, false, { message: 'Incorrect password.' });
          }
        }
      });
    } else {
      return done(null, false, { message: 'Doctor not found.' });
    }
  } catch (error) {
    return done(error);
  }
}));

export default doctorpassport;
