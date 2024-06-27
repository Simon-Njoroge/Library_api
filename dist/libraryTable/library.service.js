"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletebook = exports.updatebook = exports.Createbook = exports.getLibrarybookservice = exports.libraryservice = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const libraryservice = async (limit) => {
    if (limit) {
        return await db_1.db.query.LibraryTable.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.LibraryTable.findMany();
};
exports.libraryservice = libraryservice;
const getLibrarybookservice = async (id) => {
    return await db_1.db.query.LibraryTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.LibraryTable.id, id)
    });
};
exports.getLibrarybookservice = getLibrarybookservice;
const Createbook = async (book) => {
    await db_1.db.insert(schema_1.LibraryTable).values(book);
    return "book created successfully";
};
exports.Createbook = Createbook;
const updatebook = async (id, bookI) => {
    await db_1.db.update(schema_1.LibraryTable).set(bookI).where((0, drizzle_orm_1.eq)(schema_1.LibraryTable.id, id));
    return "updated successfuly";
};
exports.updatebook = updatebook;
const deletebook = async (id) => {
    await db_1.db.delete(schema_1.LibraryTable).where((0, drizzle_orm_1.eq)(schema_1.LibraryTable.id, id));
    return "deleted successfully";
};
exports.deletebook = deletebook;
