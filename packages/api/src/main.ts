import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as dotenv from "dotenv";

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  // global prefix
  app.setGlobalPrefix("/api/v1");
  await app.listen(process.env.PORT);
}
bootstrap();
