//Import dependencies
import express, { Application } from 'express'
import * as dotenv from 'dotenv'

//Local dependencies
import routeInitializer from './initialization/routes'
import initializeGraphQL from './initialization/graphQL'
import initializeDB from './initialization/db'
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

    //App Listening
    app.listen(port, (): void => {
        console.log(`\x1b[92m --- SERVER UP AND RUNNING ON PORT ${port} --- \x1b[0m`)
    })
}

runApp()