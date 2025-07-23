import {
  Injectable,
  HttpException,
  HttpStatus,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  createFailureResponse,
  createSuccessResponse,
} from 'src/utils/response.util';

@Injectable()
export class PaymentService {
  private readonly apiUrl: string;
  private readonly apiKey: string;
  private readonly secretKey: string;
  constructor() {
    this.apiKey = process.env.PAYMENT_PUBLIC_KEY;
    this.secretKey = process.env.PAYMENT_SECRET_KEY;
    this.apiUrl = process.env.PAYMENT_API_URL;
  }
  async initiatePayment(PaymentData: any): Promise<any> {
    const headers = {
      'Content-Type': 'application/json',
      token: this.apiKey,
    };
    const body = {
      aud: 'PacoAudience',
      iss: this.apiKey,
      request: { PaymentData },
      exp: 1596432250,
      iat: 1596428650,
      nbf: 1596428650,
    };

    const response = await fetch(`${this.apiUrl}/api/1.0/Payment/nonUi`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        ...body,
      }),
    });
    const data = await response.json();
    // return createSuccessResponse('Payment initiated successfully', data);

    if ((await data?.status) === 200) {
      return createSuccessResponse('Payment initiated successfully', data);
    } else {
      throw new NotAcceptableException(
        createFailureResponse('Payment initiation failed', data),
      );
      // return createFailureResponse('Payment initiation failed', data);
    }
  }
  async verifyPayment(transactionId: string): Promise<any> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    };
    const body = {
      transactionId,
    };
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (data?.status === 'SUCCESS') {
        return {
          status: 'success',
          message: 'Payment verified successfully',
          data,
        };
      } else {
        return {
          status: 'failure',
          message: 'Payment verification failed',
          data,
        };
      }
    } catch (error) {
      throw new HttpException(
        'Payment verification failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  /**
   * Validate webhook signature
   * @param webhookData Data received from webhook
   */
  validateWebhook(webhookData: any): boolean {
    // Implement signature validation based on 2C2P's documentation
    // This usually involves checking a hash or signature using your secret key
    // ...

    return true; // Return true if valid, false otherwise
  }
}
