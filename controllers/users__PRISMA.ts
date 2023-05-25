// import { Request, Response } from "express"
// import type { PrismaClient, User } from '@prisma/client'
// import { appConfig as app } from "../config"

// export const getAllUsers = async (req: Request, res: Response) => {
//     try {
//         const allUsers = await app.db.user.findMany()
//         res.send(allUsers)
//     } catch (ex) {
//         res.status(500).send('Couldnt retrieve data from db')
//     }
// }

// export const addNewUser = async (req: Request, res: Response) => {
//     try {
//         await app.db.user.create({
//             data: {
//                 name: 'mkd',
//                 email: 'manissdsh@ghui.com',
//                 roll_no: '19gg20017',
//                 posts: {
//                     create: { title: 'first post' },
//                 },
//                 profile: {
//                     create: { bio: 'I love penguing' }
//                 }
//             }
//         })
//         res.send('Added')
//     } catch (ex) {
//         res.status(500).send(ex)
//     }
// }

// export const updateUser = async (req: Request, res: Response) => {
//     try {
//         const user = await app.db.user.update({
//             where: { id: 1 },
//             data: { roll_no: '19xx20909' }
//         })
//         res.send(user)
//     } catch(ex) {
//         res.send(500).send(ex)
//     }
// }