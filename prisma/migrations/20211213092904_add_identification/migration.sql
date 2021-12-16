/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[identification]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `identification` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_email_key` ON `User`;

-- AlterTable
ALTER TABLE `Profile` ADD COLUMN `email` VARCHAR(255) NULL,
    ADD COLUMN `name` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `email`,
    DROP COLUMN `name`,
    ADD COLUMN `identification` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `QuestionGroup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `groupName` VARCHAR(255) NOT NULL,
    `questionTag` VARCHAR(64) NOT NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `QuestionDetail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `questionString` VARCHAR(255) NOT NULL,
    `questionGroupId` INTEGER NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `QuestionAnswer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `answerString` VARCHAR(255) NOT NULL,
    `isCorrect` BOOLEAN NOT NULL,
    `questionDetailId` INTEGER NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_identification_key` ON `User`(`identification`);
