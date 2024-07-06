import { fastify } from "fastify"
import { serializerCompiler, validatorCompiler  } from "fastify-type-provider-zod"
import { createProduct } from "./routes/create-product";
import { getProduct } from "./routes/get-product";
import { getProducts } from "./routes/get-products";

const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createProduct);
app.register(getProduct)
app.register(getProducts)

app.listen({ port:3333 }).then(()=>console.log("hello"))