import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CoffiesController } from "./modules/coffies/coffies.controller";
import { CoffiesModule } from "./modules/coffies/coffies.module";
import { DatabaseModule } from "./modules/database/database.module";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    CoffiesModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController, CoffiesController],
  providers: [AppService],
})
export class AppModule {}
