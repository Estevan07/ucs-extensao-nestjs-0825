import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from './guards/auth/auth.guard'; // importa o guard criado

// Esse é um exemplo de controler
@Controller('users')
export class UsersController {
  @Get('profile')
  @UseGuards(AuthGuard) // É essa linha que deverá ser adicionada na sua função.
  getProfile(@Req() req) {
    return { user: req.user };
  }
}

@Controller()
export class AppController {
  static getHello(): any {
    throw new Error('Method not implemented.');
  }
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}