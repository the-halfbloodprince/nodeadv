import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'
import * as dotenv from 'dotenv'

const up_migrate = async () => {

    dotenv.config()

    const postgresClient = postgres(process.env.DATABASE_URL, { max: 1 })
    const db = drizzle(postgresClient)
    
    await migrate(db, { migrationsFolder: 'migrations' })
    console.log('Applied migration successfully')
    postgresClient.end()
    
}

up_migrate()