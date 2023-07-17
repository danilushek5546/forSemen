import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { AppModule } from '../app.module';
import { ProductModule } from 'src/products/products.module';

@Module({
  imports: [forwardRef(() => ProductModule)],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
