/*
  Warnings:

  - You are about to alter the column `urlId` on the `Analytics` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `URL` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `URL` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `B` on the `_URLTags` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Analytics" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "urlId" INTEGER NOT NULL,
    "totalClicks" INTEGER NOT NULL DEFAULT 0,
    "clicksOnMobile" INTEGER NOT NULL DEFAULT 0,
    "clicksOnDesktop" INTEGER NOT NULL DEFAULT 0,
    "clicksOnTablet" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Analytics_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "URL" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Analytics" ("clicksOnDesktop", "clicksOnMobile", "clicksOnTablet", "id", "totalClicks", "urlId") SELECT "clicksOnDesktop", "clicksOnMobile", "clicksOnTablet", "id", "totalClicks", "urlId" FROM "Analytics";
DROP TABLE "Analytics";
ALTER TABLE "new_Analytics" RENAME TO "Analytics";
CREATE UNIQUE INDEX "Analytics_urlId_key" ON "Analytics"("urlId");
CREATE TABLE "new_URL" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
CREATE TABLE "new__URLTags" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_URLTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_URLTags_B_fkey" FOREIGN KEY ("B") REFERENCES "URL" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__URLTags" ("A", "B") SELECT "A", "B" FROM "_URLTags";
DROP TABLE "_URLTags";
ALTER TABLE "new__URLTags" RENAME TO "_URLTags";
CREATE UNIQUE INDEX "_URLTags_AB_unique" ON "_URLTags"("A", "B");
CREATE INDEX "_URLTags_B_index" ON "_URLTags"("B");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
