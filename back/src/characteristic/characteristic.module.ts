import { Module, forwardRef } from '@nestjs/common';

import { CharacteristicService } from './characteristic.service';
import { CharacteristicController } from './characteristic.controller';
import { AppModule } from '../app.module';

@Module({
  imports: [forwardRef(() => AppModule)],
  providers: [CharacteristicService],
  controllers: [CharacteristicController],
  exports: [CharacteristicService],
})
export class CharacteristicModule {}
