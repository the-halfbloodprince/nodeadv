import { Options } from 'sequelize'

const dbSettings__sample: Options = {
    host: 'localhost',
    port: 5432,
    database: 'dev1',
    username: 'mkdjff',
    password: 'xD'
}

type AppConfig = {
    dbSettings?: Options
    dbUrl: string
    pool: any
}

export const appConfig: AppConfig = {
    dbUrl: null,
    dbSettings: null,
    pool: null
}