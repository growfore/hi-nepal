// auth/auth.controller.ts
import { Body, Controller, Header, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ChangePasswordDto,
  LoginDto,
  RegisterDto,
} from './dto/create-auth.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('change-password')
  async changePassword(@Req() changePasswordDto: ChangePasswordDto) {
    return this.authService.changePassword(changePasswordDto);
  }
  @Post('init-admin')
  async initAdmin() {
    return this.authService.initAdmin();
  }
  @Post('verify-admin')
  async verifyAdmin(@Req() req: any) {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      throw new Error('No token found');
    }
    return this.authService.verifyAdmin(token);
  }
}
