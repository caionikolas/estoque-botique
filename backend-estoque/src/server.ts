import { fastify } from "fastify"
import { fastifySwagger } from "@fastify/swagger"
import { fastifySwaggerUi } from "@fastify/swagger-ui"

import { serializerCompiler, validatorCompiler , jsonSchemaTransform } from "fastify-type-provider-zod"
import { createProduct } from "./routes/create-product";
import { getProduct } from "./routes/get-product";
import { getProducts } from "./routes/get-products";

const app = fastify();

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

app.listen({ port:3333 }).then(()=>console.log("hello"))