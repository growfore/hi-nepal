import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { PrismaService } from 'src/prisma.service';
import { AdminMiddleware } from 'src/admin/admin.middleware';

@Module({
  controllers: [UploadController],
  providers: [UploadService, PrismaService],
})
export class UploadModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AdminMiddleware).forRoutes(
      {
        path: 'upload',
        method: RequestMethod.POST,
      },
      {
        path: 'upload',
        method: RequestMethod.PATCH,
      },
      {
        path: 'upload',
        method: RequestMethod.DELETE,
      },
    );
  }
}
