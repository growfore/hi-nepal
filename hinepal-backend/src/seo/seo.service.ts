import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { createFailureResponse } from 'src/utils/response.util';

@Injectable()
export class SeoService {
  constructor(private readonly prisma: PrismaService) {}
  async findOne(slug: string) {
    const seo = await this.prisma.seo.findFirst({
      where: {
        // check if the slug is its parent exit
        OR: [
          {
            Blog: {
              slug,
            },
          },
          {
            Activity: {
              slug,
            },
          },
          {
            Destination: {
              slug,
            },
          },
          {
            Package: {
              slug,
            },
          },
        ],
      },
    });

    if (!seo) {
      throw new NotFoundException(createFailureResponse('Seo not found', null));
    }
    return createFailureResponse('Seo found', seo);
  }
}
