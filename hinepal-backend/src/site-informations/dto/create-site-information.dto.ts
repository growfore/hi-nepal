import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateSiteInformationDto {
  // name
  @ApiProperty({
    description: 'Enter your name',
    example: 'Your name',
    required: false,
  })
  @IsString()
  name?: string;
  // logo
  @ApiProperty()
  @IsOptional()
  logo?: string;

  @ApiProperty({
    description: 'Enter your description',
    example: 'Your description',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Enter your url',
    example: 'Your url',
    required: false,
  })
  @IsString()
  @IsOptional()
  url?: string;

  @ApiProperty({
    description: 'Enter your Active duration',
    example: 'Your openingTime',
    required: false,
  })
  @IsString()
  @IsOptional()
  openingTime?: string;

  @ApiProperty({
    description: 'Enter your address',
    example: 'Your address',
    required: false,
  })
  @IsString()
  @IsOptional()
  @ApiProperty()
  address?: string;

  @IsOptional()
  @ApiProperty()
  phone1: string;

  @IsOptional()
  @ApiProperty()
  phone2: string;

  @IsOptional()
  @ApiProperty()
  email1: string;

  @IsOptional()
  @ApiProperty()
  email2: string;

  @IsOptional()
  @ApiProperty()
  facebook: string;

  @IsOptional()
  @ApiProperty()
  twitter: string;

  @IsOptional()
  @ApiProperty()
  linkedin: string;

  @IsOptional()
  @ApiProperty()
  instagram: string;

  @IsOptional()
  @ApiProperty()
  bgImage: string;

  @IsOptional()
  @ApiProperty()
  icon: string;

  @IsOptional()
  @ApiProperty()
  footerAbout: string;

  @IsOptional()
  @ApiProperty()
  footerImg: string;

  @IsOptional()
  @ApiProperty()
  rewardImg1: string;

  @IsOptional()
  @ApiProperty()
  rewardImg2: string;

  @IsOptional()
  @ApiProperty()
  whatsapp: string;

  @IsOptional()
  @ApiProperty()
  location: string;
  @IsOptional()
  @ApiProperty()
  aboutTitle: string;

  @IsOptional()
  @ApiProperty()
  aboutDescription: string;

  @IsOptional()
  @ApiProperty()
  aboutImage1: string;

  @IsOptional()
  @ApiProperty()
  aboutImage2: string;

  @IsOptional()
  @ApiProperty()
  aboutImage3: string;

  @IsOptional()
  @ApiProperty()
  aboutImage4: string;
  @IsOptional()
  @ApiProperty()
  aboutImage5: string;
}
