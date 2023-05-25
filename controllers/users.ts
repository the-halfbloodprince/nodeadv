import { Request, Response } from "express";
import { appConfig as app } from "../config";
import { insertUserSchema, updateUserSchema, users } from "../models/user";

export const getAllUsers = async (req: Request, res: Response) => {
    const allUsers = await app.db.select().from(users)
    res.send(allUsers)
}

export const addNewUser = async (req: Request, res: Response) => {
    const newUserFromReq = req.body
    insertUserSchema.parse(newUserFromReq)
    await app.db.insert(users).values(newUserFromReq)
}

export const updateUser = async (req: Request, res: Response) => {
    const userFromReq = req.body
    updateUserSchema.parse(userFromReq)
    await app.db.update(users).set(userFromReq)
}