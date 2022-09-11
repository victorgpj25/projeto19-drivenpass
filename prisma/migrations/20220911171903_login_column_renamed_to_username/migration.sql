/*
  Warnings:

  - You are about to drop the column `login` on the `Credentials` table. All the data in the column will be lost.
  - Added the required column `username` to the `Credentials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Credentials" DROP COLUMN "login",
ADD COLUMN     "username" TEXT NOT NULL;
