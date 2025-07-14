import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    return createUserDto
  }

  async findOne(id: string) {
    try {
      const data = await this.prisma.user.findUnique({
        where: { id },
      });

      const user = {
        ...data,
        password: undefined,
      };

      return user;
    } catch (error) {
      throw new Error('Erro ao buscar o usuário');
    }
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const updateUser = await this.prisma.user.update({
        where: { id },
        data: {
          ...updateUserDto
        },
      });

      const user = {
        ...updateUser,
        password: undefined,
      };

      return user;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.user.delete({ where: { id } });
      return 'Usuário excluído com sucesso';
    } catch (error) {
      throw error;
    }
  }
}
