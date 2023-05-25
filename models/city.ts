import { pgTable, serial, integer, varchar } from 'drizzle-orm/pg-core'
import { InferModel } from 'drizzle-orm'
import { z } from 'zod'
import { createInsertSchema } from 'drizzle-zod'
import { popularity } from './popularity'
import { countries } from '../lib/db/schema'

// Cities
export const cities = pgTable('cities', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }),
    country: integer('country_id').references(() => countries.id),
    popularity: popularity('popularity')
})

export type City = InferModel<typeof cities>
export const insertCitySchema = createInsertSchema(cities)