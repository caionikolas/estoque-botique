-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "type" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "expiration-date" DATETIME,
    "gender" TEXT,
    "size" INTEGER
);
INSERT INTO "new_products" ("description", "expiration-date", "gender", "id", "image", "name", "quantidade", "size", "type") SELECT "description", "expiration-date", "gender", "id", "image", "name", "quantidade", "size", "type" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
