"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const constants_1 = require("../../constants");
const dbConfig = (configService) => {
    return {
        username: configService.get("DB_USER"),
        password: configService.get("DB_PASS"),
        database: configService.get("DB_NAME"),
        host: configService.get("DB_HOST"),
        port: configService.get("DB_PORT"),
        dialect: configService.get("DB_DIALECT"),
        autoLoadModels: true,
        synchronize: configService.get("NODE_ENV") === constants_1.DEVELOPMENT,
    };
};
exports.dbConfig = dbConfig;
//# sourceMappingURL=database.config.js.map