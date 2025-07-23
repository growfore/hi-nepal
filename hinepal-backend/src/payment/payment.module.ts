import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService],
  imports: [ConfigModule],
})
export class PaymentModule implements NestModule {
  constructor() {}
  configure(consumer: MiddlewareConsumer) {
    // throw new Error('Method not implemented.');
  }
}
