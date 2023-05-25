//Import dependencies
import express, { Application } from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

//Local dependencies
import routeInitializer from './initialization/routes'
import initializeDBPool from './initialization/db_old'
import initializeGraphQL from './initialization/graphQL'
// import { initializeDB } from './initialization/db_prisma'
import { initializeDB } from './initialization/db_drizzle'
import * as dotenv from 'dotenv'
import { appConfig } from './config'

dotenv.config()

async function runApp() {
    //Initialise app
    const app = express()
    const port = process.env.PORT || 8000

    //Initialize routes
    routeInitializer(app)

    if (!process.env.DATABASE_URL) {
        throw('database url not specified')
    }

    appConfig.dbUrl = process.env.DATABASE_URL

    initializeDB(app)
    await initializeGraphQL(app)
    // initializeDBPool()

    //App Listening
    app.listen(port, (): void => {
        console.log(`\x1b[92m --- SERVER UP AND RUNNING ON PORT ${port} --- \x1b[0m`)
    })
}

runApp()