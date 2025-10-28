import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { PrismaService } from 'src/prisma.service';
import {
  createFailureResponse,
  createSuccessResponse,
} from 'src/utils/response.util';

@Injectable()
export class ActivitiesService {
  constructor(private prisma: PrismaService) {}
  async create(createActivityDto: CreateActivityDto) {
    const exist = await this.prisma.activity.findUnique({
      where: {
        slug: createActivityDto.slug,
      },
    });
    if (exist) {
      throw new NotFoundException(
        createFailureResponse('Activity already exist', null),
      );
    }
    const activity = await this.prisma.activity.create({
      data: {
        name: createActivityDto.name,
        description: createActivityDto.description,
        slug: createActivityDto.slug,
        image: createActivityDto.image,
        imageAlt: createActivityDto?.imageAlt,
        seo: {
          create: {
            ...createActivityDto.seo,
          },
        },
      },
    });
    return createSuccessResponse('Activity created', activity);
  }

  async navItems() {
    const activities = await this.prisma.activity.findMany({
      select: {
        name: true,
        slug: true,
        destinations: {
          select: {
            name: true,
            slug: true,
            packages: {
              select: {
                title: true,
                slug: true,
              },
            },
          },
        },
      },
    });
    return createSuccessResponse('All activities', activities);
  }

  async findAll() {
    const activities = await this.prisma.activity.findMany({
      // for update activities seo
      include: {
        _count: true,
      },
    });
    return createSuccessResponse('All activities', activities);
  }

  async findOne(slug: string) {
    const activity = await this.prisma.activity.findUnique({
      where: {
        slug,
      },
      include: {
        seo: true,
        destinations: {
          select: {
            name: true,
            slug: true,
            image: true,
            imageAlt: true,
          },
        },
      },
    });
    if (!activity) {
      throw new Error('Activity not found');
    }
    return createSuccessResponse('Activity found', activity);
  }

  async update(id: number, updateActivityDto: UpdateActivityDto) {
    const old = await this.prisma.activity.findUnique({
      where: {
        id,
      },
    });
    if (!old) {
      throw new NotFoundException(
        createFailureResponse('Activity not found', null),
      );
    }
    const activity = await this.prisma.activity.update({
      where: { id },
      data: {
        name: updateActivityDto.name,
        description: updateActivityDto.description,
        slug: updateActivityDto.slug,
        image: updateActivityDto.image,
        imageAlt: updateActivityDto?.imageAlt,
        seo: {
          update: {
            ...updateActivityDto.seo,
          },
        },
      },
    });
    return createSuccessResponse('Activity updated successfully', activity);
  }

  async remove(id: number) {
    const activity = await this.prisma.activity.findUnique({
      where: {
        id,
      },
    });
    if (!activity) {
      throw new NotFoundException(
        createFailureResponse('Activity not found', null),
      );
    }
    const response = await this.prisma.activity.delete({
      where: {
        id,
      },
    });
    return createSuccessResponse('Activity deleted successfully', response);
  }
}
