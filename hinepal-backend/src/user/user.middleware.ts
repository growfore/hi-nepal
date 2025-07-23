import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      throw new UnauthorizedException('No token found');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('No token found');
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      throw new UnauthorizedException('Invalid token');
    }
    if (!decoded?.email == req.body.email) {
      throw new UnauthorizedException('Unauthorized !!');
    }
    next();
  }
}
