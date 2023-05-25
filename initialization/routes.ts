//Dependencies
import {Application} from 'express'

//Importing Routes
import homeRoute from '../routes/home'

export default (app: Application): void => {
    app.use('/', homeRoute)
}