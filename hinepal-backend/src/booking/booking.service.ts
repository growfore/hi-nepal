import {
  HttpException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaService } from 'src/prisma.service';
import {
  createFailureResponse,
  createSuccessResponse,
} from 'src/utils/response.util';
import * as jwt from 'jsonwebtoken';
import { MailerService } from '@nestjs-modules/mailer';
@Injectable()
export class BookingService {
  constructor(
    private mailerService: MailerService,
    private readonly prisma: PrismaService,
  ) {}
  async create(createBookingDto: CreateBookingDto, token: string | null) {
    let user = null;
    if (token) {
      user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    }

    try {
      const booking = await this.prisma.booking.create({
        data: {
          packageId: createBookingDto.packageId,
          userId: user?.id || null,
          bookingDetail: {
            create: createBookingDto.bookingDetail,
          },
        },
      });
      await this.mailerService.sendMail({
        to: process.env.MAIL_USER,
        subject: 'Contact Request',
        text: 'Booking Request',
        from: user?.email,
        html: `<div>
        <h1>Booking Request Details</h1>
        <p>
          <strong>Name:</strong> ${createBookingDto.bookingDetail.name}
        </p>
         <p>
          <strong>Address:</strong> ${createBookingDto.bookingDetail.address}
        </p>
        <p>
          <strong>Phone:</strong> ${createBookingDto.bookingDetail.phone}
        </p>
        <p>
          <strong>Email:</strong> ${createBookingDto.bookingDetail.email}
        </p>
          <p>
          <strong>Nationality:</strong> ${createBookingDto.bookingDetail.country}
        </p>
        <p>
          <strong>Message:</strong> ${createBookingDto.bookingDetail.message}
        </p>
        </div>
        `,
      });
      return createSuccessResponse('Booking created successfully', booking);
    } catch (error) {
      throw new HttpException(
        createFailureResponse(
          (await error.message) || 'Something went wrong',
          await error,
        ),
        500,
      );
    }
  }

  async findAll() {
    const bookings = await this.prisma.booking.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            phone: true,
          },
        },
        bookingDetail: {
          select: {
            name: true,
            email: true,
            phone: true,
            duration: true,
            country: true,
            date: true,
          },
        },
      },
    });
    if (!bookings.length) {
      throw new NotFoundException(
        createFailureResponse('No bookings found', null),
      );
    }
    return createSuccessResponse('Bookings fetched successfully', bookings);
  }

  async findOne(id: number) {
    const booking = await this.prisma.booking.findUnique({
      where: { id },
      include: {
        user: true,
        bookingDetail: true,
      },
    });

    return `This action returns a #${id} booking`;
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
