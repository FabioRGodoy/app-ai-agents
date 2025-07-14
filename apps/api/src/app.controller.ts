import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import { User } from '@repo/database';
import { IsPublic } from './auth/decorators/is-public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @IsPublic()
  @Get()
  getHello(): any {
    return this.appService.getUsers();
  }

  @Get('me')
  getMe(@CurrentUser() user: User): User {
    return user;
  }
}
