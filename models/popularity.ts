import { pgEnum } from 'drizzle-orm/pg-core'

export const popularity = pgEnum('popularity', ['underrated', 'known', 'famous'])