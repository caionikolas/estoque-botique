-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "expiration-date" TEXT,
    "tag" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL
);
