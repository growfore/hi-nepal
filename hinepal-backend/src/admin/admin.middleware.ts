import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { createFailureResponse } from 'src/utils/response.util';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AdminMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const excludedRoutes = [
      '/api/auth/register',
      '/api/auth/login',
      '/api/auth/init-admin',
      '/api/booking',
      '/api/mail',
    ];
    const prisma = new PrismaService();

    if (excludedRoutes.includes(req.path)) {
      return next(); // Skip middleware for these routes
    }

    try {
      const authHeader =
        req.headers['authorization'] &&
        req.headers['authorization'].split(' ')[1];

      if (!authHeader) {
        throw new UnauthorizedException('No token found');
      }
      const token = authHeader;
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET_KEY);

      const user = await prisma.user.findUnique({
        where: {
          email: decoded.email,
        },
      });
      if (!user) {
        throw new UnauthorizedException('Invalid token');
      }
      if (user?.role !== 'admin') {
        throw new UnauthorizedException(
          'Unauthorized !! Only admin can access',
        );
      }
      next();
    } catch (error) {
      throw new UnauthorizedException(
        createFailureResponse(error?.message || 'Invalid token', error),
      );
    }
  }
}
