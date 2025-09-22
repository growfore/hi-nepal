import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { PackagesService } from './packages.service';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/upload/upload.service';

@ApiTags('packages')
@Controller('api/packages')
export class PackagesController {
  constructor(
    private readonly packagesService: PackagesService,
    private readonly UploadService: UploadService,
  ) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'images', maxCount: 10 },
      { name: 'seo.metaImage', maxCount: 1 },
      { name: 'banner', maxCount: 1 },
      { name: 'thumbnail', maxCount: 1 },
    ]),
  )
  create(
    @Body() createPackageDto: CreatePackageDto,
    @UploadedFiles()
    files: {
      images?: Express.Multer.File[];
      'seo.metaImage'?: Express.Multer.File[];
      banner?: Express.Multer.File[];
      thumbnail?: Express.Multer.File[];
    },
  ) {
    createPackageDto = {
      ...createPackageDto,
      seo: JSON.parse(createPackageDto.seo || '{}'),
    };
    //   check if there is no files then return
    const objLength = Object.keys(files).length;
    if (objLength === 0) {
      return this.packagesService.create(createPackageDto);
    }

    if (files?.images?.length > 0) {
      const savedImages = files.images.map((image) => ({
        url: this.UploadService.saveFile(image, 'packages'),
        alt: image.originalname || '',
      }));
      createPackageDto.images = savedImages;
    }

    // Handle SEO metaImages
    if (files['seo.metaImages'] && files['seo.metaImages'][0]) {
      createPackageDto.seo.metaImages = this.UploadService.saveFile(
        files['seo.metaImages'][0],
        'packages',
      );
    }
    // for banner
    if (files?.banner) {
      createPackageDto.banner = this.UploadService.saveFile(
        files.banner[0],
        'packages',
      );
    }
    // for thumnail
    if (files?.thumbnail) {
      createPackageDto.thumbnail = this.UploadService.saveFile(
        files.thumbnail[0],
        'packages/thumbnails',
      );
    }

    return this.packagesService.create(createPackageDto);
  }

  @Get('')
  @ApiParam({ name: 'limit', type: 'string', required: false, example: '10' })
  @ApiParam({ name: 'offset', type: 'string', required: false, example: '0' })
  @ApiParam({ name: 'query', type: 'string', required: false, example: '' })
  findAll(
    @Query('limit') limit: number | undefined,
    @Query('offset') offset: number | undefined,
    @Query('query') query: string | undefined,
  ) {
    let limitNumber = 100;
    let offsetNumber = 0;
    if (limit) {
      limitNumber = Number(limit);
    }
    if (offset) {
      offsetNumber = Number(offset);
    }
    return this.packagesService.findAll({
      baseUrl: process.env.FRONTEND_URL + '/packages',
      limit: limitNumber,
      offset: offsetNumber,
      query,
    });
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.packagesService.findOne(slug);
  }

  @Patch(':id')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'images', maxCount: 10 },
      { name: 'seo.metaImage', maxCount: 1 },
      { name: 'banner', maxCount: 1 },
      { name: 'thumbnail', maxCount: 1 },
    ]),
  )
  update(
    @Param('id') id: string,
    @Body() updatePackageDto: UpdatePackageDto,
    @UploadedFiles()
    files: {
      images?: Express.Multer.File[];
      'seo.metaImage'?: Express.Multer.File[];
      banner?: Express.Multer.File[];
      thumbnail?: Express.Multer.File[];
    },
  ) {
    updatePackageDto = {
      ...updatePackageDto,
      seo: JSON.parse(updatePackageDto.seo || '{}'),
    };
    // Handle regular images
    if (files.images?.length > 0) {
      const savedImages = files.images.map((image) => ({
        url: this.UploadService.saveFile(image, 'packages'),
        alt: image.originalname || '',
      }));
      updatePackageDto.images = savedImages;
    } else {
      updatePackageDto.images = undefined;
    }

    // Handle SEO metaImages
    if (files['seo.metaImages'] && files['seo.metaImages'][0]) {
      updatePackageDto.seo.metaImages = this.UploadService.saveFile(
        files['seo.metaImages'][0],
        'packages',
      );
    } else {
      updatePackageDto.seo.metaImages = undefined;
    }
    // for banner
    if (files?.banner) {
      updatePackageDto.banner = this.UploadService.saveFile(
        files.banner[0],
        'packages',
      );
    } else {
      updatePackageDto.banner = undefined;
    }
    // for thumnail
    if (files?.thumbnail) {
      updatePackageDto.thumbnail = this.UploadService.saveFile(
        files.thumbnail[0],
        'packages/thumbnails',
      );
    } else {
      updatePackageDto.thumbnail = undefined;
    }
    return this.packagesService.update(Number(id), updatePackageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.packagesService.remove(+id);
  }
}
