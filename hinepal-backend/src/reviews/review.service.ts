import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import {
  createFailureResponse,
  createSuccessResponse,
} from 'src/utils/response.util';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ReviewService {
  constructor(private readonly prima: PrismaService) {}
  async create(createReviewDto: CreateReviewDto) {
    const { name, description, image, progress, link } = createReviewDto;

    const review = await this.prima.review.create({
      data: {
        name,
        description,
        image,
        link,
      },
    });
    if (!review) {
      throw new NotFoundException(
        createFailureResponse('Review not created', null),
      );
    }
    return createSuccessResponse('Review created successfully', review);
  }

  async findAll() {
    const review = await this.prima.review.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (!review.length) {
      throw new NotFoundException(
        createFailureResponse('No reviews found', null),
      );
    }
    return createSuccessResponse('All reviews', review);
  }

  async findOne(id: number) {
    const review = await this.prima.review.findUnique({
      where: {
        id,
      },
    });

    if (!review) {
      throw new NotFoundException(
        createFailureResponse('Review not found', null),
      );
    }
    return createSuccessResponse('Review found', review);
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    const { name, description, image, progress, link } = updateReviewDto;
    const existingReview = await this.prima.review.findUnique({
      where: {
        id,
      },
    });

    if (!existingReview) {
      throw new NotFoundException(
        createFailureResponse('Review not found', null),
      );
    }
    const review = await this.prima.review.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        image,

        link,
      },
    });
    return createSuccessResponse('Review updated successfully', review);
  }

  async remove(id: number) {
    const existingReview = await this.prima.review.findUnique({
      where: {
        id,
      },
    });
    if (!existingReview) {
      throw new NotFoundException(
        createFailureResponse('Review not found', 'Not found'),
      );
    }
    const review = await this.prima.review.delete({
      where: {
        id,
      },
    });
    return createSuccessResponse('Review deleted successfully', review);
  }
}
