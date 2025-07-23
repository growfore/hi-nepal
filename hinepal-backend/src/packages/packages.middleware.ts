import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class PackagesMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    next();
  }
}
