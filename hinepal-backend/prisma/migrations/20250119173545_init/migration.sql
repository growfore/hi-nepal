-- CreateTable
CREATE TABLE `site_information` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `logo` VARCHAR(191) NULL,
    `icon` VARCHAR(191) NULL,
    `description` MEDIUMTEXT NULL,
    `url` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `location` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `phone_1` VARCHAR(191) NULL,
    `phone_2` VARCHAR(191) NULL,
    `email_1` VARCHAR(191) NULL,
    `email_2` VARCHAR(191) NULL,
    `facebook` VARCHAR(191) NULL,
    `twitter` VARCHAR(191) NULL,
    `instagram` VARCHAR(191) NULL,
    `linkedin` VARCHAR(191) NULL,
    `youtube` VARCHAR(191) NULL,
    `whatsapp` VARCHAR(191) NULL,
    `opening_time` VARCHAR(191) NULL,
    `bg_image` VARCHAR(191) NULL,
    `footer_about` VARCHAR(191) NULL,
    `reward_img` VARCHAR(191) NULL,
    `reward_img_2` VARCHAR(191) NULL,
    `footer_img` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `review` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(191) NULL,
    `description` MEDIUMTEXT NULL,
    `name` VARCHAR(191) NULL,
    `travel_by` VARCHAR(191) NULL,
    `link` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `rating` INTEGER NULL,
    `packageId` INTEGER NULL,
    `review_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'user',
    `image` VARCHAR(191) NULL,
    `username` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `isVerified` BOOLEAN NULL,
    `password` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carousel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `description` MEDIUMTEXT NULL,
    `subtitle` VARCHAR(191) NULL,
    `link` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `page` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `description` MEDIUMTEXT NULL,
    `content` LONGTEXT NULL,
    `image` VARCHAR(191) NULL,
    `slug` VARCHAR(191) NOT NULL,
    `subtitle` VARCHAR(191) NULL,
    `link` VARCHAR(191) NULL,
    `page` VARCHAR(191) NULL,
    `seo_id` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `blog_slug_key`(`slug`),
    UNIQUE INDEX `blog_seo_id_key`(`seo_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `seo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `meta_title` VARCHAR(191) NULL,
    `meta_description` MEDIUMTEXT NULL,
    `meta_keyword` MEDIUMTEXT NULL,
    `meta_image` VARCHAR(191) NULL,
    `meta_robots` VARCHAR(191) NULL,
    `meta_author` VARCHAR(191) NULL,
    `meta_canonical` VARCHAR(191) NULL,
    `meta_rating` VARCHAR(191) NULL,
    `meta_copyright` VARCHAR(191) NULL,
    `meta_revisit` VARCHAR(191) NULL,
    `twitter_card` VARCHAR(191) NULL,
    `twitter_site` VARCHAR(191) NULL,
    `schema` MEDIUMTEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `activity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `slug` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `image` VARCHAR(191) NULL,
    `seo_id` INTEGER NULL,

    UNIQUE INDEX `activity_slug_key`(`slug`),
    UNIQUE INDEX `activity_seo_id_key`(`seo_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `destination` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `slug` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `category_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `image` VARCHAR(191) NULL,
    `seo_id` INTEGER NULL,

    UNIQUE INDEX `destination_slug_key`(`slug`),
    UNIQUE INDEX `destination_seo_id_key`(`seo_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `package` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `description` LONGTEXT NULL,
    `content` LONGTEXT NULL,
    `banner` VARCHAR(191) NULL,
    `thumbnail` VARCHAR(191) NULL,
    `slug` VARCHAR(191) NOT NULL,
    `subtitle` VARCHAR(191) NULL,
    `itenary` LONGTEXT NULL,
    `introduction` LONGTEXT NULL,
    `includes` LONGTEXT NULL,
    `goodtoknow` LONGTEXT NULL,
    `price` VARCHAR(191) NULL,
    `discount` VARCHAR(191) NULL,
    `duration` VARCHAR(191) NULL,
    `link` VARCHAR(191) NULL,
    `best_season` VARCHAR(191) NULL,
    `video_link` VARCHAR(191) NULL,
    `rating` VARCHAR(191) NULL,
    `altitude` VARCHAR(191) NULL,
    `start_from` VARCHAR(191) NULL,
    `end_at` VARCHAR(191) NULL,
    `culture` VARCHAR(191) NULL,
    `attractions` VARCHAR(191) NULL,
    `accommodation` VARCHAR(191) NULL,
    `group_size` VARCHAR(191) NULL,
    `group_age` VARCHAR(191) NULL,
    `map` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `seoId` INTEGER NULL,
    `destination_id` INTEGER NOT NULL,

    UNIQUE INDEX `package_slug_key`(`slug`),
    UNIQUE INDEX `package_seoId_key`(`seoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Faq` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question` VARCHAR(191) NULL,
    `answer` VARCHAR(191) NULL,
    `packageId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `booking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `packageId` INTEGER NOT NULL,
    `userId` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BookingDetail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `duration` VARCHAR(191) NULL,
    `date` DATETIME(3) NULL,
    `phone` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `message` MEDIUMTEXT NULL,
    `subject` MEDIUMTEXT NULL,
    `bookingId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `BookingDetail_bookingId_key`(`bookingId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment` (
    `id` VARCHAR(191) NOT NULL,
    `bookingId` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `paymentMethod` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,
    `currency` VARCHAR(191) NULL,
    `transactionId` VARCHAR(191) NULL,
    `discountAmount` INTEGER NULL,
    `discountType` VARCHAR(191) NULL,
    `couponCode` VARCHAR(191) NULL,
    `payment_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `payment_bookingId_key`(`bookingId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Team` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `position` VARCHAR(191) NULL,
    `facebook` VARCHAR(191) NULL,
    `twitter` VARCHAR(191) NULL,
    `linkedin` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `about_section` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `description` LONGTEXT NULL,
    `image1` VARCHAR(191) NULL,
    `image2` VARCHAR(191) NULL,
    `image3` VARCHAR(191) NULL,
    `image4` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `siteInformationId` INTEGER NULL,

    UNIQUE INDEX `about_section_siteInformationId_key`(`siteInformationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `message` MEDIUMTEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `media` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `alt` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `url` VARCHAR(191) NOT NULL,
    `packageId` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `review_packageId_fkey` FOREIGN KEY (`packageId`) REFERENCES `package`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `blog` ADD CONSTRAINT `blog_seo_id_fkey` FOREIGN KEY (`seo_id`) REFERENCES `seo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `activity` ADD CONSTRAINT `activity_seo_id_fkey` FOREIGN KEY (`seo_id`) REFERENCES `seo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `destination` ADD CONSTRAINT `destination_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `activity`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `destination` ADD CONSTRAINT `destination_seo_id_fkey` FOREIGN KEY (`seo_id`) REFERENCES `seo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `package` ADD CONSTRAINT `package_seoId_fkey` FOREIGN KEY (`seoId`) REFERENCES `seo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `package` ADD CONSTRAINT `package_destination_id_fkey` FOREIGN KEY (`destination_id`) REFERENCES `destination`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Faq` ADD CONSTRAINT `Faq_packageId_fkey` FOREIGN KEY (`packageId`) REFERENCES `package`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `booking` ADD CONSTRAINT `booking_packageId_fkey` FOREIGN KEY (`packageId`) REFERENCES `package`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `booking` ADD CONSTRAINT `booking_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BookingDetail` ADD CONSTRAINT `BookingDetail_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `booking`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `booking`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `about_section` ADD CONSTRAINT `about_section_siteInformationId_fkey` FOREIGN KEY (`siteInformationId`) REFERENCES `site_information`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `media` ADD CONSTRAINT `media_packageId_fkey` FOREIGN KEY (`packageId`) REFERENCES `package`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
