import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { CarouselsService } from './carousels.service';
import { CreateCarouselDto } from './dto/create-carousel.dto';
import { UpdateCarouselDto } from './dto/update-carousel.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/upload/upload.service';

@ApiTags('carousels')
@Controller('api/carousels')
export class CarouselsController {
  constructor(
    private readonly carouselsService: CarouselsService,
    private readonly upload: UploadService,
  ) {}
  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  create(
    @Body() createCarouselDto: CreateCarouselDto,
    @UploadedFiles()
    files: {
      image?: Express.Multer.File;
    },
  ) {
    const image =
      files && files.image
        ? this.upload.saveFile(files.image[0], 'carousels')
        : undefined;
    if (image) {
      createCarouselDto.image = image;
    }
    return this.carouselsService.create(createCarouselDto);
  }

  @Get()
  findAll() {
    return this.carouselsService.findAll();
  }

  @Get(':page')
  findOne(@Param('page') page: string) {
    return this.carouselsService.findOne(page);
  }
  @Get('/getbyid/:id')
  findOneById(@Param('id') id: string) {
    return this.carouselsService.findOneById(+id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  update(
    @Param('id') id: string,
    @Body() updateCarouselDto: UpdateCarouselDto,
    @UploadedFiles()
    files: {
      image?: Express.Multer.File;
    },
  ) {
    const image =
      files && files.image
        ? this.upload.saveFile(files.image[0], 'carousels')
        : undefined;
    if (image) {
      updateCarouselDto.image = image;
    } else {
      updateCarouselDto.image = undefined;
    }
    return this.carouselsService.update(+id, updateCarouselDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carouselsService.remove(+id);
  }
}
