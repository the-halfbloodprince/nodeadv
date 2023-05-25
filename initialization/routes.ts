//Dependencies
import {Application} from 'express'

//Importing Routes
import homeRoute from '../routes/home'
import usersRoute from '../routes/users'

export default (app: Application): void => {
    app.use('/', homeRoute)
    app.use('/users', usersRoute)
}