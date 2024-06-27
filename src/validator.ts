import {z} from "zod"

export const bookValidator = z.object({
    id:z.number(),
    Title: z.string(),
    Author: z.string(),
    Year: z.string()
})