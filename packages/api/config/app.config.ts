export const config = () => ({
  NODE_ENV: process.env.NODE_ENV || "development",
  JWTKEY: process.env.JWTKEY,
  TOKEN_EXPIRATION: process.env.TOKEN_EXPIRATION,
  BEARER: process.env.BEARER,
  PORT: Number(process.env.PORT),
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: Number(process.env.DB_PORT),
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_DIALECT: process.env.DB_DIALECT,
});
