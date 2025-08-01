
export class UserResponseDto {
  id: string;
  name: string;
  email: string;
  username?: string;
  image?: string;
  role?: string;
  locale?: string;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
