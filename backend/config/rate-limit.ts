import { rateLimit } from 'express-rate-limit';

export const apiLimiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 4,
  message: 'Too many requests, please try again later.',
  standardHeaders: true,
  legacyHeaders: false
});