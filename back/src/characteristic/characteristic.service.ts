import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { Characteristic } from './Characteristic.entity';

@Injectable()
export class CharacteristicService {
  constructor(
    private db: DataSource,
  ) { }

  async createOne(name: string): Promise<Characteristic> {
    try {
      const characteristicDb = this.db.getRepository(Characteristic);
      const existCharactiristic = await characteristicDb
        .findOne({
          where: {
            name,
          },
        });
      if (existCharactiristic) {
        throw new BadRequestException('allready exists')
      }

      let genere = characteristicDb.create({
        name,
      });
  
      genere = await characteristicDb.save(genere);

      return genere;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException(error);
    }
  }

  async getCharactiristics(): Promise<Characteristic[]> {
    try {
      const generes = await this.db.getRepository(Characteristic).createQueryBuilder()
      .getMany();

      return generes;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

}
