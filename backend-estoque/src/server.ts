import { fastify } from "fastify"
import { z } from "zod"
import { PrismaClient } from "@prisma/client"

const app = fastify();

const prisma = new PrismaClient({
  log:['query']
})

app.post('/products', async (request, reply ) => {
  const createProductSchema = z.object({
    name: z.string().min(4),
    description: z.string().nullable(),
    image: z.string().nullable(),
    type: z.string(),
    expirationDate: z.string().nullable(),
    gender: z.string().min(1).nullable(),
    size: z.number().positive().nullable(),
  })

const data = createProductSchema.parse(request.body)

const product = await prisma.product.create({
  data: {
    name: data.name,
    description: data.description,
    image: data.image,
    type: data.type,
    expirationDate: data.expirationDate,
    gender: data.gender,
    size: data.size,
  }
})

  return reply.status(201).send({product})
})

app.listen({ port:3333 }).then(()=>console.log("hello"))