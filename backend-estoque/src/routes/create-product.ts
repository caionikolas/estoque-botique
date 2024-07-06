import { ZodTypeProvider } from "fastify-type-provider-zod"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import { FastifyInstance } from "fastify"

export async function createProduct(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .post('/products', {
      schema: {
        body: z.object({
          name: z.string().min(4),
          description: z.string().nullish(),
          image: z.string().nullish(),
          expirationDate: z.string().nullish(),
          quantidade: z.number().positive().int(),
      }),
      response: {
        201: z.object({
          productId: z.string().uuid(),
        }),
      },
      }
    },async (request, reply ) => { 
      const {
          name,
          description,
          image,
          expirationDate,
          quantidade,
        } = request.body

        const product = await prisma.product.create({
          data: {
            name,
            description,
            image,
            expirationDate,
            quantidade
          }
        })

        return reply.status(201).send({ productId: product.id })
      })
}

