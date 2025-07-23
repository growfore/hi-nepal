import {
  HttpException,
  Injectable,
  InternalServerErrorException,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { CreateSiteInformationDto } from './dto/create-site-information.dto';
import { UpdateSiteInformationDto } from './dto/update-site-information.dto';
import { PrismaService } from 'src/prisma.service';
import {
  createFailureResponse,
  createSuccessResponse,
} from 'src/utils/response.util';

@Injectable()
export class SiteInformationsService {
  constructor(private prisma: PrismaService) {}
  async create(createSiteInformationDto: CreateSiteInformationDto) {
    const sites = await this.findAll();
    if (sites?.data?.length > 0) {
      throw new NotAcceptableException(
        createFailureResponse('SiteInformation already exist', {
          data: sites?.data,
        }),
      );
    }
    const siteInformation = await this.prisma.siteInformation.create({
      data: {
        description: createSiteInformationDto.description,
        name: createSiteInformationDto.name,
        url: createSiteInformationDto.url,
        openingTime: createSiteInformationDto.openingTime,
        address: createSiteInformationDto.address,
        logo: createSiteInformationDto.logo || undefined,
        icon: createSiteInformationDto.icon,
        phone1: createSiteInformationDto.phone2,
        phone2: createSiteInformationDto.phone1,
        email1: createSiteInformationDto.email2,
        email2: createSiteInformationDto.email1,
        facebook: createSiteInformationDto.facebook,
        twitter: createSiteInformationDto.twitter,
        linkedin: createSiteInformationDto.linkedin,
        instagram: createSiteInformationDto.instagram,
        bgImage: createSiteInformationDto.bgImage || undefined,
        footerAbout: createSiteInformationDto.footerAbout,
        footerImg: createSiteInformationDto.footerImg || undefined,
        rewardImg1: createSiteInformationDto.rewardImg1 || undefined,
        rewardImg2: createSiteInformationDto.rewardImg2 || undefined,
        whatsapp: createSiteInformationDto.whatsapp,
        location: createSiteInformationDto.location,
        about: {
          create: {
            title: createSiteInformationDto.aboutTitle,
            description: createSiteInformationDto.aboutDescription,
            image1: createSiteInformationDto.aboutImage1 || undefined,
            image2: createSiteInformationDto.aboutImage2 || undefined,
            image3: createSiteInformationDto.aboutImage3 || undefined,
            image4: createSiteInformationDto.aboutImage4 || undefined,
            image5: createSiteInformationDto.aboutImage5 || undefined,
          },
        },
      },
      include: {
        about: true,
      },
    });
    try {
      return createSuccessResponse('SiteInformation created', siteInformation);
    } catch (error) {
      throw new InternalServerErrorException(
        createFailureResponse('SiteInformation not created', error),
      );
    }
  }

  async findAll() {
    try {
      const siteInformations = await this.prisma.siteInformation.findMany();

      return createSuccessResponse('All siteInformations ', siteInformations);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: number) {
    try {
      const siteInformation = await this.prisma.siteInformation.findMany({
        include: {
          about: true,
        },
      });

      if (!siteInformation.length) {
        throw new NotFoundException('SiteInformation not found');
      }
      return createSuccessResponse('SiteInformation found', siteInformation[0]);
    } catch (error) {
      return createFailureResponse('SiteInformation not found', error);
    }
  }

  async update(id: number, updateSiteInformationDto: UpdateSiteInformationDto) {
    const siteInformation = await this.prisma.siteInformation.findMany();
    if (!siteInformation.length) {
      throw new NotFoundException('SiteInformation not found');
    }
    try {
      const siteId = siteInformation[0].id;

      const updatedSiteInformation = await this.prisma.siteInformation.update({
        where: { id: siteId },
        data: {
          description: updateSiteInformationDto.description,
          name: updateSiteInformationDto.name,
          url: updateSiteInformationDto.url,
          openingTime: updateSiteInformationDto.openingTime,
          address: updateSiteInformationDto.address,
          logo: updateSiteInformationDto.logo || undefined,
          icon: updateSiteInformationDto.icon || undefined,
          phone1: updateSiteInformationDto.phone2,
          phone2: updateSiteInformationDto.phone1,
          email1: updateSiteInformationDto.email2,
          email2: updateSiteInformationDto.email1,
          facebook: updateSiteInformationDto.facebook,
          twitter: updateSiteInformationDto.twitter,
          linkedin: updateSiteInformationDto.linkedin,
          instagram: updateSiteInformationDto.instagram,
          bgImage: updateSiteInformationDto.bgImage || undefined,
          footerAbout: updateSiteInformationDto.footerAbout,
          footerImg: updateSiteInformationDto.footerImg || undefined,
          rewardImg1: updateSiteInformationDto.rewardImg1 || undefined,
          rewardImg2: updateSiteInformationDto.rewardImg2 || undefined,
          whatsapp: updateSiteInformationDto.whatsapp,
          location: updateSiteInformationDto.location,
          about: {
            update: {
              title: updateSiteInformationDto.aboutTitle || undefined,
              description:
                updateSiteInformationDto.aboutDescription || undefined,
              image1: updateSiteInformationDto.aboutImage1 || undefined,
              image2: updateSiteInformationDto.aboutImage2 || undefined,
              image3: updateSiteInformationDto.aboutImage3 || undefined,
              image4: updateSiteInformationDto.aboutImage4 || undefined,
              image5: updateSiteInformationDto.aboutImage5 || undefined,
            },
          },
        },
        include: {
          about: true,
        },
      });
      return createSuccessResponse(
        'SiteInformation updated',
        updatedSiteInformation,
      );
    } catch (error) {
      throw new HttpException(
        createFailureResponse(
          'SiteInformation not updated Contact to admin',
          await error,
        ),
        400,
      );
    }
  }

  async remove(id: number) {
    const siteInformation = await this.prisma.siteInformation.findMany();
    if (!siteInformation.length) {
      throw new NotAcceptableException(
        createFailureResponse('SiteInformation not exist', siteInformation),
      );
    }
    await this.prisma.siteInformation.deleteMany();

    return createSuccessResponse(
      'SiteInformation  deleted',
      siteInformation[0],
    );
  }
}
