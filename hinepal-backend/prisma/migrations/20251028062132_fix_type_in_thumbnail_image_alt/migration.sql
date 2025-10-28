/*
  Warnings:

  - You are about to drop the column `thumbnailImageAtl` on the `package` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `package` DROP COLUMN `thumbnailImageAtl`,
    ADD COLUMN `thumbnailImageAlt` VARCHAR(191) NULL;
