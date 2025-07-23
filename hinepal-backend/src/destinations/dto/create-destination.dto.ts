import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateDestinationDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  @IsString()
  slug: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
 
  activityId: number;
  @ApiProperty()
  seo: any;
}
