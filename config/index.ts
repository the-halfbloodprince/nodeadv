// import { Options } from 'sequelize'
// import type { PrismaClient } from '@prisma/client'
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js'

// const dbSettings: Options = {
//     host: 'localhost',
//     port: 5432,
//     database: 'dev1',
//     username: 'mkdjff',
//     password: 'xD'
// }

// export const appConfig = {
//     dbSettings,
//     pool: null
// }

type AppConfig = {
    // Prisma
    // db: PrismaClient

    // Drizzle
    dbUrl: string
    db: PostgresJsDatabase
    migrationDBClient?: PostgresJsDatabase
}

export const appConfig: AppConfig = {
    dbUrl: null,
    db: null
}