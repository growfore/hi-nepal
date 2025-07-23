import { Controller, Get, Param } from '@nestjs/common';
import { SeoService } from './seo.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Seo')
@Controller('api/seo')
export class SeoController {
  constructor(private readonly seoService: SeoService) {}

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.seoService.findOne(slug);
  }
}
