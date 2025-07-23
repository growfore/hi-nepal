import { ApiProperty } from '@nestjs/swagger';

export class CreateActivityDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  slug: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  seo: any | {};
}
