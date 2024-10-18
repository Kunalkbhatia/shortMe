/*
  Warnings:

  - You are about to drop the `Folder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `folderId` on the `URL` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Folder";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_URL" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "logo" TEXT,
    "longURL" TEXT NOT NULL,
    "shortURL" TEXT,
    "slug" TEXT,
    "monitoring" BOOLEAN DEFAULT true,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "URL_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_URL" ("createdAt", "id", "logo", "longURL", "monitoring", "shortURL", "slug", "updatedAt", "userId") SELECT "createdAt", "id", "logo", "longURL", "monitoring", "shortURL", "slug", "updatedAt", "userId" FROM "URL";
DROP TABLE "URL";
ALTER TABLE "new_URL" RENAME TO "URL";
CREATE UNIQUE INDEX "URL_slug_key" ON "URL"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
