module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME_DEVELOPMENT,
        host: process.env.DB_HOST,
        dialect: "postgres",
        port: process.env.DB_PORT
    }
};
//# sourceMappingURL=config.js.map