import dotenv from 'dotenv';
import path from 'path';

const __dirname = path.resolve();
dotenv.config({
  path: path.join(__dirname, '../../.env')
});

export default {
  PORT: process.env['PORT'] || 4000,
  NODE_ENV: process.env['NODE_ENV'],
  MONGO_CONNECTION_STRING: process.env['MONGO_CONNECTION_STRING'],
  JWT_SECRET_KEY: process.env['JWT_SECRET_KEY'],
  AUTH_MODE: process.env['AUTH_MODE'] === 'true'
};
