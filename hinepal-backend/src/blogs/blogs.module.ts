import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { PrismaService } from 'src/prisma.service';
import { AdminMiddleware } from 'src/admin/admin.middleware';

@Module({
  controllers: [BlogsController],
  providers: [BlogsService, PrismaService],
})
export class BlogsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AdminMiddleware).forRoutes(
      {
        path: 'blogs',
        method: RequestMethod.POST,
      },
      {
        path: 'blogs',
        method: RequestMethod.PATCH,
      },
      {
        path: 'blogs',
        method: RequestMethod.DELETE,
      },
    );
  }
}
