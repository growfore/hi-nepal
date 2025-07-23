// auth/auth.service.ts
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import {
  ChangePasswordDto,
  LoginDto,
  RegisterDto,
} from './dto/create-auth.dto';
import { PrismaService } from 'src/prisma.service';
import {
  createFailureResponse,
  createSuccessResponse,
} from 'src/utils/response.util';

@Injectable()
export class AuthService {
  private users: any[] = []; // Replace with a database in production

  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async register(registerDto: RegisterDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: registerDto.email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    if (user) {
      throw new BadRequestException(
        createFailureResponse('User already exists', user),
      );
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    const newUser = await this.prisma.user.create({
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
        phone: true,
        address: true,
        country: true,
        createdAt: true,
        updatedAt: true,
      },
      data: {
        ...registerDto,
        password: hashedPassword,
      },
    });
    return createSuccessResponse('User created successfully', newUser);
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const token = this.jwtService.sign(
      {
        email,
        id: user.id,
        role: user.role,
        username: user.username,
        phone: user.phone,
        address: user.address,
        country: user.country,
      },
      {
        secret: process.env.JWT_SECRET_KEY,
      },
    );
    return createSuccessResponse('User logged in successfully', {
      token,
      role: user.role,
    });
  }

  async changePassword(changePasswordDto: any) {
    const { email, currentPassword, newPassword } = changePasswordDto?.body;
    if (!email || !currentPassword || !newPassword) {
      throw new BadRequestException(
        createFailureResponse('Missing required fields', null),
      );
    }
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    const u = await this.prisma.user.update({
      where: {
        email,
      },
      data: {
        password: hashedNewPassword,
      },
    });

    return createSuccessResponse('Password changed successfully', u);
  }

  async initAdmin() {
    const user = await this.prisma.user.findUnique({
      where: {
        email: 'test@gmail.com',
      },
    });

    if (!user) {
      const hashedPassword = await bcrypt.hash('12345678', 10);
      const newUser = await this.prisma.user.create({
        data: {
          name: 'admin',
          email: 'test@gmail.com',
          password: hashedPassword,
          address: 'admin',
          country: 'admin',
          role: 'admin',
        },
      });
      if (newUser) {
        return createSuccessResponse('Admin created successfully', newUser);
      } else {
        throw new UnauthorizedException(
          createFailureResponse('Admin not created', null),
        );
      }
    } else {
      return createFailureResponse('Admin already exists', null);
    }
  }
  async verifyAdmin(token: string) {
    const decoded = this.jwtService.verify(token, {
      secret: process.env.JWT_SECRET_KEY,
    });
    const user = await this.prisma.user.findUnique({
      where: {
        email: decoded.email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid token');
    }
    if (user.role !== 'admin') {
      throw new UnauthorizedException('Unauthorized access');
    }
    return user;
  }
}
