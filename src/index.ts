import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import {books} from './libraryTable/library.router'
import { readFileSync } from 'fs'
import { cors } from 'hono/cors'
const app = new Hono()

app.use('/api/*', cors())
app.get('/', async (c)=>{
  try{
    let html =readFileSync('./index.html', "utf-8");
    return c.html(html);
  }catch(error: any){
    return c.json ({error: error.message, status:500})
  }
})



app.route("/api",books)
const port = 8000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT)
})
