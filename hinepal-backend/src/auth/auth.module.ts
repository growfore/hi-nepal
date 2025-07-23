import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key', // Use environment variable in production
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtService,PrismaService],
})
export class AuthModule  {}
