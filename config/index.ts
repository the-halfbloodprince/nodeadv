import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js'

type AppConfig = {
    dbUrl: string
    db: PostgresJsDatabase
}

export const appConfig: AppConfig = {
    dbUrl: null,
    db: null
}