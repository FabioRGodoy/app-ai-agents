import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { db } from "@repo/database";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: "PRISMA",
      useValue: db,
    }
  ],
})
export class AppModule { }
