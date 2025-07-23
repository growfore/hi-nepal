import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/upload/upload.service';

@Controller('api/activities')
@ApiTags('activities')
export class ActivitiesController {
  constructor(
    private readonly activitiesService: ActivitiesService,
    private readonly UploadService: UploadService,
  ) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 1 },
      { name: 'seo.metaImage', maxCount: 1 },
    ]),
  )
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  create(
    @Body() createActivityDto: CreateActivityDto,

    @UploadedFiles()
    files: {
      image?: Express.Multer.File;
      'seo.metaImage'?: Express.Multer.File;
    },
  ) {
    const image = files?.image
      ? this.UploadService.saveFile(files.image[0], 'categories')
      : null;
    const metaImage =
      files && files['seo.metaImage']
        ? this.UploadService.saveFile(files['seo.metaImage'][0], 'categories')
        : null;
    if (image) {
      createActivityDto.image = image;
    }
    createActivityDto.seo = JSON.parse(createActivityDto.seo || '{}');
    if (metaImage) {
      createActivityDto.seo.metaImage = metaImage;
    } else {
      createActivityDto.seo.metaImage = null;
    }
    return this.activitiesService.create(createActivityDto);
  }

  @Get()
  findAll() {
    return this.activitiesService.findAll();
  }
  @Get('nav-items')
  navItems() {
    return this.activitiesService.navItems();
  }
  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.activitiesService.findOne(slug);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 1 },
      { name: 'seo.metaImage', maxCount: 1 },
    ]),
  )
  update(
    @Param('id') id: string,
    @Body() updateActivityDto: UpdateActivityDto,
    @UploadedFiles()
    files: {
      image?: Express.Multer.File;
      'seo.metaImage'?: Express.Multer.File;
    },
  ) {
    const image = files?.image
      ? this.UploadService.saveFile(files.image[0], 'activites')
      : null;
    const metaImage =
      files && files['seo.metaImage']
        ? this.UploadService.saveFile(files['seo.metaImage'][0], 'activites')
        : null;
    if (image) {
      updateActivityDto.image = image;
    } else {
      updateActivityDto.image = undefined;
    }
    updateActivityDto.seo = JSON.parse(updateActivityDto.seo || '{}');
    if (metaImage) {
      updateActivityDto.seo.metaImage = metaImage;
    } else {
      updateActivityDto.seo.metaImage = undefined;
    }
    return this.activitiesService.update(+id, updateActivityDto);
  }
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activitiesService.remove(+id);
  }
}
