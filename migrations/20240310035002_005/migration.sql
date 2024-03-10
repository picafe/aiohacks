/*
  Warnings:

  - Added the required column `description` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `greeting` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `header` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "greeting" TEXT NOT NULL,
    "header" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_User" ("id", "name") SELECT "id", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
