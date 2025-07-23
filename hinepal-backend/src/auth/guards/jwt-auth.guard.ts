// auth/jwt-auth.guard.ts
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}

// // auth/dto.ts
// export class RegisterDto {
//   username: string;
//   password: string;
// }

// export class LoginDto {
//   username: string;
//   password: string;
// }

// export class ChangePasswordDto {
//   username: string;
//   currentPassword: string;
//   newPassword: string;
// }
