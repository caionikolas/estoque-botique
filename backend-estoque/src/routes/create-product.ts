import { ZodTypeProvider } from "fastify-type-provider-zod"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import { FastifyInstance } from "fastify"

export async function createProduct(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .post('/products', {
      schema: {
        summary: 'Create um product',
        body: z.object({
          name: z.string({ invalid_type_error: 'O nome precisa ser um texto' }).min(4),
          description: z.string().nullish(),
          image: z.string().nullish(),
          expirationDate: z.string().nullish(),
          tag: z.number().positive().int(),
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
          tag,
          quantidade,
        } = request.body

        const product = await prisma.product.create({
          data: {
            name,
            description,
            image,
            expirationDate,
            tag,
            quantidade
          }
        })

        return reply.status(201).send({ productId: product.id })
      })
}

