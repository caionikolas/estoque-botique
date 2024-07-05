import { fastify } from "fastify"
import { serializerCompiler, ZodTypeProvider, validatorCompiler  } from "fastify-type-provider-zod"
import { z } from "zod"
import { PrismaClient } from "@prisma/client"

const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

const prisma = new PrismaClient({
  log:['query']
})

app
  .withTypeProvider<ZodTypeProvider>()
  .post('/products', {
    schema: {
      body: z.object({
        name: z.string().min(4),
        description: z.string().nullish(),
        image: z.string().nullish(),
        expirationDate: z.string().nullish(),
    }),
    response: {
      201: z.object({
        name: z.string(),
      }),
    },
    }
  },async (request, reply ) => { 
    const {
        name,
        description,
        image,
        expirationDate,
      } = request.body

      const product = await prisma.product.create({
        data: {
          name,
          description,
          image,
          expirationDate,
        }
      })

      return reply.status(201).send({ name: product.name })
    })

app.listen({ port:3333 }).then(()=>console.log("hello"))