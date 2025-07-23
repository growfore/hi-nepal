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
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/upload/upload.service';

@ApiTags('reviews')
@Controller('api/reviews')
export class ReviewController {
  constructor(
    private readonly reviewService: ReviewService,
    private readonly UploadService: UploadService,
  ) {}

  @Post()
  @ApiBearerAuth()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  create(
    @Body() createReviewDto: CreateReviewDto,
    @UploadedFiles()
    files: {
      image?: Express.Multer.File;
    },
  ) {
    const image = files?.image
      ? this.UploadService.saveFile(files.image[0], 'categories')
      : null;
    if (image) {
      createReviewDto.image = image;
    }
    return this.reviewService.create(createReviewDto);
  }

  @Get()
  findAll() {
    return this.reviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  update(
    @Param('id') id: string,
    @Body() updateReviewDto: UpdateReviewDto,
    @UploadedFiles()
    files: {
      image?: Express.Multer.File;
    },
  ) {
    const image = files?.image
      ? this.UploadService.saveFile(files.image[0], 'categories')
      : null;
    if (image) {
      updateReviewDto.image = image;
    } else {
      updateReviewDto.image = undefined;
    }
    return this.reviewService.update(+id, updateReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewService.remove(+id);
  }
}
