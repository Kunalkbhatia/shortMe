/*
  Warnings:

  - Added the required column `name` to the `URL` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_URL" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "logo" TEXT,
    "name" TEXT NOT NULL,
    "longURL" TEXT NOT NULL,
    "shortURL" TEXT,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "slug" TEXT,
    "monitoring" BOOLEAN DEFAULT true,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "URL_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_URL" ("clicks", "createdAt", "id", "logo", "longURL", "monitoring", "shortURL", "slug", "updatedAt", "userId") SELECT "clicks", "createdAt", "id", "logo", "longURL", "monitoring", "shortURL", "slug", "updatedAt", "userId" FROM "URL";
DROP TABLE "URL";
ALTER TABLE "new_URL" RENAME TO "URL";
CREATE UNIQUE INDEX "URL_slug_key" ON "URL"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
