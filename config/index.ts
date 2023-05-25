import type { PrismaClient } from '@prisma/client'

type AppConfig = {
    dbUrl: string
    db: PrismaClient
}

export const appConfig: AppConfig = {
    dbUrl: null,
    db: null
}