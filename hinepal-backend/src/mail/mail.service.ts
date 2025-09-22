// mail.service.ts
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateMailDto } from './dto/create-mail.dto';
import {
  createFailureResponse,
  createSuccessResponse,
} from 'src/utils/response.util';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private readonly prisma: PrismaService,
  ) {}

  async sendMail(createMailDto: CreateMailDto) {
    try {
      const { name, phone, email, message } = createMailDto;
      const mail = await this.prisma.mail.create({
        data: {
          name,
          phone,
          email,
          message,
        },
      });
      if (!mail) {
        throw new InternalServerErrorException(
          createFailureResponse('Mail not sent', mail),
        );
      }
      await this.mailerService.sendMail({
        to: process.env.MAIL_USER,
        subject: 'Contact Request',
        text: message,
        from: email,
        html: `<div>
        <h1>Contact Request</h1>
        <p>
          <strong>Name:</strong> ${name}
        </p>
        <p>
          <strong>Phone:</strong> ${phone}
        </p>
        <p>
          <strong>Email:</strong> ${email}
        </p>
        <p>
          <strong>Message:</strong> ${message}
        </p>
        </div>
        `,
      });
      return createSuccessResponse('Mail sent successfully', mail);
    } catch (error) {
      throw new InternalServerErrorException(
        createFailureResponse('Failed to send mail', await error),
      );
    }
  }
  async findAll() {
    try {
      const mails = await this.prisma.mail.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      });
      return createSuccessResponse('All mails', mails);
    } catch (error) {
      throw new InternalServerErrorException(
        createFailureResponse(await error.Message, await error),
      );
    }
  }
  async remove(id: number) {
    const mail = await this.prisma.mail.findUnique({
      where: {
        id,
      },
    });
    if (!mail) {
      throw new InternalServerErrorException(
        createFailureResponse('Mail not found', null),
      );
    }
    const response = await this.prisma.mail.delete({
      where: {
        id,
      },
    });
    return createSuccessResponse('Mail deleted successfully', response);
  }
}
