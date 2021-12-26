const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

import { HttpStatusCodes, ResponsePayload } from '@bu/shared';
import { UserService } from './user.service';

export class AuthService {
  public static async login(
    email: string,
    password: string
  ): Promise<ResponsePayload> {
    console.log('email, password: ', `${email} ${password}`);
    const err = {
      error: { message: 'Your email and password combination is invalid.' },
    };

    if (!email || !password) {
      return Promise.resolve({
        code: HttpStatusCodes.UNAUTHORIZED,
        payload: err,
      });
    }

    let user;
    try {
      user = await UserService.getUserByEmail(email);
      console.log('user: ', user);
    } catch (e) {
      console.log('error: ', e);
      return Promise.resolve({
        code: HttpStatusCodes.UNAUTHORIZED,
        payload: err,
      });
    }

    if (!user) {
      return Promise.resolve({
        code: HttpStatusCodes.UNAUTHORIZED,
        payload: err,
      });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return Promise.resolve({
        code: HttpStatusCodes.UNAUTHORIZED,
        payload: err,
      });
    }

    const token = jwt.sign({ user }, 'yourSecretKey', {
      expiresIn: '24h',
    });
    const payload = {
      user,
      token,
    };
    return Promise.resolve({ code: HttpStatusCodes.OK, payload });
  }
}
