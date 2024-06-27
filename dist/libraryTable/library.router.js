"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.books = void 0;
const hono_1 = require("hono");
const zod_validator_1 = require("@hono/zod-validator");
const validator_1 = require("../validator");
const library_controller_1 = require("./library.controller");
exports.books = new hono_1.Hono();
exports.books.get("/book", library_controller_1.libraryservices);
exports.books.get("/book/:id", library_controller_1.getLibrarybookservices);
exports.books
    .post("/bookinsert", (0, zod_validator_1.zValidator)("json", validator_1.bookValidator, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), library_controller_1.Createbooks);
exports.books.put("/bookupdate/:id", library_controller_1.updatebooks);
exports.books.delete("/bookdelete/:id", library_controller_1.deleteBook);
