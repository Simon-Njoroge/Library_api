"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryTable = void 0;
require("dotenv/config");
const pg_core_1 = require("drizzle-orm/pg-core");
exports.LibraryTable = (0, pg_core_1.pgTable)("libraryTable", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    Title: (0, pg_core_1.varchar)("title"),
    Author: (0, pg_core_1.varchar)("author"),
    Year: (0, pg_core_1.varchar)("year")
});
