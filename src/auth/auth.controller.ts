import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api')
export class AuthController {
  constructor(private authService: AuthService) {
    this.authService.test();
  }

  @Get('/users')
  findAll() {
    return { name: 'hey' };
  }
}
