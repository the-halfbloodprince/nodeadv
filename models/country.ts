import { pgTable, serial, varchar, uniqueIndex } from 'drizzle-orm/pg-core'
import { InferModel } from 'drizzle-orm'
import { z } from 'zod'
import { createInsertSchema } from 'drizzle-zod'

// countries
export const countries = pgTable('countries', {
        id: serial('id').primaryKey(),
        name: varchar('name', { length: 255 }),
    }, (countries) => {
        return {
            nameIndex: uniqueIndex('name_idx').on(countries.name)
        }
    }
)

export type Country = InferModel<typeof countries>
export const insertCitySchema = createInsertSchema(countries)