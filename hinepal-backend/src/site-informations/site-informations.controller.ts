import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { SiteInformationsService } from './site-informations.service';
import { CreateSiteInformationDto } from './dto/create-site-information.dto';
import { UpdateSiteInformationDto } from './dto/update-site-information.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/upload/upload.service';
@ApiTags('site informations')
@Controller('api/site-informations')
export class SiteInformationsController {
  constructor(
    private readonly siteInformationsService: SiteInformationsService,
    private readonly UploadService: UploadService,
  ) {}

  @Post()
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'bgImage', maxCount: 1 },
      { name: 'logo', maxCount: 1 },
      { name: 'icon', maxCount: 1 },
      { name: 'footerImg', maxCount: 1 },
      { name: 'rewardImg1', maxCount: 1 },
      { name: 'rewardImg2', maxCount: 1 },
      { name: 'aboutImage1', maxCount: 1 },
      { name: 'aboutImage2', maxCount: 1 },
      { name: 'aboutImage3', maxCount: 1 },
      { name: 'aboutImage4', maxCount: 1 },
      { name: 'aboutImage5', maxCount: 1 },
    ]),
  )
  create(
    @Body() createSiteInformationDto: CreateSiteInformationDto,
    @UploadedFiles()
    files: {
      bgImage?: Express.Multer.File;
      logo?: Express.Multer.File;
      icon?: Express.Multer.File;
      footerImg?: Express.Multer.File;
      rewardImg1?: Express.Multer.File;
      rewardImg2?: Express.Multer.File;
      aboutImage1?: Express.Multer.File;
      aboutImage2?: Express.Multer.File;
      aboutImage3?: Express.Multer.File;
      aboutImage4?: Express.Multer.File;
      aboutImage5?: Express.Multer.File;
    },
  ) {
    const bgImage = files?.bgImage
      ? this.UploadService.saveFile(files.bgImage[0], 'siteInformations')
      : null;
    const logo = files?.logo
      ? this.UploadService.saveFile(files.logo[0], 'sietInformations')
      : null;
    const icon = files?.icon
      ? this.UploadService.saveFile(files.icon[0], 'siteInformations')
      : null;
    const footerImg = files?.footerImg
      ? this.UploadService.saveFile(files.footerImg[0], 'siteInformations')
      : null;
    const rewardImg1 = files?.rewardImg1
      ? this.UploadService.saveFile(files.rewardImg1[0], 'siteInformations')
      : null;
    const rewardImg2 = files?.rewardImg2
      ? this.UploadService.saveFile(files.rewardImg2[0], 'siteInformations')
      : null;
    const aboutImage1 = files?.aboutImage1
      ? this.UploadService.saveFile(files.aboutImage1[0], 'siteInformations')
      : null;
    const aboutImage2 = files?.aboutImage2
      ? this.UploadService.saveFile(files.aboutImage2[0], 'siteInformations')
      : null;
    const aboutImage3 = files?.aboutImage3
      ? this.UploadService.saveFile(files.aboutImage3[0], 'siteInformations')
      : null;
    const aboutImage4 = files?.aboutImage4
      ? this.UploadService.saveFile(files.aboutImage4[0], 'siteInformations')
      : null;
    const aboutImage5 = files?.aboutImage5
      ? this.UploadService.saveFile(files.aboutImage5[0], 'siteInformations')
      : null;

    if (bgImage) {
      createSiteInformationDto.bgImage = bgImage;
    }
    if (logo) {
      createSiteInformationDto.logo = logo;
    }
    if (icon) {
      createSiteInformationDto.icon = icon;
    }
    if (footerImg) {
      createSiteInformationDto.footerImg = footerImg;
    }
    if (rewardImg1) {
      createSiteInformationDto.rewardImg1 = rewardImg1;
    }
    if (rewardImg2) {
      createSiteInformationDto.rewardImg2 = rewardImg2;
    }
    if (aboutImage1) {
      createSiteInformationDto.aboutImage1 = aboutImage1;
    }
    if (aboutImage2) {
      createSiteInformationDto.aboutImage2 = aboutImage2;
    }
    if (aboutImage3) {
      createSiteInformationDto.aboutImage3 = aboutImage3;
    }
    if (aboutImage4) {
      createSiteInformationDto.aboutImage4 = aboutImage4;
    }
    if (aboutImage5) {
      createSiteInformationDto.aboutImage5 = aboutImage5;
    }

    return this.siteInformationsService.create(createSiteInformationDto);
  }

  @Get()
  findAll() {
    return this.siteInformationsService.findOne(1);
  }
  @Patch()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'bgImage', maxCount: 1 },
      { name: 'logo', maxCount: 1 },
      { name: 'icon', maxCount: 1 },
      { name: 'footerImg', maxCount: 1 },
      { name: 'rewardImg1', maxCount: 1 },
      { name: 'rewardImg2', maxCount: 1 },
      { name: 'aboutImage1', maxCount: 1 },
      { name: 'aboutImage2', maxCount: 1 },
      { name: 'aboutImage3', maxCount: 1 },
      { name: 'aboutImage4', maxCount: 1 },
      { name: 'aboutImage5', maxCount: 1 },
    ]),
  )
  @ApiBearerAuth()
  update(
    @Body() updateSiteInformationDto: UpdateSiteInformationDto,
    @UploadedFiles()
    files: {
      bgImage?: Express.Multer.File;
      logo?: Express.Multer.File;
      icon?: Express.Multer.File;
      footerImg?: Express.Multer.File;
      rewardImg1?: Express.Multer.File;
      rewardImg2?: Express.Multer.File;
      aboutImage1?: Express.Multer.File;
      aboutImage2?: Express.Multer.File;
      aboutImage3?: Express.Multer.File;
      aboutImage4?: Express.Multer.File;
      aboutImage5?: Express.Multer.File;
    },
  ) {
    const bgImage = files?.bgImage
      ? this.UploadService.saveFile(files.bgImage[0], 'siteInformations')
      : null;
    const logo = files?.logo
      ? this.UploadService.saveFile(files.logo[0], 'sietInformations')
      : null;
    const icon = files?.icon
      ? this.UploadService.saveFile(files.icon[0], 'siteInformations')
      : null;
    const footerImg = files?.footerImg
      ? this.UploadService.saveFile(files.footerImg[0], 'siteInformations')
      : null;
    const rewardImg1 = files?.rewardImg1
      ? this.UploadService.saveFile(files.rewardImg1[0], 'siteInformations')
      : null;
    const rewardImg2 = files?.rewardImg2
      ? this.UploadService.saveFile(files.rewardImg2[0], 'siteInformations')
      : null;
    const aboutImage1 = files?.aboutImage1
      ? this.UploadService.saveFile(files.aboutImage1[0], 'siteInformations')
      : null;
    const aboutImage2 = files?.aboutImage2
      ? this.UploadService.saveFile(files.aboutImage2[0], 'siteInformations')
      : null;
    const aboutImage3 = files?.aboutImage3
      ? this.UploadService.saveFile(files.aboutImage3[0], 'siteInformations')
      : null;
    const aboutImage4 = files?.aboutImage4
      ? this.UploadService.saveFile(files.aboutImage4[0], 'siteInformations')
      : null;
    const aboutImage5 = files?.aboutImage5
      ? this.UploadService.saveFile(files.aboutImage5[0], 'siteInformations')
      : null;

    if (bgImage) {
      updateSiteInformationDto.bgImage = bgImage;
    }
    if (logo) {
      updateSiteInformationDto.logo = logo;
    }
    if (icon) {
      updateSiteInformationDto.icon = icon;
    }
    if (footerImg) {
      updateSiteInformationDto.footerImg = footerImg;
    }
    if (rewardImg1) {
      updateSiteInformationDto.rewardImg1 = rewardImg1;
    }
    if (rewardImg2) {
      updateSiteInformationDto.rewardImg2 = rewardImg2;
    }

    if (aboutImage1) {
      updateSiteInformationDto.aboutImage1 = aboutImage1;
    }
    if (aboutImage2) {
      updateSiteInformationDto.aboutImage2 = aboutImage2;
    }
    if (aboutImage3) {
      updateSiteInformationDto.aboutImage3 = aboutImage3;
    }
    if (aboutImage4) {
      updateSiteInformationDto.aboutImage4 = aboutImage4;
    }
    if (aboutImage5) {
      updateSiteInformationDto.aboutImage5 = aboutImage5;
    }

    return this.siteInformationsService.update(1, updateSiteInformationDto);
  }

  @Delete()
  @ApiBearerAuth()
  remove() {
    return this.siteInformationsService.remove(1);
  }
}
