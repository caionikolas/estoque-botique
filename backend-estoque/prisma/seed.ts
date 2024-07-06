import { prisma } from "../src/lib/prisma"

async function seed() {
  await prisma.product.create({
    data: {
      id: '66480982-57f9-479a-b5f7-10ee60469104',
      name: 'Katiau',
      description: 'Perfume masculino',
      image: 'oaksopaks',
      expirationDate: '2024/02',
      quantidade: 25
    }
  })
}

seed().then(() => {
  console.log("Database seeded!")
  prisma.$disconnect
})