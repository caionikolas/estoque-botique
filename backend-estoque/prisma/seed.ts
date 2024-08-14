import { prisma } from "../src/lib/prisma"

async function seed() {
  await prisma.product.create({
    data: {
      id: '66480982-57f9-479a-b5f7-10ee60469104',
      name : "Natura Homem",
      description: "Antitranspirante desodorante Roll-on masculino",
      image: "https://m.media-amazon.com/images/I/6157hIeNEIL.__AC_SX300_SY300_QL70_ML2_.jpg",
      expirationDate: "2025/10",
      tag: 1,
      quantidade: 1
    }
  })
}

seed().then(() => {
  console.log("Database seeded!")
  prisma.$disconnect
})