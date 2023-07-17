import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ProductsService } from './products/products.service';
import { UsersService } from './users/users.service';
import { AuthService } from './auth/auth.service';


@Injectable()
export class AppService {
  constructor(
    private db: DataSource,
    private prouctService: ProductsService,
    private userService: UsersService,
    private authService: AuthService,
  ) {  }
  dbService = this.db;
  prouctServ = this.prouctService
}
