import {
  IsNumber,
  IsString,
  IsEmail,
  IsOptional,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

// BookingDetail class to handle validation of booking details
class BookingDetail {
  @IsString({ message: 'Name must be a string' })
  @ApiProperty()
  name: string;

  @IsEmail({}, { message: 'Email must be valid' })
  @ApiProperty()
  email: string;

  @IsOptional()
  @ApiProperty()
  @IsString({ message: 'Phone must be a string' })
  phone?: string;

  @IsString({ message: 'Duration must be a string' })
  @ApiProperty()
  duration: string;

  @IsString({ message: 'Country must be a string' })
  @IsOptional()
  @ApiProperty()
  country: string;

  @IsString({ message: 'Address must be a string' })
  @ApiProperty()
  address: string;

  @IsOptional()
  @ApiProperty()
  @IsString({ message: 'Message must be a string' })
  message?: string;
}

// Main DTO class
export class CreateBookingDto {
  @IsNumber({}, { message: 'Package ID must be a number' })
  @ApiProperty()
  packageId: number;

  @ValidateNested() // Validates the nested object
  @Type(() => BookingDetail) // Transforms the nested object to a class instance
  @ApiProperty()
  bookingDetail: BookingDetail;
}
