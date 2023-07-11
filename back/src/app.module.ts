import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { CharacteristicController } from './characteristic/characteristic.controller';
import { CharacteristicModule } from './characteristic/characteristic.module';
import { ProductsController } from './products/products.controller';
import { ProductModule } from './products/products.module';
import config  from './config';
import { join } from 'path';

console.log(__dirname)

@Module({
  imports: [
    AuthModule,
    UsersModule,
    CharacteristicModule,
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.db.host,
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'products',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
      migrations: ['./dist/migrations/*.{ts,js}'],
    }
    ),
  ],
  controllers: [AppController, AuthController, CharacteristicController, ProductsController],
  providers: [AppService],
})
export class AppModule {}