import {config} from 'dotenv';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

config();

export const IP = process.env.APP_URL || '127.0.0.1';
export const PORT = process.env.PORT || 4000;
export const APP_URL = process.env.APP_URL || `http://${IP}:${PORT}`;
export const MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'startkit';
export const MONGO_URI = process.env.MONGO_URI || `mongodb://localhost:27017/${MONGO_DB_NAME}`;
export const MONGO_USER = process.env.MONGO_USER || '';
export const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';

export const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
export const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '1h';
export const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'your_jwt_refresh_secret';
export const JWT_REFRESH_EXPIRATION = process.env.JWT_REFRESH_EXPIRATION || '30d';

export const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';
export const REDIS_PORT = process.env.REDIS_PORT || 6379;
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD || '';
export const REDIS_DB = process.env.REDIS_DB || 0;
export const REDIS_TTL = process.env.REDIS_TTL || 3600; // 1 hour
export const REDIS_CACHE_ENABLED = process.env.REDIS_CACHE_ENABLED === 'true' || false;

export const LOG_LEVEL = process.env.LOG_LEVEL || 'info';
export const LOG_FORMAT = process.env.LOG_FORMAT || 'combined';
export const LOG_FILE = process.env.LOG_FILE || 'app.log';
export const LOG_DIR = process.env.LOG_DIR || 'logs';
export const LOG_MAX_SIZE = process.env.LOG_MAX_SIZE || '10m'; // 10 MB
export const LOG_MAX_FILES = process.env.LOG_MAX_FILES || '14d'; // 14 days

export const CORS_ENABLED = process.env.CORS_ENABLED === 'true' || false;
export const CORS_ORIGIN = process.env.CORS_ORIGIN || ['http://127.0.0.1:3000', 'http://localhost:3000'];
export const CORS_METHODS = process.env.CORS_METHODS || ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'];
export const CORS_ALLOWED_HEADERS = process.env.CORS_ALLOWED_HEADERS || ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'];
export const CORS_EXPOSE_HEADERS = process.env.CORS_EXPOSE_HEADERS || ['Content-Length', 'Authorization'];


export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
