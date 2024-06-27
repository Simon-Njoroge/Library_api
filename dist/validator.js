"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookValidator = void 0;
const zod_1 = require("zod");
exports.bookValidator = zod_1.z.object({
    id: zod_1.z.number(),
    Title: zod_1.z.string(),
    Author: zod_1.z.string(),
    Year: zod_1.z.string()
});
