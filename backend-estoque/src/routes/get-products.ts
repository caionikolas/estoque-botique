import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../lib/prisma";

export async function getProducts(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .get('/products', {
      schema: {
        summary: 'get all products',
        querystring: z.object({
          query: z.string().nullish(),
          pageIndex: z.string().nullish().default('0').transform(Number), 
        }),
        response: {
          200: z.object({
            products: z.array(
              z.object({
                id: z.string().uuid(),
                name: z.string(),
                description: z.string().nullish(),
                image: z.string().nullish().nullish(),
                expirationDate: z.string().nullish(),
                quantidade: z.number().int().positive(),
              })
            )
          })
        },
      }
    }, async (request, reply) => {
      const { pageIndex, query } = request.query

      const products = await prisma.product.findMany({
        orderBy: {
          expirationDate: "asc",
        },
        select: {
          id: true,
          name: true,
          description: true,
          image: true,
          expirationDate: true,
          quantidade: true,
        },
        take: 10,
        skip: pageIndex * 10,
        where: query ? {
          name: {
            contains: query
          }
        } : {},
      })

      return reply.send({ 
        products: products.map(product => {
          return {
            id: product.id,
            name: product.name,
            description: product.description,
            image: product.image,
            expirationDate: product.expirationDate,
            quantidade: product.quantidade,
          }
        })
       })
    })
}