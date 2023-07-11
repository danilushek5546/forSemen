import { Module } from '@nestjs/common';

import { CharacteristicService } from './characteristic.service';
import { CharacteristicController } from './characteristic.controller';

@Module({
  providers: [CharacteristicService],
  controllers: [CharacteristicController],
  exports: [CharacteristicService],
})
export class CharacteristicModule {}
