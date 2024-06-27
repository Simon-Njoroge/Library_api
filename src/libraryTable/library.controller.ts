import { Context } from "hono";
import {libraryservice,getLibrarybookservice,Createbook,updatebook,deletebook} from './library.service'

export const libraryservices = async (c:Context)=>{
    try{
        const books = await libraryservice()
        if(books == null || books.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(books,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getLibrarybookservices = async (c:Context) =>{
    try{
        const id = parseInt(c.req.param("id"));
        if(isNaN(id)){
            return c.text("Invalid id", 400)
        }
        const Lbook = await  getLibrarybookservice (id);
        if(Lbook == null){
            return c.text("book not found", 404)
        }
        return c.json(Lbook,200)
    }
    catch (err:any){
        return c.json({err: err?.message},400)
    }
}

export const Createbooks= async(c:Context)=>{
    try{
        const bokitem=await c.req.json();
        const createb = await Createbook(bokitem);
        if(!createb){
            return c.text("Failed to create user", 400)
        }
        return c.json({msg: Createbook},201)
    }
    catch{
        return c.json({err: "Failed to create user"},400)
    }
    }
    export const updatebooks=async(c:Context)=>{
        const id = parseInt(c.req.param("id"));
        if(isNaN(id)){
            return c.text("Invalid Id",400)
        }
        const Bbook= await c.req.json();
        try{
            const searchBook= await getLibrarybookservice(id);
            if (searchBook == undefined){
                return c.text("User not found",404)
            }
            const res= await updatebook(id,Bbook)
            if(!res){
                return c.text("state not updated", 404);
            }
            return c.json({msg:res},201)
        }
        catch(error:any){
            return c.json({err:error?.message},400)
        }
    }
    export const deleteBook= async(c:Context)=>{
        const id = parseInt(c.req.param("id"));
        if(isNaN(id)){
            return c.text("Invalid Id",400)
        }
        try{
            const MBook = await  getLibrarybookservice(id);
            if (MBook == undefined){
                return c.text("User not found",404)
            }
            const res = await deletebook(id)
            if(!res){
                return c.text("state not updated", 404);
            }
            return c.json({msg:res},201)
        }
        catch(error:any){
            return c.json({err:error?.message},400)
        }
    }