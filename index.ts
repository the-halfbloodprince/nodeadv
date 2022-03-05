//Import dependencies
import express from 'express'

//Local dependencies
import routeInitializer from './initialization/routes'

//Initialise app
const app = express()
const port = process.env.PORT || 8000

//Initialize routes
routeInitializer(app)

//App Listening
app.listen(port, (): void => {
    console.log(`listening on port ${port}`)
})