"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updatebooks = exports.Createbooks = exports.getLibrarybookservices = exports.libraryservices = void 0;
const library_service_1 = require("./library.service");
const libraryservices = async (c) => {
    try {
        const books = await (0, library_service_1.libraryservice)();
        if (books == null || books.length == 0) {
            return c.text("user not found", 404);
        }
        return c.json(books, 200);
    }
    catch (err) {
        return c.json({ err: err?.message }, 400);
    }
};
exports.libraryservices = libraryservices;
const getLibrarybookservices = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) {
            return c.text("Invalid id", 400);
        }
        const Lbook = await (0, library_service_1.getLibrarybookservice)(id);
        if (Lbook == null) {
            return c.text("book not found", 404);
        }
        return c.json(Lbook, 200);
    }
    catch (err) {
        return c.json({ err: err?.message }, 400);
    }
};
exports.getLibrarybookservices = getLibrarybookservices;
const Createbooks = async (c) => {
    try {
        const bokitem = await c.req.json();
        const createb = await (0, library_service_1.Createbook)(bokitem);
        if (!createb) {
            return c.text("Failed to create user", 400);
        }
        return c.json({ msg: library_service_1.Createbook }, 201);
    }
    catch {
        return c.json({ err: "Failed to create user" }, 400);
    }
};
exports.Createbooks = Createbooks;
const updatebooks = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) {
        return c.text("Invalid Id", 400);
    }
    const Bbook = await c.req.json();
    try {
        const searchBook = await (0, library_service_1.getLibrarybookservice)(id);
        if (searchBook == undefined) {
            return c.text("User not found", 404);
        }
        const res = await (0, library_service_1.updatebook)(id, Bbook);
        if (!res) {
            return c.text("state not updated", 404);
        }
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ err: error?.message }, 400);
    }
};
exports.updatebooks = updatebooks;
const deleteBook = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) {
        return c.text("Invalid Id", 400);
    }
    try {
        const MBook = await (0, library_service_1.getLibrarybookservice)(id);
        if (MBook == undefined) {
            return c.text("User not found", 404);
        }
        const res = await (0, library_service_1.deletebook)(id);
        if (!res) {
            return c.text("state not updated", 404);
        }
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ err: error?.message }, 400);
    }
};
exports.deleteBook = deleteBook;
