import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common'
import { db } from '@repo/database'

@Injectable()
export class PrismaService extends (db.constructor as new () => typeof db) implements OnModuleInit, OnModuleDestroy {
  onModuleInit() {
    return db.$connect()
  }
  onModuleDestroy() {
    return db.$disconnect()
  }
}
