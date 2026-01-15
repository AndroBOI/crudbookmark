import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  test() {
    return 'AuthService is working!';
  }

  signIn() {
    return 'Sign-in endpoint';
  }

  signUp() {
    return 'Sign-up endpoint';
  }
}
