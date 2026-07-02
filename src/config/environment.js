import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config();

// Define required environment variables
const REQUIRED_VARS = [
  'DB_USER',
  'DB_HOST',
  'DB_NAME',
  'DB_PASSWORD',
  'DB_PORT',
  'NODE_ENV',
  'PORT',
  'SESSION_SECRET'
];

// Validate that all required environment variables are set
function validateEnvironment() {
  const missing = [];
  
  for (const variable of REQUIRED_VARS) {
    if (!process.env[variable]) {
      missing.push(variable);
    }
  }
  
  if (missing.length > 0) {
    console.error('❌ Missing required environment variables:');
    missing.forEach(v => console.error(`   - ${v}`));
    console.error('\n📋 Please copy .env.example to .env and fill in the values.');
    process.exit(1);
  }
  
  console.log('✓ All required environment variables are configured');
}

// Configuration object with all environment variables
export const config = {
  // Application
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000', 10),
  appName: process.env.APP_NAME || 'ARTIC Health Companion',
  
  // Database
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
  
  // Session
  session: {
    secret: process.env.SESSION_SECRET,
    resave: process.env.SESSION_RESAVE === 'true' || false,
    saveUninitialized: process.env.SESSION_SAVE_UNINITIALIZED === 'true' || true,
    maxAge: parseInt(process.env.SESSION_MAX_AGE || '86400000', 10), // 24 hours
  },
  
  // Security
  security: {
    bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10),
    corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  },
  
  // APIs
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
    priaid: {
      apiKey: process.env.PRIAID_API_KEY || '',
      secretKey: process.env.PRIAID_SECRET_KEY || '',
      baseUrl: 'https://authservice.priaid.ch',
    },
  },
  
  // Logging
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    format: process.env.LOG_FORMAT || 'json',
  },
  
  // Feature flags
  features: {
    enableChatbot: process.env.ENABLE_CHATBOT === 'true' || true,
    enableDiseasePrediction: process.env.ENABLE_DISEASE_PREDICTION === 'true' || true,
  },
};

// Validate environment on startup
validateEnvironment();

// Helper function to check if production
export function isProduction() {
  return config.nodeEnv === 'production';
}

// Helper function to check if development
export function isDevelopment() {
  return config.nodeEnv === 'development';
}

export default config;
