import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserMapper } from './user.mapper';
import * as bcrypt from 'bcrypt';
import { handleServiceError } from 'src/common/utils/handle-service-error';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private readonly prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const userExists = await this.prisma.user.findUnique({
        where: { email: createUserDto.email },
      });

      if (userExists) {
        throw new ConflictException('E-mail já está cadastrado');
      }

      const passwordHash = await bcrypt.hash(createUserDto.password, 10);

      const newUser = await this.prisma.user.create({
        data: {
          ...createUserDto,
          password: passwordHash,
          emailVerified: false,
        },
      });

      return UserMapper.toResponseDto(newUser);
    } catch (error) {
      handleServiceError('UserService.create', error, this.logger, 'Erro ao criar usuário');
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id },
      });

      if (!user) {
        throw new NotFoundException('Usuário não encontrado');
      }

      return UserMapper.toResponseDto(user);
    } catch (error) {
      handleServiceError('UserService.findOne', error, this.logger, 'Erro ao buscar o usuário');
    }
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const { password: _, role: __, ...data } = updateUserDto;

      const updatedUser = await this.prisma.user.update({
        where: { id },
        data,
      });

      return UserMapper.toResponseDto(updatedUser);
    } catch (error) {
      handleServiceError('UserService.update', error, this.logger, 'Erro ao atualizar usuário');
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.user.delete({
        where: { id },
      });

      return { status: 'ok' };
    } catch (error) {
      handleServiceError('UserService.remove', error, this.logger, 'Erro ao deletar usuário');
    }
  }
}
