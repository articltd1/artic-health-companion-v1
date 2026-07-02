import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "./controllers/auth.js";
import config from './src/config/environment.js';
import logger from './src/common/services/logger.service.js';
import requestLogger from './src/common/middleware/request-logger.js';
import errorHandler from './src/common/middleware/error-handler.js';
import userRoutes from './src/routes/user.routes.js';
import doctorRoutes from './src/routes/doctor.routes.js';

const app = express();
const port = config.port;

app.set('view engine', 'ejs');

app.use(session({
  secret: config.session.secret,
  resave: config.session.resave,
  saveUninitialized: config.session.saveUninitialized,
  cookie: {
    maxAge: config.session.maxAge,
  },
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(requestLogger);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', userRoutes);
app.use('/doctor', doctorRoutes);

app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Listening on port ${port}...`);
});
