/*
  Warnings:

  - You are about to drop the column `name` on the `Cards` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Connections` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Credentials` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Notes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,tag]` on the table `Cards` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,tag]` on the table `Credentials` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,tag]` on the table `Notes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tag` to the `Cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag` to the `Connections` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag` to the `Credentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag` to the `Notes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Cards_userId_name_key";

-- DropIndex
DROP INDEX "Credentials_userId_name_key";

-- DropIndex
DROP INDEX "Notes_userId_name_key";

-- AlterTable
ALTER TABLE "Cards" DROP COLUMN "name",
ADD COLUMN     "tag" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Connections" DROP COLUMN "name",
ADD COLUMN     "tag" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Credentials" DROP COLUMN "name",
ADD COLUMN     "tag" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Notes" DROP COLUMN "name",
ADD COLUMN     "tag" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cards_userId_tag_key" ON "Cards"("userId", "tag");

-- CreateIndex
CREATE UNIQUE INDEX "Credentials_userId_tag_key" ON "Credentials"("userId", "tag");

-- CreateIndex
CREATE UNIQUE INDEX "Notes_userId_tag_key" ON "Notes"("userId", "tag");
