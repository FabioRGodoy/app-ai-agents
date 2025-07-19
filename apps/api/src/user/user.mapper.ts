import { UserResponseDto } from './dto/user-respose.dto';
import { UserEntity } from './entities/user.entity';

export class UserMapper {
  static toResponseDto(user: UserEntity): UserResponseDto {
    const {
      id,
      email,
      name,
      username,
      image,
      role,
      locale,
      emailVerified,
      createdAt,
      updatedAt,
    } = user;

    return {
      id,
      email,
      name,
      username,
      image,
      role,
      locale,
      emailVerified,
      createdAt,
      updatedAt,
    };
  }
}
