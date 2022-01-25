import { resolve } from "path";
import { Module } from "@nestjs/common";
import { ConfigModule as NestConfigModule } from "@nestjs/config";
import { IS_PRODUCTION } from "@common/node";

import { SCHEMA_ENV } from "./config/env";
import { ApiModule } from "./api/api-module";
import { ConfigModule } from "./config/config-module";

const PATH_ROOT = resolve(__dirname, "../");

@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: [
        resolve(PATH_ROOT, ".test.env"),
        resolve(PATH_ROOT, ".env"),
      ],
      cache: true,
      ignoreEnvFile: IS_PRODUCTION,
      validationSchema: SCHEMA_ENV,
    }),
    ConfigModule,
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
