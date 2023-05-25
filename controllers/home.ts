import { Request, Response, NextFunction } from 'express'
import { appConfig } from '../config'

export const getHome = (req: Request, res: Response, next: NextFunction): void => {
    
    const dbPool = appConfig.pool

    dbPool
        .query('select name from students')
        .then(respn => {
            const names = []
            console.log(respn.rows)
            for (const row of respn.rows) {
                names.push(row['name'])
                // console.log(typeof row)
                // console.log(row)
            }
            res.send(names)
            // res.send('ok')
        })
        .catch(err => res.status(500).send('error'))
}