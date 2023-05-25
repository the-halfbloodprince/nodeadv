import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { Application } from 'express'
import { appConfig } from '../config'

export default function initializeDB(app: Application, connectionString?: string) {
    
    // console.log('conn string:')
    // console.log(connectionString || appConfig.dbUrl)

    // set the query client
    const queryClient = postgres(connectionString || appConfig.dbUrl)
    const db = drizzle(queryClient)
    appConfig.db = db

    // set the migration client [POOL_SIZE = 1]
    const migrationDBClient = postgres(connectionString || appConfig.dbUrl, { max: 1 })
    appConfig.migrationDBClient = drizzle(migrationDBClient)

    console.log('database connected...')
}
