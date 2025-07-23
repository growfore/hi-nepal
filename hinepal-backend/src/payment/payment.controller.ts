import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('api/payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  /**
   * Endpoint to initiate a payment
   * Example: POST /payment/initiate
   */
  @Post('initiate')
  async initiatePayment(@Body() paymentData: any) {
    try {
      const result = await this.paymentService.initiatePayment(paymentData);
      return result;
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  /**
   * Endpoint to verify payment status
   * Example: GET /payment/status?transactionId=12345
   */
  @Get('status')
  async verifyPayment(@Query('transactionId') transactionId: string) {
    if (!transactionId) {
      throw new HttpException(
        'Transaction ID is required',
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      const result = await this.paymentService.verifyPayment(transactionId);
      return result;
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('webhook')
  async handleWebhook(@Body() webhookData: any) {
    // Validate the webhook signature if provided
    const isValid = this.paymentService.validateWebhook(webhookData);
    if (!isValid) {
      throw new HttpException(
        'Invalid webhook signature',
        HttpStatus.BAD_REQUEST,
      );
    }

    // Process the webhook data
    // For example, update order status in your database
    // ...

    return { status: 'success' };
  }
}
