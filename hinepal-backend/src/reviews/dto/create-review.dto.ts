import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  @ApiProperty({
    example: 'User Name',
    description: 'Name of the reviewer',
    type: String,
  })
  name: string;
  @IsString()
  @ApiProperty({
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    description: 'Description of the reviewer',
    type: String,
  })
  description: string;

  @ApiProperty({
    example: 'https://example.com/image.png',
    description: 'Image of the reviewer',
    type: String,
  })
  image: string;
  @IsString()
  @ApiProperty({
    example: 'tile  of the review',
    description: 'tile  of the review',
    type: String,
  })
  @IsOptional()
  title: string;
  @IsString()
  @ApiProperty({
    example: 'progress  of the review',
    description: 'progress  of the review',
    type: String,
  })
  @IsOptional()
  progress: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  link: string;
}
