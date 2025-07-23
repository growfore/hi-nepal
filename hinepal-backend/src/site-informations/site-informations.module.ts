import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { SiteInformationsService } from './site-informations.service';
import { SiteInformationsController } from './site-informations.controller';
import { PrismaModule } from 'src/prisma.module';
import { AdminMiddleware } from 'src/admin/admin.middleware';
import { UploadService } from 'src/upload/upload.service';

@Module({
  imports: [PrismaModule],
  controllers: [SiteInformationsController],
  providers: [SiteInformationsService,UploadService],
})
export class SiteInformationsModule {}
