import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import config from '../config';
import { AppModule } from '../app.module';
import { ProductModule } from 'src/products/products.module';

@Module({
  imports: [
    UsersModule,
    forwardRef(() => AppModule),
    forwardRef(() => ProductModule),
    JwtModule.register({
      global: true,
      secret: config.token.secretKey,
      signOptions: { expiresIn: config.token.expiresIn },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}