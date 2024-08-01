import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { FastifyInstance } from 'fastify/types/instance'
import z from 'zod'
import { prisma } from '../lib/prisma'

export async function putProduct(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .put('/products/:productId', {
      schema: {
        summary: 'update a product',
        params: z.object({
          productId: z.string().uuid(),
        }),
        body: z.object({
          name: z.string(),
          description: z.string().nullish(),
          image: z.string().nullish().nullish(),
          expirationDate: z.string().nullish(),
          quantidade: z.number().int().positive(), 
        }),
        response: {
          200: z.object({
            name: z.string(),
            description: z.string().nullish(),
            image: z.string().nullish().nullish(),
            expirationDate: z.string().nullish(),
            quantidade: z.number().int().positive(), 
          }),
        }
      }
    }, async (request, reply) => {
      const { productId } = request.params
      const { name,description,image, expirationDate, quantidade } = request.body

      const product = await prisma.product.findUnique({
        where: {
          id: productId
        }
      })

      if (product === null){
        throw new Error('Product not found')
      }

      await prisma.product.update({
        where: {
          id: productId
        },
        data: {
          name,
          description,
          image, 
          expirationDate, 
          quantidade
        }
      })
      return reply.send({
        name,
        description,
        image, 
        expirationDate, 
        quantidade
      })
    })
}