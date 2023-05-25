import type { PrismaClient } from '@prisma/client'
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js'

type AppConfig = {
    db: PrismaClient
}

export const appConfig: AppConfig = {
    db: null
}