import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function getProduct(app: FastifyInstance){
  app
    .withTypeProvider<ZodTypeProvider>()
    .get('/products/:productId', {
      schema: {
        params: z.object({
          productId: z.string().uuid(),
        }),
        response: {
          200: z.object({
            product: z.object({
              name: z.string(),
              description: z.string().nullish(),
              image: z.string().nullish().nullish(),
              expirationDate: z.string().nullish(),
              quantidade: z.number().int().positive(), 
            })
          }),
        },
      }
    }, async (request, reply) => {
      const { productId } = request.params

      const product = await prisma.product.findUnique({
        select: {
          name: true,
          description: true,
          image: true,
          expirationDate: true,
          quantidade: true
        },
        where: {
          id: productId,
        }
      })

      if (product == null) {
        throw new Error('Product not found.')
      }

      return reply.send({ product })
    })
}