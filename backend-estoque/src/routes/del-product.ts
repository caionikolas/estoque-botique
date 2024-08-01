import { ZodTypeProvider } from "fastify-type-provider-zod";
import { FastifyInstance } from "fastify/types/instance";
import z from "zod";
import { prisma } from "../lib/prisma";

export async function delProduct (app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .delete('/products/:productId', {
      schema: {
        summary: 'delete a product',
        params: z.object({
          productId: z.string().uuid()
        })
      }
    }, async (request, reply) => {
      const { productId } = request.params

      const product = await prisma.product.findUnique({
        where: {
          id: productId
        }
      })

      if (product === null){
        throw new Error('Product not found')
      }

      await prisma.product.delete({
        where: {
          id: productId
        }
      })
      return reply.status(204)
    })
}