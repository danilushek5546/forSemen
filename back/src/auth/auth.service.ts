import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private userServise: UsersService,
  ) { }

  async signIn(email: string, pass: string): Promise<{ user: User, token: string }> {
    try {
      const user = await this.usersService.findOne(email);

      const comparePassword = await bcrypt.compare(pass, user.password);
      if (!comparePassword) {
        throw new BadRequestException('Wrond password');
      }
  
      const payload = { sub: user.id };
      const token = await this.jwtService.signAsync(payload);
      delete user.password;
  
      return {
        token,
        user,
      };
    } catch (error) {
      if(error instanceof BadRequestException) {
        throw error;
      }

      throw new InternalServerErrorException(error);
    }
  }

  async signUp(login: string, pass: string, firstName?: string, lastName?: string) {
    try{
      const existUser = await this.userServise.findOne(login);
      if(existUser) {
        throw new BadRequestException('user with this email is allready exists');
      }

      const user = await this.userServise.createOne(login, pass, firstName, lastName);

      delete user.password;
      const payload = { sub: user.id };
      const token = await this.jwtService.signAsync(payload);

      return {
        token,
        user,
      };
    } catch (error) {
      if(error instanceof BadRequestException) {
        throw error;
      }

      throw InternalServerErrorException
    }
  }
}
