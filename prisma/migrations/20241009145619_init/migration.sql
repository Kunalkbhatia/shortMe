-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "URL" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "logo" TEXT,
    "longURL" TEXT NOT NULL,
    "shortURL" TEXT,
    "slug" TEXT,
    "monitoring" BOOLEAN DEFAULT true,
    "userId" TEXT NOT NULL,
    "folderId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "URL_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "URL_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "Folder" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Folder" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "isRoot" BOOLEAN NOT NULL DEFAULT false,
    "folderName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Folder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tag" TEXT NOT NULL,
    "urlId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Tag_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "URL" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Analytics" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "urlId" TEXT NOT NULL,
    "totalClicks" INTEGER NOT NULL DEFAULT 0,
    "clicksOnMobile" INTEGER NOT NULL DEFAULT 0,
    "clicksOnDesktop" INTEGER NOT NULL DEFAULT 0,
    "clicksOnTablet" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Analytics_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "URL" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GeoClick" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "country" TEXT NOT NULL,
    "state" TEXT,
    "city" TEXT,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "analyticsId" TEXT NOT NULL,
    CONSTRAINT "GeoClick_analyticsId_fkey" FOREIGN KEY ("analyticsId") REFERENCES "Analytics" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "URL_slug_key" ON "URL"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Analytics_urlId_key" ON "Analytics"("urlId");

-- CreateIndex
CREATE UNIQUE INDEX "GeoClick_country_state_city_analyticsId_key" ON "GeoClick"("country", "state", "city", "analyticsId");
