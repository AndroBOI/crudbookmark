import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  test() {
    return this.authService.test();
  }

  @Post('signin')
  signIn() {
    return this.authService.signIn();
  }

  @Post('signup')
  signUp() {
    return this.authService.signUp();
  }
}
