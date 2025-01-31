import { CorsOptions } from 'cors';

const corsOptions: CorsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

export default corsOptions;