import { SequelizeModuleOptions } from "@nestjs/sequelize";
import { ConfigService } from "@nestjs/config";
import { DEVELOPMENT } from "../../constants";

export const dbConfig = (configService: ConfigService) => {
  return {
    username: configService.get("DB_USER"),
    password: configService.get("DB_PASS"),
    database: configService.get("DB_NAME"),
    host: configService.get("DB_HOST"),
    port: configService.get("DB_PORT"),
    dialect: configService.get("DB_DIALECT"),
    autoLoadModels: true,
    synchronize: configService.get("NODE_ENV") === DEVELOPMENT,
  } as SequelizeModuleOptions;
};
