import { Request, Response, NextFunction } from 'express'

export const getHome = (req: Request, res: Response, next: NextFunction): void => {
    res.send('Welcome to my app!')
}