-- AlterTable
ALTER TABLE `activity` ADD COLUMN `imageAlt` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `destination` ADD COLUMN `imageAlt` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `package` ADD COLUMN `bannerImageAlt` VARCHAR(191) NULL,
    ADD COLUMN `thumbnailImageAtl` VARCHAR(191) NULL;
