/*
  Warnings:

  - The primary key for the `Author` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Author` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `authorId` on the `Comment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `authorId` on the `blog` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `authorId` on the `package` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `blog` DROP FOREIGN KEY `blog_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `package` DROP FOREIGN KEY `package_authorId_fkey`;

-- AlterTable
ALTER TABLE `Author` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Comment` MODIFY `authorId` INTEGER NULL;

-- AlterTable
ALTER TABLE `blog` MODIFY `authorId` INTEGER NULL;

-- AlterTable
ALTER TABLE `package` MODIFY `authorId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `blog` ADD CONSTRAINT `blog_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Author`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `package` ADD CONSTRAINT `package_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Author`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Author`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
