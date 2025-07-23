import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CarouselsService } from './carousels.service';
import { CarouselsController } from './carousels.controller';
import { PrismaService } from 'src/prisma.service';
import { AdminMiddleware } from 'src/admin/admin.middleware';
import { UploadService } from 'src/upload/upload.service';

@Module({
  controllers: [CarouselsController],
  providers: [CarouselsService, PrismaService,UploadService],
})
export class CarouselsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AdminMiddleware).forRoutes(
      {
        path: 'carousels',
        method: RequestMethod.POST,
      },
      {
        path: 'carousels',
        method: RequestMethod.PATCH,
      },
      {
        path: 'carousels',
        method: RequestMethod.DELETE,
      }
    );
  }
}
