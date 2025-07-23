import {
  HttpException,
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from 'src/prisma.service';
import {
  createFailureResponse,
  createSuccessResponse,
} from 'src/utils/response.util';

@Injectable()
export class TeamService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createTeamDto: CreateTeamDto) {
    try {
      const team = await this.prisma.team.create({ data: createTeamDto });
      if (!team) {
        throw new NotAcceptableException(
          createFailureResponse('No data found', null),
        );
      }
      return createSuccessResponse('Team created successfully', team);
    } catch (error) {
      throw new HttpException(
        createFailureResponse('Failed to create team', await error),
        400,
      );
    }
  }

  async findAll() {
    const teams = await this.prisma.team.findMany({
      take: 6,
      orderBy: {
        createdAt: 'desc',
      },
    });
    if (!teams.length) {
      throw new NotFoundException(
        createFailureResponse('No teams found', null),
      );
    }
    return createSuccessResponse('All teams', teams);
  }

  async findOne(id: number) {
    const team = await this.prisma.team.findUnique({
      where: { id },
    });
    if (!team) {
      throw new NotAcceptableException(
        createFailureResponse('No team found', null),
      );
    }
    return createSuccessResponse('Team found', team);
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    const existTeam = await this.prisma.team.findUnique({
      where: { id },
    });

    if (!existTeam) {
      throw new NotAcceptableException(
        createFailureResponse('No team found', null),
      );
    }
    const team = await this.prisma.team.update({
      where: { id },
      data: updateTeamDto,
    });

    return createSuccessResponse('Team updated successfully', team);
  }

  async remove(id: number) {
    const team = await this.prisma.team.findUnique({
      where: { id },
    });
    if (!team) {
      throw new NotAcceptableException(
        createFailureResponse('No team found', null),
      );
    }
    const data = await this.prisma.team.delete({
      where: { id },
    });
    return createSuccessResponse('Team deleted successfully', data);
  }
}
