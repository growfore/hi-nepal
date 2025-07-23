import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { UploadService } from './upload.service';
import {
  createFailureResponse,
  createSuccessResponse,
} from 'src/utils/response.util';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';

@Controller('api/upload')
@ApiTags('Upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  @ApiConsumes('multipart/form-data')
  @ApiBearerAuth()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        folderName: {
          type: 'string',
        },
        image: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  uploadFile(
    @Body() createImageDto: { folderName: string; image: string },
    @UploadedFiles()
    file: {
      image: Express.Multer.File;
    },
  ) {
    console.log(file);
    if (!file?.image) {
      return {
        imageUrl: createImageDto?.image,
      };
    } else {
      const imageUrl = this.uploadService.saveFile(
        file.image[0],
        createImageDto?.folderName || 'images',
      );
      return { imageUrl: imageUrl || createImageDto.image };
    }
  }
  @Post('multiple')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'images', maxCount: 20 }]))
  @ApiConsumes('multipart/form-data')
  @ApiBearerAuth()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        folderName: {
          type: 'string',
        },
        images: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  uploadMultipleFiles(
    @Body() body: any,
    @UploadedFiles()
    files: {
      images: Express.Multer.File[];
    },
  ) {
    if (!files?.images) {
      return {
        imageUrls: body.images || [],
      };
    }
    const imageUrls = this.uploadService.saveFiles(
      files?.images,
      body.folderName || 'images',
    );
    return { imageUrls: [...imageUrls, ...body.images] };
  }
}
