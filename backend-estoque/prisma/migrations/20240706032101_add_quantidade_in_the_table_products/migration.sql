/*
  Warnings:

  - Added the required column `quantidade` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "expiration-date" TEXT,
    "quantidade" INTEGER NOT NULL
);
INSERT INTO "new_products" ("description", "expiration-date", "id", "image", "name") SELECT "description", "expiration-date", "id", "image", "name" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
