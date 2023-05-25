//Import dependencies
import express from 'express'

//Create Router
const router = express.Router()

//Import Controllers
import { getHome } from '../controllers/home'

router.get('/', getHome)

export default router