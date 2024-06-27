import "dotenv/config"
import {pgTable,varchar, serial, primaryKey} from "drizzle-orm/pg-core"

export const LibraryTable = pgTable("libraryTable",{
    id: serial("id").primaryKey(),
    Title: varchar("title"),
    Author: varchar("author"),
    Year:varchar("year")
})

export type TIbook = typeof LibraryTable.$inferInsert
export type Tsbook = typeof LibraryTable.$inferSelect