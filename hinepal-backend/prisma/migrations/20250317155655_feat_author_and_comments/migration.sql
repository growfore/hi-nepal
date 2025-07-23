-- DropForeignKey
ALTER TABLE `package` DROP FOREIGN KEY `package_authorId_fkey`;

-- AddForeignKey
ALTER TABLE `package` ADD CONSTRAINT `package_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Author`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
