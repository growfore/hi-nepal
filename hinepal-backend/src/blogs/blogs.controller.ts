import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('blogs')
@Controller('api/blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogsService.create(createBlogDto);
  }

  @Get()
  findAll(
    @Query('offset') offset: number = 0,
    @Query('limit') limit: number = 10,
    @Query('query') query: string = '',
  ) {
    return this.blogsService.findAll({
      baseUrl: process.env.BASE_URL + '/api/blogs',
      limit: typeof Number(limit) === 'number' ? Number(limit) : 10,
      offset: typeof Number(offset) === 'number' ? Number(offset) : 0,
      query,
    });
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    
    return this.blogsService.findOne(slug);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogsService.update(+id, updateBlogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogsService.remove(+id);
  }
}
