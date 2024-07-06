import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../lib/prisma";

export async function getProducts(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .get('/products', {
      schema: {
        response: {}
      }
    }, async (request, reply) => {
      const products = await prisma.product.findMany()

      console.log(products)

      return reply.send({ products })
    })
}