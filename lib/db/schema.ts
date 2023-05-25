import { pgEnum, pgTable, serial, text, integer, varchar, uniqueIndex } from 'drizzle-orm/pg-core'

// User
export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    fullName: text('full_name'),
    phone: varchar('phone', { length: 12 })
})

// Popularity
export const popularity = pgEnum('popularity', ['underrated', 'known', 'famous'])

// Cities
export const cities = pgTable('cities', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }),
    country: integer('country_id').references(() => countries.id),
    popularity: popularity('popularity')
})

// Countries
export const countries = pgTable('countries', {
        id: serial('id').primaryKey(),
        name: varchar('name', { length: 255 }),
    }, (countries) => {
        return {
            nameIndex: uniqueIndex('name_idx').on(countries.name)
        }
    }
)