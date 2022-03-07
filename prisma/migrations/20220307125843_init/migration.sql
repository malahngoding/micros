/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `WalletForUser` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `WalletForUser_userId_key` ON `WalletForUser`(`userId`);
