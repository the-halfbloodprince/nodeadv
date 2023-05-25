import { pgTable, serial, text, varchar, integer } from 'drizzle-orm/pg-core'
import { InferModel } from 'drizzle-orm'
import { z } from 'zod'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { cities } from './city'
import { countries } from './country'

// User
export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    fullName: text('full_name'),
    phone: varchar('phone', { length: 12 }),
    city: integer('city_id').references(() => cities.id),
    country: integer('country_id').references(() => countries.id)
})

export type User = InferModel<typeof users>
export const insertUserSchema = createInsertSchema(users)
export const updateUserSchema = createSelectSchema(users)