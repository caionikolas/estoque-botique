import { fastify } from "fastify"

const app = fastify();

app.post('/products', (request, reply ) => {
  console.log(request.body)

  
  return "hello"
})

app.listen({ port:3333 }).then(()=>console.log("hello"))