import { HttpException, Injectable } from '@nestjs/common';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
import { PrismaService } from 'src/prisma.service';
import {
  createFailureResponse,
  createSuccessResponse,
} from 'src/utils/response.util';


@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}
  create(createDashboardDto: CreateDashboardDto) {
    return 'This action adds a new dashboard';
  }

  async findAll() {
    try {
      const users = await this.prisma.user.count();
      const posts = await this.prisma.blog.count();
      
      const packages = await this.prisma.package.count();
      const bookings = await this.prisma.booking.count();
      return createSuccessResponse('Dashboard Data', {
        users,
        posts,
        packages,
        bookings,
      });
    } catch (error) {
      throw new HttpException(
        createFailureResponse('Something went wrong', error),
        400,
      );
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} dashboard`;
  }

  update(id: number, updateDashboardDto: UpdateDashboardDto) {
    return `This action updates a #${id} dashboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} dashboard`;
  }
}
