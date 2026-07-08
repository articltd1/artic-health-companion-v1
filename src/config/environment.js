import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const REQUIRED_VARS = [
  'DB_USER',
  'DB_HOST',
  'DB_NAME',
  'DB_PASSWORD',
  'DB_PORT',
  'NODE_ENV',
  'PORT',
  'SESSION_SECRET',
];

function parseBoolean(value, fallback) {
  if (typeof value === 'undefined' || value === null || value === '') {
    return fallback;
  }

  return ['1', 'true', 'yes', 'on'].includes(String(value).toLowerCase());
}

function validateEnvironment() {
  const missing = REQUIRED_VARS.filter((variable) => !process.env[variable]);

  if (missing.length > 0) {
    if ((process.env.NODE_ENV || 'development') === 'production') {
      console.error('❌ Missing required environment variables (production):');
      missing.forEach((variable) => console.error(`   - ${variable}`));
      console.error('\n📋 Please ensure production environment variables are set.');
      process.exit(1);
    }

    // Development: warn but don't exit to avoid blocking local work
    console.warn('⚠️ Missing environment variables (development):');
    missing.forEach((variable) => console.warn(`   - ${variable}`));
    console.warn('\nTip: copy .env.example to .env and fill values for local development.');
  } else {
    console.log('✓ All required environment variables are configured');
  }
}

export const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000', 10),
  appName: process.env.APP_NAME || 'ARTIC Health Companion',

  database: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    max: parseInt(process.env.DB_POOL_MAX || '20', 10),
    idleTimeoutMillis: parseInt(process.env.DB_IDLE_TIMEOUT || '30000', 10),
    connectionTimeoutMillis: parseInt(process.env.DB_CONNECTION_TIMEOUT || '2000', 10),
  },

  session: {
    secret: process.env.SESSION_SECRET,
    resave: parseBoolean(process.env.SESSION_RESAVE, false),
    saveUninitialized: parseBoolean(process.env.SESSION_SAVE_UNINITIALIZED, true),
    maxAge: parseInt(process.env.SESSION_MAX_AGE || '86400000', 10),
  },

  security: {
    bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10),
    corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  },

  apis: {
    newsApi: {
      key: process.env.NEWS_API_KEY || '',
      baseUrl: 'https://newsapi.org/v2',
    },
    huggingface: {
      token: process.env.HUGGINGFACE_API_TOKEN || '',
      baseUrl: 'https://api-inference.huggingface.co',
      modelId: process.env.HUGGINGFACE_MODEL_ID || 'google/gemma-1.1-7b-it',
    },
    openai: {
      apiKey: process.env.OPENAI_API_KEY || '',
      baseUrl: process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1',
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
    },
    priaid: {
      apiKey: process.env.PRIAID_API_KEY || '',
      secretKey: process.env.PRIAID_SECRET_KEY || '',
      baseUrl: 'https://authservice.priaid.ch',
    },
  },

  logging: {
    level: process.env.LOG_LEVEL || 'info',
    format: process.env.LOG_FORMAT || 'json',
  },

  features: {
    enableChatbot: parseBoolean(process.env.ENABLE_CHATBOT, true),
    enableDiseasePrediction: parseBoolean(process.env.ENABLE_DISEASE_PREDICTION, true),
  },
};

validateEnvironment();

export function isProduction() {
  return config.nodeEnv === 'production';
}

export function isDevelopment() {
  return config.nodeEnv === 'development';
}

export default config;
