import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { User } from './user.entity';
import config from '../config';

@Injectable()
export class UsersService {
  constructor(
    private db: DataSource,
    private jwtService: JwtService,
  ) { }

  async findOne(email: string): Promise<User> {
    try {

      const user = await this.db.getRepository(User)
        .findOne({
          select: {
            id: true,
            email: true,
            password: true,
            firstName: true,
            lastName: true,
          },
          where: {
            email,
          },
        });

      return user;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async createOne(email: string, password: string, firstName?: string, lastName?: string): Promise<User> {
    try {
      const hashPassword = await bcrypt.hash(password, config.passwordSalt);
      const repo = this.db.getRepository(User);
      const user = repo.create({
        email,
        password: hashPassword,
        firstName,
        lastName,
      });

      await repo.save(user);

      return user;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

}
