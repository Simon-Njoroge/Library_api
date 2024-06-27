import {eq} from "drizzle-orm"
import {db} from '../drizzle/db'
import { LibraryTable , TIbook} from "../drizzle/schema"

export const libraryservice=async (limit?: number)=>{
    if(limit){
        return await db.query.LibraryTable.findMany({
            limit: limit,
        });
    }
   return await db.query.LibraryTable.findMany()
    }
export const getLibrarybookservice= async(id:number)=>{
  return await db.query.LibraryTable.findFirst({
    where: eq(LibraryTable.id,id)
  })
}

export const Createbook = async(book:TIbook)=>{
    await db.insert(LibraryTable).values(book)
    return "book created successfully"
}
export const updatebook= async(id:number,bookI:TIbook)=>{
    await db.update(LibraryTable).set(bookI).where(eq(LibraryTable.id,id))
    return "updated successfuly"
}

export const deletebook = async(id:number)=>{
    await db.delete(LibraryTable).where(eq(LibraryTable.id,id))
    return "deleted successfully"
} 