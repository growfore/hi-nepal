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
import { DestinationsService } from './destinations.service';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { UploadService } from 'src/upload/upload.service';

@Controller('api/destinations')
@ApiTags('Destinations')
export class DestinationsController {
  constructor(
    private readonly destinationsService: DestinationsService,
    private readonly UploadService: UploadService,
  ) {}

  @Post()
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 1 },
      { name: 'seo.metaImage', maxCount: 1 },
    ]),
  )
  create(
    @Body() createDestinationDto: CreateDestinationDto,

    @UploadedFiles()
    files: {
      image?: Express.Multer.File;
      'seo.metaImage'?: Express.Multer.File;
    },
  ) {
    const image =
      files && files.image
        ? this.UploadService.saveFile(files.image[0], 'categories')
        : null;
    const metaImage =
      files && files['seo.metaImage']
        ? this.UploadService.saveFile(files['seo.metaImage'][0], 'categories')
        : null;
    if (image) {
      createDestinationDto.image = image;
    }
    createDestinationDto.seo = JSON.parse(createDestinationDto.seo || '{}');
    if (metaImage) {
      createDestinationDto.seo.metaImage = metaImage;
    } else {
      createDestinationDto.seo.metaImage = null;
    }
    return this.destinationsService.create(createDestinationDto);
  }

  @Get()
  findAll() {
    return this.destinationsService.findAll();
  }
  @Get('top')
  findTopDestinations() {
    return this.destinationsService.findTopDestinations();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.destinationsService.findOne(slug);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 1 },
      { name: 'seo.metaImage', maxCount: 1 },
    ]),
  )
  update(
    @Param('id') id: string,
    @Body() updateDestinationDto: UpdateDestinationDto,
    @UploadedFiles()
    files: {
      image?: Express.Multer.File;
      'seo.metaImage'?: Express.Multer.File;
    },
  ) {
    const image =
      files && files.image
        ? this.UploadService.saveFile(files.image[0], 'categories')
        : null;
    const metaImage =
      files && files['seo.metaImage']
        ? this.UploadService.saveFile(files['seo.metaImage'][0], 'categories')
        : null;
    if (image) {
      updateDestinationDto.image = image;
    } else {
      updateDestinationDto.image = undefined;
    }
    updateDestinationDto.seo = JSON.parse(updateDestinationDto.seo || '{}');
    if (metaImage) {
      updateDestinationDto.seo.metaImage = metaImage;
    } else {
      updateDestinationDto.seo.metaImage = undefined;
    }
    return this.destinationsService.update(+id, updateDestinationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.destinationsService.remove(+id);
  }
}
