import { Options } from 'sequelize'

const dbSettings: Options = {
    host: 'localhost',
    port: 5432,
    database: 'dev1',
    username: 'mkdjff',
    password: 'xD'
}

export const appConfig = {
    dbSettings,
    pool: null
}