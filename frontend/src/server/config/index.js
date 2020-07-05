import dotenv from 'dotenv';

dotenv.config();

const { ENV, PORT, API_URL } = process.env;

export default {
  env: ENV,
  port: PORT,
  api_url: API_URL,
};
