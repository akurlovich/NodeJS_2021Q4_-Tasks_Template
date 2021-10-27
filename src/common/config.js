// import dotenv from 'dotenv';
// import path from 'path';

// const { dotenv } = pkg;
// dotenv.config({
//   path: path.join(__dirname, '../../.env')
// });

// export default {
//   PORT: process.env.PORT,
//   NODE_ENV: process.env.NODE_ENV,
//   MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
//   JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
//   AUTH_MODE: process.env.AUTH_MODE === 'true'
// };

export default {
  PORT: 4000,
  NODE_ENV: 'development',
  MONGO_CONNECTION_STRING: 'your-mongo-db-connection-string',
  JWT_SECRET_KEY: 'secret-key',
  AUTH_MODE: process.env.AUTH_MODE === 'true'
};
