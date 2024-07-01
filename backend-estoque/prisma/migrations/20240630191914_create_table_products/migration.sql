-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "type" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "expiration-date" DATETIME NOT NULL,
    "gender" TEXT,
    "size" INTEGER
);
