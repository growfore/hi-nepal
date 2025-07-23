import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarouselDto } from './dto/create-carousel.dto';
import { UpdateCarouselDto } from './dto/update-carousel.dto';
import { PrismaService } from 'src/prisma.service';
import {
  createFailureResponse,
  createSuccessResponse,
} from 'src/utils/response.util';

@Injectable()
export class CarouselsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCarouselDto: CreateCarouselDto) {
    const { title, description, image, link, subtitle, page } =
      createCarouselDto;
    try {
      const carousel = await this.prisma.carousel.create({
        data: {
          title,
          subtitle,
          description,
          image,
          link,
          page,
        },
      });
      return createSuccessResponse('Carousel created successfully', carousel);
    } catch (error) {
      throw new HttpException('Failed to create carousel', 500, error);
    }
  }

  async findAll() {
    const carousels = await this.prisma.carousel.findMany();
    if (!carousels.length) {
      throw new NotFoundException('No carousels found');
    }
    return createSuccessResponse('All carousels', carousels);
  }

  async findOne(page: string) {
    const carousels = await this.prisma.carousel.findMany({
      where: {
        page,
      },
    });
    if (!carousels.length) {
      throw new NotFoundException(createFailureResponse('No data found', null));
    }
    return createSuccessResponse('All carousels', carousels);
  }
  async findOneById(id: number) {
    const carousel = await this.prisma.carousel.findUnique({
      where: {
        id,
      },
    });
    if (!carousel) {
      throw new NotFoundException(
        createFailureResponse('Carousel not found', null),
      );
    }
    return createSuccessResponse('Carousel found', carousel);
  }

  async update(id: number, updateCarouselDto: UpdateCarouselDto) {
    const carousel = await this.prisma.carousel.findUnique({
      where: {
        id,
      },
    });
    if (!carousel) {
      throw new NotFoundException(
        createFailureResponse('Carousel not found', null),
      );
    }

    const response = await this.prisma.carousel.update({
      where: {
        id,
      },
      data: {
        ...updateCarouselDto,
      },
    });
    return createSuccessResponse('Carousel updated successfully', response);
  }

  async remove(id: number) {
    const carousel = await this.prisma.carousel.findUnique({
      where: {
        id,
      },
    });
    if (!carousel) {
      throw new NotFoundException(
        createFailureResponse('Carousel not found', null),
      );
    }
    const response = await this.prisma.carousel.delete({
      where: {
        id,
      },
    });
    return createSuccessResponse('Carousel deleted successfully', response);
  }
}
