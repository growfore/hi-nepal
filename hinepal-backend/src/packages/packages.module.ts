import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PackagesService } from './packages.service';
import { PackagesController } from './packages.controller';
import { AdminMiddleware } from 'src/admin/admin.middleware';
import { PrismaService } from 'src/prisma.service';
import { UploadService } from 'src/upload/upload.service';

@Module({
  controllers: [PackagesController],
  providers: [PackagesService, PrismaService,UploadService],
})
export class PackagesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AdminMiddleware).forRoutes(
      {
        path: 'packages',
        method: RequestMethod.POST,
      },
      {
        path: 'packages',
        method: RequestMethod.PATCH,
      },
      {
        path: 'packages',
        method: RequestMethod.DELETE,
      },
    );
  }
}
