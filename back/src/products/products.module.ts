import { Module, forwardRef } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { AppService } from 'src/app.service';
import { AppModule } from 'src/app.module';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [forwardRef(() => UsersModule), forwardRef(() => AuthModule)],
  providers: [ProductsService, AppService],
  controllers: [ProductsController],
  exports: [ProductsService],
})
export class ProductModule {}
