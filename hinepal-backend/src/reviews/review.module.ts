import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { PrismaService } from 'src/prisma.service';
import { UploadService } from 'src/upload/upload.service';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService, PrismaService,UploadService],
})
export class ReviewModule {}
