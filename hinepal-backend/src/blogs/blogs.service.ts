import {
  HttpException,
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma.service';
import {
  createFailureResponse,
  createSuccessResponse,
} from 'src/utils/response.util';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createBlogDto: CreateBlogDto) {
    try {
      const existBlog = await this.prisma.blog.findUnique({
        where: {
          slug: createBlogDto.slug,
        },
      });
      if (existBlog) {
        throw new HttpException('Blog already exists', 409);
      }
      const response = await this.prisma.blog.create({
        data: {
          title: createBlogDto.title,
          description: createBlogDto.description,
          image: createBlogDto.image,
          link: createBlogDto.link,
          slug: createBlogDto.slug,
          content: createBlogDto.content,
          seo: {
            create: {
              metaTitle: createBlogDto.seo?.metaTitle,
              metaDescription: createBlogDto.seo?.metaDescription,
              metaKeywords: createBlogDto.seo?.metaKeywords,
              metaImage: createBlogDto.seo?.metaImage,
              metaRobots: createBlogDto.seo?.metaRobots,
              metaAuthor: createBlogDto.seo?.metaAuthor,
              metaCanonical: createBlogDto.seo?.metaCanonical,
              metaRating: createBlogDto.seo?.metaRating,
              metaCopyright: createBlogDto.seo?.metaCopyright,
              metaRevisit: createBlogDto.seo?.metaRevisit,
              twitterCard: createBlogDto.seo?.twitterCard,

              twitterSite: createBlogDto.seo?.twitterSite,
              schema: createBlogDto.seo?.schema,
            },
          },
        },
      });
      return createSuccessResponse('Blog created', response);
    } catch (error) {
      throw new HttpException(
        createFailureResponse(error.message || "Can't create", await error),
        400,
      );
    }
  }

  async findAll({ limit = 10, offset = 0, query = '', baseUrl }) {
    // Fetch the data with pagination and search
    const packages = await this.prisma.blog.findMany({
      skip: Number(offset || 0), // Skip records based on the offset
      take: Number(limit || 10), // Limit the number of records returned
      where: {
        title: {
          contains: query,
        },
      },
      orderBy: {
        createdAt: 'desc', // Order by creation date (or any other field)
      },
      select: {
        id: true,
        image: true,
        title: true,
        subtitle: true,
        description: true,
        slug: true,
        createdAt: true,
      },
    });

    // Count the total number of records that match the query
    const totalBlogs = await this.prisma.blog.count({
      where: {
        title: {
          contains: query,
        },
      },
    });

    // Determine if there's a next page
    const hasNextPage = offset + limit < totalBlogs;

    // Determine if there's a previous page
    const hasPreviousPage = offset > 0;

    // Construct URLs for next and previous pages
    const nextUrl = hasNextPage
      ? `${baseUrl}?limit=${limit}&offset=${offset + limit}&query=${encodeURIComponent(query)}`
      : null;

    const previousUrl = hasPreviousPage
      ? `${baseUrl}?limit=${limit}&offset=${Math.max(0, offset - limit)}&query=${encodeURIComponent(query)}`
      : null;

    return createSuccessResponse('Blogs found', {
      blogs: packages,
      total: totalBlogs,
      limit,
      offset,
      hasNextPage,
      hasPreviousPage,
      nextUrl,
      previousUrl,
    });
  }

  async findOne(slug: string) {
    const blog = await this.prisma.blog.findUnique({
      where: {
        slug,
      },
      include: {
        seo: true,
      },
    });

    if (!blog) {
      throw new NotFoundException(
        createFailureResponse('Blog not found', null),
      );
    }
    return createSuccessResponse('Blog found', blog);
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    const existBlog = await this.prisma.blog.findUnique({
      where: {
        id,
      },
    });
    // compress content of blog

    if (!existBlog) {
      throw new NotFoundException(
        createFailureResponse('Blog not found', null),
      );
    }
    // check if the slug is already exits in other record
    const allData = await this.prisma.blog.findUnique({
      where: {
        slug: updateBlogDto.slug,
      },
    });
    if (allData && allData.id != id) {
      throw new NotAcceptableException(
        createFailureResponse('Slug already exists', null),
      );
    }

    const blog = await this.prisma.blog.update({
      where: {
        id,
      },
      data: {
        title: updateBlogDto.title,
        description: updateBlogDto.description,
        image: updateBlogDto.image,
        link: updateBlogDto.link,
        slug: updateBlogDto.slug,
        content: updateBlogDto.content,
        seo: {
          create: {
            metaTitle: updateBlogDto.seo?.metaTitle,
            metaDescription: updateBlogDto.seo?.metaDescription,
            metaKeywords: updateBlogDto.seo?.metaKeywords,
            metaImage: updateBlogDto.seo?.metaImage,
            metaRobots: updateBlogDto.seo?.metaRobots,
            metaAuthor: updateBlogDto.seo?.metaAuthor,
            metaCanonical: updateBlogDto.seo?.metaCanonical,
            metaRating: updateBlogDto.seo?.metaRating,
            metaCopyright: updateBlogDto.seo?.metaCopyright,
            metaRevisit: updateBlogDto.seo?.metaRevisit,
            twitterCard: updateBlogDto.seo?.twitterCard,
            twitterSite: updateBlogDto.seo?.twitterSite,
            schema: updateBlogDto.seo?.schema,
          },
        },
      },
    });
    return createSuccessResponse('Blog updated', blog);
  }

  async remove(id: number) {
    // delete blog
    const isExist = await this.prisma.blog.findUnique({
      where: {
        id,
      },
    });
    if (!isExist) {
      throw new NotFoundException(
        createFailureResponse('Blog not found', null),
      );
    }
    const blog = await this.prisma.blog.delete({
      where: {
        id,
      },
    });
    return createSuccessResponse('Blog deleted successfully', blog);
  }
}
