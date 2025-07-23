import { IsString } from 'class-validator';

export class CreateMailDto {
  name: string;
  phone: string;
  @IsString()
  email: string;
  message: string;

  constructor(name: string, phone: string, email: string, message: string) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.message = message;
  }
}
