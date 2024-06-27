import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import {books} from './libraryTable/library.router'
import { cors } from 'hono/cors'
const app = new Hono()

app.use('/api/*', cors())
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route("/api",books)
const port = 8000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT)
})
