import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCarouselDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    example: 'title',
    description: 'title of the carousel',
  })
  title: string;
  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    example: 'description',
    description: 'description of the carousel',
  })
  description: string;
  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    example: 'image',
    description: 'image of the carousel',
  })
  image: string;
  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    example: 'link',
    description: 'Link of the carousel',
  })
  link: string;
  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    example: 'subtitle',
    description: 'Subtitle of the carousel',
  })
  subtitle: string;
  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    example: 'page',
    description: 'page of the carousel',
  })
  page: string;
  constructor(
    title: string,
    description: string,
    image: string,
    link: string,
    subtitle: string,
  ) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.link = link;
    this.subtitle = subtitle;
  }
}
