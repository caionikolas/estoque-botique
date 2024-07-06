import { fastify } from "fastify"
import { fastifySwagger } from "@fastify/swagger"
import { fastifySwaggerUi } from "@fastify/swagger-ui"
import fastifyCors from "@fastify/cors"

import { serializerCompiler, validatorCompiler , jsonSchemaTransform, ZodTypeProvider } from "fastify-type-provider-zod"
import { createProduct } from "./routes/create-product";
import { getProduct } from "./routes/get-product";
import { getProducts } from "./routes/get-products";
import { errorHandler } from "./error-handler";

export const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: '*',
})

app.register(fastifySwagger, {
  swagger: {
    consumes: ['application/json'],
    produces: ['application/json'],
    info: {
      title: 'Estoque Botique',
      description: 'Especificações da API para o bckend da aplicação de estoque',
      version: '1.0.0'
    }
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createProduct);
app.register(getProduct)
app.register(getProducts)

app.setErrorHandler(errorHandler)

app.listen({ port:3333, host: '0.0.0.0' }).then(()=>console.log("hello"))