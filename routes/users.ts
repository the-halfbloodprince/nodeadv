import express from 'express'

import { getAllUsers, addNewUser, updateUser } from '../controllers/users'

const router = express.Router()

router.get('/', getAllUsers)
router.post('/add', addNewUser)
router.put('/update', updateUser)

export default router