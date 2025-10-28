import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { PrismaService } from 'src/prisma.service';
import {
  createFailureResponse,
  createSuccessResponse,
} from 'src/utils/response.util';

@Injectable()
export class DestinationsService {
  constructor(private prisma: PrismaService) {}
  async create(createDestinationDto: CreateDestinationDto) {
    const destination = await this.prisma.destination.create({
      data: {
        name: createDestinationDto.name,
        description: createDestinationDto.description,
        slug: createDestinationDto.slug,
        image: createDestinationDto.image,
        imageAlt: createDestinationDto?.imageAlt,
        activity: {
          connect: {
            id: Number(createDestinationDto.activityId),
          },
        },
        seo: {
          create: {
            ...createDestinationDto.seo,
          },
        },
      },
    });
    return createSuccessResponse('Destination created', destination);
  }

  async findAll() {
    const destinations = await this.prisma.destination.findMany({
      include: {
        activity: {
          select: {
            name: true,
            slug: true,
            image: true,
            imageAlt: true, 
          },
        },
        _count: {
          select: {
            packages: true,
          },
        },
        seo: true,
      },
    });
    return createSuccessResponse('All destinations', destinations);
  }

  async findOne(slug: string) {
    const destination = await this.prisma.destination.findUnique({
      where: {
        slug,
      },
      include: {
        activity: {
          select: {
            name: true,
            slug: true,
            image: true,
            imageAlt: true,
          },
        },
        seo: true,
        packages: {
          select: {
            id: true,
            title: true,
            description: true,
            duration: true,
            thumbnail: true,
            thumbnailImageAlt: true,
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
        },
      },
    });
    if (!destination) {
      throw new NotFoundException(
        createFailureResponse('Destination not found', null),
      );
    }
    return createSuccessResponse('Destination found', destination);
  }
  async findTopDestinations() {
    const destinations = await this.prisma.destination.findMany({
      take: 4,
      where: {
        activity: {
          name: 'Trekking',
        },
      },
      include: {
        activity: {
          select: {
            name: true,
            slug: true,
          },
        },
        _count: {
          select: {
            packages: true,
          },
        },
        seo: true,
      },
    });
    return createSuccessResponse('Top destinations', destinations);
  }

  async update(id: number, updateDestinationDto: UpdateDestinationDto) {
    const existDestination = await this.prisma.destination.findUnique({
      where: { id },
    });

    if (!existDestination) {
      throw new NotFoundException(
        createFailureResponse('Destination not found', null),
      );
    }

    const destination = await this.prisma.destination.update({
      where: { id },
      data: {
        name: updateDestinationDto.name,
        description: updateDestinationDto.description,
        slug: updateDestinationDto.slug || undefined,
        image: updateDestinationDto.image,
        imageAlt: updateDestinationDto?.imageAlt,
        activity: {
          connect: {
            id: Number(updateDestinationDto.activityId),
          },
        },
        seo: {
          update: {
            ...updateDestinationDto.seo,
          },
        },
      },
    });
    return createSuccessResponse(
      'Destination updated successfully',
      destination,
    );
  }

  async remove(id: number) {
    const destination = await this.prisma.destination.findUnique({
      where: {
        id,
      },
    });
    if (!destination) {
      throw new NotFoundException(
        createFailureResponse('Destination not found', null),
      );
    }
    const response = await this.prisma.destination.delete({
      where: {
        id,
      },
    });
    return createSuccessResponse('Destination deleted successfully', response);
  }
}
