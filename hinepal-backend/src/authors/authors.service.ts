import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/prisma.service';
import {
  createFailureResponse,
  createSuccessResponse,
} from 'src/utils/response.util';

@Injectable()
export class AuthorsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createAuthorDto: CreateAuthorDto) {
    const exitAuthor = await this.prisma.author.findUnique({
      where: {
        email: createAuthorDto.email,
      },
    });
    if (exitAuthor) {
      throw new BadRequestException(
        createFailureResponse('Author: Email and Username already exists', {
          username: ['username already exists'],
          email: ['email already exists'],
        }),
      );
    }
    try {
      const author = await this.prisma.author.create({
        data: {
          name: createAuthorDto.name,
          username: createAuthorDto.username,
          email: createAuthorDto.email,
          bio: createAuthorDto.bio,
          profilePicture: createAuthorDto.profilePicture,
          socialLinks: createAuthorDto.socialLinks,
          website: createAuthorDto.website,
        },
      });
      if (!author) {
        throw new InternalServerErrorException(
          createFailureResponse('Author not created', null),
        );
      }
      return createSuccessResponse('Author: Firstname Lastname', author);
    } catch (error) {
      throw new InternalServerErrorException(
        createFailureResponse(
          (await error.Message) || 'Author not created Internal Server Error',
          await error,
        ),
      );
    }
  }

  async findAll() {
    const authors = await this.prisma.author.findMany({
      select: {
        name: true,
        username: true,
        email: true,
        id: true,
      },
    });
    if (!authors.length) {
      throw new NotFoundException(
        createFailureResponse('No authors found', null),
      );
    }

    return createSuccessResponse('All authors', authors);
  }

  async findOne(id: number) {
    const author = await this.prisma.author.findUnique({
      where: { id },
    });
    if (!author) {
      throw new NotFoundException(
        createFailureResponse('No author found', null),
      );
    }
    return createSuccessResponse('Author found', author);
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    const author = await this.prisma.author.findUnique({
      where: { id },
    });
    if (!author) {
      throw new NotFoundException(
        createFailureResponse('No author found', null),
      );
    }
    const updatedAuthor = await this.prisma.author.update({
      where: { id },
      data: updateAuthorDto,
    });
    return createSuccessResponse('Author: Firstname Lastname', updatedAuthor);
  }

  async remove(id: number) {
    const author = await this.prisma.author.findUnique({
      where: { id },
    });
    if (!author) {
      throw new NotFoundException(
        createFailureResponse('No author found', null),
      );
    }
    const deletedAuthor = await this.prisma.author.delete({
      where: { id },
    });
    return createSuccessResponse('Author: Firstname Lastname', deletedAuthor);
  }
}
