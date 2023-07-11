import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { CharacteristicService } from './characteristic.service';

@Controller('characteristic')
export class CharacteristicController {
  constructor(private characteristicService: CharacteristicService) { }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Post()
  createCharacteristics(@Body() name: string) {
    return this.characteristicService.createOne(name)
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  getCharacteristics() {
    return this.characteristicService.getCharactiristics()
  }
}