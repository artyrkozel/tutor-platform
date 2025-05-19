/*
  Warnings:

  - You are about to drop the `Authenticator` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('ADMIN', 'USER');

-- DropForeignKey
ALTER TABLE "Authenticator" DROP CONSTRAINT "Authenticator_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "ROLE" NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE "Authenticator";
