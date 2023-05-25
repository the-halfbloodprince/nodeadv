import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { Application } from 'express'
import { appConfig } from '../config'

export default function initializeDB(app: Application, connectionString?: string) {

    // set the query client
    const queryClient = postgres(connectionString || appConfig.dbUrl)
    const db = drizzle(queryClient)
    appConfig.db = db

    console.log('database connected...')
}
