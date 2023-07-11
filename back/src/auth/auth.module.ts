import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import config from 'src/config';

@Module({
  imports: [
    UsersModule,
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