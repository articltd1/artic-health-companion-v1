import pg from 'pg';
import config from '../config/environment.js';

const pool = new pg.Pool(config.database);

export default pool;
