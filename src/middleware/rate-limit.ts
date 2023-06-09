import rateLimit from "express-rate-limit";
export const limiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: true,
});
