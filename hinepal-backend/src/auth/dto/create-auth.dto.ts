import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

// auth/dto.ts
export class RegisterDto {
  @ApiProperty({
    description: 'The email of the user',
    example: 'dev@aarambhait.com',
    type: String,
  })
  @IsString()
  @IsEmail()
  email: string;
  @ApiProperty({
    description: 'The password of the user',
    example: '12345678',
    type: String,
  })
  password: string;
  @ApiProperty({
    description: 'The password of the user',
    example: 'user name',
    type: String,
  })
  username: string;
  @ApiProperty({
    description: 'The password of the user',
    example: 'country',
    type: String,
  })
  country: string;
  @ApiProperty({
    description: 'The password of the user',
    example: 'role',
    type: String,
  })
  role: string;
  @ApiProperty({
    description: 'The password of the user',
    example: 'phone',
    type: String,
  })
  phone: string;
  @ApiProperty({
    description: 'The password of the user',
    example: 'address',
    type: String,
  })
  address: string;
}

export class LoginDto {
  @ApiProperty({
    description: 'The email of the user',
    example: 'dev@aarambhait.com',
    type: String,
  })
  @IsString()
  email: string;
  @ApiProperty({
    description: 'The password of the user',
    example: '12345678',
    type: String,
  })
  password: string;
}

export class ChangePasswordDto {
  @IsEmail()
  @IsString()
  email: string;
  @IsString()
  currentPassword: string;
  @IsString()
  newPassword: string;

  constructor(email: string, currentPassword: string, newPassword: string) {
    this.email = email;
    this.currentPassword = currentPassword;
    this.newPassword = newPassword;
  }
}

export class CreateAuthDto extends RegisterDto {}
