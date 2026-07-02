import passport from "passport";
import { Strategy } from "passport-local";
import bcrypt from "bcrypt";
import db from "../src/common/db.js";
import logger from "../src/common/services/logger.service.js";

passport.use(new Strategy(async function verify(username, password, cb) {
    try {
      const result = await db.query(
        "SELECT * FROM users WHERE email = $1",
        [username]
      );
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const storedHashedPassword = user.password;
        bcrypt.compare(password, storedHashedPassword, (error, result) => {
          if (error) {
            return cb(error);
          } else {
            if (result) {
              return cb(null, user);
            } else {
              logger.warn('Wrong password attempt', { username });
              return cb(null, false);
            }
          }
        })
      } else {
        return cb("User not found");
      }
    } catch (error) {
      return cb(error);
    }
  }));
  
  passport.serializeUser((user, cb) => {
    if (user && user.doctor_id) {
      return cb(null, {
        id: user.doctor_id,
        role: 'doctor',
      });
    }

    if (user && user.id) {
      return cb(null, {
        id: user.id,
        role: 'user',
      });
    }

    return cb(new Error('Unable to serialize user'));
  });

  passport.deserializeUser(async (payload, cb) => {
    try {
      if (!payload || !payload.id || !payload.role) {
        return cb(null, false);
      }

      if (payload.role === 'doctor') {
        const result = await db.query('SELECT * FROM doctors WHERE doctor_id = $1', [payload.id]);
        return cb(null, result.rows[0] || false);
      }

      const result = await db.query('SELECT * FROM users WHERE id = $1', [payload.id]);
      return cb(null, result.rows[0] || false);
    } catch (error) {
      return cb(error);
    }
  });

  export default passport;