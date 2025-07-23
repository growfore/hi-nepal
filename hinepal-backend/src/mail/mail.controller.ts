import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { MailService } from './mail.service';
import { CreateMailDto } from './dto/create-mail.dto';

@Controller('api/mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  create(@Body() createMailDto: CreateMailDto) {
    return this.mailService.sendMail(createMailDto);
  }
  @Get()
  findAll() {
    return this.mailService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailService.remove(+id);
  }
}
