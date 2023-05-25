import { PrismaClient } from "@prisma/client";
import { appConfig } from '../config'

export default function initializeDB() {

    const prisma = new PrismaClient()
    
    appConfig.db = prisma

    testClient()
}

const testClient = async () => {
    try {
        const allUsers = await appConfig.db.user.findMany()
        console.log('Fetching all users to test DB connection')
        console.log(allUsers)
        console.log('\x1b[92m --- DATABASE CONNECTION VERIFIED SUCCESSFULLY --- \x1b[0m')
    } catch {
        console.log('\x1b[91m --- DB CONNECTION VERIFICATION FAILED --- \x1b[0m')
    }
}