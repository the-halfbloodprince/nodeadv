import { Pool } from 'pg'
import { appConfig } from '../config'

const initializeDBPool = () => {
    const pool = new Pool(appConfig.dbUrl)
    appConfig.pool = pool
}

export default initializeDBPool