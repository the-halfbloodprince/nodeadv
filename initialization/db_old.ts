import { Pool } from 'pg'
import appConfig from '../config'

const initializeDBPool = () => {
    const pool = new Pool({
        user: 'mkdjff',
        host: 'localhost',
        port: 5432,
        database: 'dev1',
        password: 'xD'
    })

    appConfig.pool = pool
}

export default initializeDBPool