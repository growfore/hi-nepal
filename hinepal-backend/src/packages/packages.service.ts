import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { PrismaService } from 'src/prisma.service';
import {
  createFailureResponse,
  createSuccessResponse,
} from 'src/utils/response.util';
@Injectable()
export class PackagesService {
  constructor(private prisma: PrismaService) {}
  async create(createPackageDto: CreatePackageDto) {
    const pack = await this.prisma.package.findUnique({
      where: {
        slug: createPackageDto.slug,
      },
    });

    if (pack) {
      throw new BadRequestException(
        createFailureResponse(
          'Slug already exists',
          "Slug can't be same as existing package slug",
        ),
      );
    }
    const response = await this.prisma.package.create({
      data: {
        title: createPackageDto?.title,
        description: createPackageDto?.description,
        banner: createPackageDto?.banner || '',
        thumbnail: createPackageDto?.thumbnail || '',
        link: createPackageDto?.link,
        slug: createPackageDto?.slug,
        duration: createPackageDto?.duration,
        content: createPackageDto?.content,
        price: createPackageDto?.price,
        itenary: createPackageDto?.itenary,
        includes: createPackageDto?.includes,
        goodtoknow: createPackageDto?.goodtoknow,
        groupAge: createPackageDto?.groupAge,
        groupSize: createPackageDto?.groupSize,
        accommodation: createPackageDto?.accommodation,
        attractions: createPackageDto?.attractions,
        altitude: createPackageDto?.altitude,
        culture: createPackageDto?.culture,
        endAt: createPackageDto?.endAt,
        startFrom: createPackageDto?.startFrom,
        rating: createPackageDto?.rating,
        videoLink: createPackageDto?.videoLink,
        bestSeason: createPackageDto?.bestSeason,
        transportation: createPackageDto?.transportation || '',
        permits: createPackageDto?.permits || '',
        tripGrade: createPackageDto?.tripGrade || '',
        overview: createPackageDto?.overview || '',
        highlights: createPackageDto?.highlights || '',
        altitudeInfo: createPackageDto?.altitudeInfo || '',
        packing: createPackageDto?.packing || '',
        bestSeasonInfo: createPackageDto?.bestSeasonInfo || '',
        routeOverview: createPackageDto?.routeOverview || '',
        excludes: createPackageDto?.excludes || '',
        sicknessAndSaftey: createPackageDto?.sicknessAndSaftey || '',
        insuranceAndEmergency: createPackageDto?.insuranceAndEmergency || '',
        permitsAndRegulations: createPackageDto?.permitsAndRegulations || '',
        shortTrekInfo: createPackageDto?.shortTrekInfo || '',
        whyChooseThisPackage: createPackageDto?.whyChooseThisPackage || '',
        priceBreakDown: createPackageDto?.priceBreakDown || '',
        bookingInfo: createPackageDto?.bookingInfo || '',
        Author: {
          connect: {
            id: Number(createPackageDto?.authorId),
          },
        },
        media: {
          createMany: {
            data: createPackageDto?.images || [],
          },
        },
        destination: {
          connect: { id: Number(createPackageDto?.destinationId) },
        },
        discount: createPackageDto?.discount,
        introduction: createPackageDto?.introduction,

        seo: {
          create: {
            metaTitle: createPackageDto.seo?.metaTitle,
            metaDescription: createPackageDto.seo?.metaDescription,
            metaKeywords: createPackageDto.seo?.metaKeywords,
            metaImage: createPackageDto.seo?.metaImage,
            metaRobots: createPackageDto.seo?.metaRobots,
            metaAuthor: createPackageDto.seo?.metaAuthor,
            metaCanonical: createPackageDto.seo?.metaCanonical,
            metaRating: createPackageDto.seo?.metaRating,
            metaCopyright: createPackageDto.seo?.metaCopyright,
            metaRevisit: createPackageDto.seo?.metaRevisit,

            twitterCard: createPackageDto.seo?.twitterCard,

            twitterSite: createPackageDto.seo?.twitterSite,
            schema: createPackageDto?.seo?.schema,
          },
        },
      },
      include: {
        seo: true,
      },
    });
    return createSuccessResponse('Package created successfully', response);
  }

  async findAll({ limit = 10, offset = 0, query = '', baseUrl }) {
    // Fetch the data with pagination and search
    const packages = await this.prisma.package.findMany({
      skip: Number(offset) || 0, // Skip records based on the offset
      take: Number(limit) || 10, // Limit the number of records returned
      where: {
        title: {
          contains: query?.trim() || undefined,
        },
      },
      orderBy: {
        createdAt: 'desc', // Order by creation date (or any other field)
      },
      select: {
        id: true,
        title: true,
        description: true,
        duration: true,
        thumbnail: true,
        link: true,
        slug: true,
        price: true,
        discount: true,
        groupSize: true,
        destination: {
          select: {
            name: true,
            slug: true,
          },
        },
        createdAt: true,
      },
    });

    // Count the total number of records that match the query
    const totalPackages = await this.prisma.package.count({
      where: {
        title: {
          contains: query?.trim() || undefined,
        },
      },
    });
    // Determine if there's a next page
    const hasNextPage = (offset || 0) + (limit || 12) < totalPackages;

    // Determine if there's a previous page
    const hasPreviousPage = (offset || 0) > 0;

    // Construct URLs for next and previous pages
    const nextUrl = hasNextPage
      ? `${baseUrl}?limit=${limit}&offset=${offset + limit}&query=${encodeURIComponent(query)}`
      : null;

    const previousUrl = hasPreviousPage
      ? `${baseUrl}?limit=${limit}&offset=${Math.max(0, offset - limit)}&query=${encodeURIComponent(query)}`
      : null;

    return createSuccessResponse('Packages fetched successfully', {
      packages: packages,
      total: totalPackages,
      limit: limit || 12,
      offset: offset || 0,
      hasNextPage,
      hasPreviousPage,
      nextUrl,
      previousUrl,
    });
  }

  async findOne(slug: string) {
    const pack = await this.prisma.package.findUnique({
      where: {
        slug,
      },
      include: {
        seo: true,
        media: true,
        destination: {
          select: {
            name: true,
            slug: true,
            activity: {
              select: {
                name: true,
                slug: true,
              },
            },
          },
        },
        Author: true,
      },
    });
    const relatedPackages = await this.prisma.package.findMany({
      where: {
        destinationId: pack?.destinationId,
        title: {
          not: pack?.title,
        },
      },
      take: 4,
      select: {
        title: true,
        slug: true,
      },
    });
    if (!pack) {
      throw new NotFoundException(
        createFailureResponse('No Packages found', null),
      );
    }
    return createSuccessResponse('Package found', {
      package: pack,
      relatedPackages,
    });
  }

  async update(id: number, updatePackageDto: UpdatePackageDto) {
    try {
      const oldPack = await this.prisma.package.findUnique({
        where: {
          id,
        },
      });
      if (!oldPack) {
        throw new NotFoundException(
          createFailureResponse('Package not found', null),
        );
      }
      // check the slug is
      const relatedPack = await this.prisma.package.findUnique({
        where: {
          slug: updatePackageDto.slug,
        },
      });
      if (relatedPack && relatedPack.id !== id) {
        throw new BadRequestException(
          createFailureResponse(
            'Slug already exists',
            "Slug can't be same as existing package slug",
          ),
        );
      }
      const pack = await this.prisma.package.update({
        where: {
          id,
        },
        data: {
          title: updatePackageDto.title,
          description: updatePackageDto.description,
          duration: updatePackageDto.duration,
          thumbnail: updatePackageDto?.thumbnail || undefined,
          banner: updatePackageDto?.banner || undefined,
          link: updatePackageDto.link,
          slug: updatePackageDto.slug,
          content: updatePackageDto.content,
          price: updatePackageDto.price,
          itenary: updatePackageDto.itenary,
          includes: updatePackageDto.includes,
          goodtoknow: updatePackageDto.goodtoknow,
          groupAge: updatePackageDto.groupAge,
          groupSize: updatePackageDto.groupSize,
          accommodation: updatePackageDto.accommodation,
          attractions: updatePackageDto.attractions,
          altitude: updatePackageDto.altitude,
          culture: updatePackageDto.culture,
          endAt: updatePackageDto.endAt,
          startFrom: updatePackageDto.startFrom,
          rating: updatePackageDto.rating,
          videoLink: updatePackageDto.videoLink,
          bestSeason: updatePackageDto.bestSeason,
          transportation: updatePackageDto?.transportation || '',
          permits: updatePackageDto?.permits || '',
          tripGrade: updatePackageDto?.tripGrade || '',
          overview: updatePackageDto?.overview || "",
          highlights: updatePackageDto?.highlights || "",
          altitudeInfo: updatePackageDto?.altitudeInfo || "",
          packing: updatePackageDto?.packing || "",
          bestSeasonInfo: updatePackageDto?.bestSeasonInfo || "",
          routeOverview: updatePackageDto?.routeOverview || "",
          excludes: updatePackageDto?.excludes || "",
          sicknessAndSaftey: updatePackageDto?.sicknessAndSaftey || "",
          insuranceAndEmergency: updatePackageDto?.insuranceAndEmergency || "",
          permitsAndRegulations: updatePackageDto?.permitsAndRegulations || "",
          shortTrekInfo: updatePackageDto?.shortTrekInfo || "",
          whyChooseThisPackage: updatePackageDto?.whyChooseThisPackage || "",
          priceBreakDown: updatePackageDto?.priceBreakDown || "",
          bookingInfo: updatePackageDto?.bookingInfo || "",

          Author: {
            connect: {
              id: Number(updatePackageDto.authorId),
            },
          },
          media: {
            createMany: {
              data: updatePackageDto?.images || [],
            },
          },
          destination: {
            connect: {
              id: Number(updatePackageDto.destinationId),
            },
          },
          discount: updatePackageDto.discount,
          introduction: updatePackageDto.introduction,
          seo: {
            update: {
              metaTitle: updatePackageDto.seo?.metaTitle,
              metaDescription: updatePackageDto.seo?.metaDescription,
              metaKeywords: updatePackageDto.seo?.metaKeywords,
              metaImage: updatePackageDto.seo?.metaImage || undefined,
              metaRobots: updatePackageDto.seo?.metaRobots,
              metaAuthor: updatePackageDto.seo?.metaAuthor,
              metaCanonical: updatePackageDto.seo?.metaCanonical,
              metaRating: updatePackageDto.seo?.metaRating,
              metaCopyright: updatePackageDto.seo?.metaCopyright,
              metaRevisit: updatePackageDto.seo?.metaRevisit,
              twitterCard: updatePackageDto.seo?.twitterCard,
              twitterSite: updatePackageDto.seo?.twitterSite,
              schema: updatePackageDto.seo?.schema,
            },
          },
        },
        include: {
          seo: true,
        },
      });

      return createSuccessResponse('Package updated successfully', pack);
    } catch (error) {
      throw new HttpException(
        createFailureResponse('Failed to update package', error),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async remove(id: number) {
    const pack = await this.prisma.package.findUnique({
      where: {
        id,
      },
    });
    if (!pack) {
      throw new NotFoundException(
        createFailureResponse('Package not found', "Package doesn't exist"),
      );
    }
    const response = await this.prisma.package.delete({
      where: {
        id,
      },
    });
    return createSuccessResponse('Package deleted successfully', response);
  }
}
