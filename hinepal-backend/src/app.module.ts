import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SiteInformationsModule } from './site-informations/site-informations.module';
import { CarouselsModule } from './carousels/carousels.module';
import { ReviewModule } from './reviews/review.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PackagesModule } from './packages/packages.module';
import { BlogsModule } from './blogs/blogs.module';
import { AdminMiddleware } from './admin/admin.middleware';
import { PaymentModule } from './payment/payment.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { BookingModule } from './booking/booking.module';
import { TeamModule } from './team/team.module';
import { MailModule } from './mail/mail.module';
// import { UploadModule } from './upload/upload.module';
import { ActivitiesModule } from './activities/activities.module';
import { DestinationsModule } from './destinations/destinations.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UploadModule } from './upload/upload.module';
import { SeoModule } from './seo/seo.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SiteInformationsModule,
    UploadModule,
    CarouselsModule,
    ReviewModule,
    AuthModule,
    PackagesModule,
    BlogsModule,
    PaymentModule,
    DashboardModule,
    BookingModule,
    TeamModule,
    MailModule,

    // UploadModule,
    ActivitiesModule,
    DestinationsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // Path to your uploads folder
      serveRoot: '/uploads', // URL prefix for static files
    }),
    UploadModule,
    SeoModule,
    AuthorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AdminMiddleware).forRoutes(
      {
        path: 'api/*',
        method: RequestMethod.POST,
      },
      {
        path: 'api/*',
        method: RequestMethod.PATCH,
      },
      {
        path: 'api/*',
        method: RequestMethod.DELETE,
      },
    );
  }
}
