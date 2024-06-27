import {Hono} from 'hono'
import {zValidator} from "@hono/zod-validator"
import {bookValidator} from '../validator'
import {libraryservices,getLibrarybookservices,Createbooks,updatebooks,deleteBook} from './library.controller'

export const books = new Hono()

books.get("/book",libraryservices)

books.get("/book/:id",getLibrarybookservices)


books
.post("/bookinsert",zValidator("json",bookValidator,(result,c)=>{
    if(!result.success){
       return c.json(result.error,400)
    }
}),Createbooks)

books.put("/bookupdate/:id",updatebooks)

books.delete("/bookdelete/:id",deleteBook)