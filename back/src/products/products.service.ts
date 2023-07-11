import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { Product } from './products.entity';
import { Characteristic } from '../characteristic/Characteristic.entity';

@Injectable()
export class ProductsService {
  constructor(
    private db: DataSource,
  ) { }

  async getAll(
    perPage?: string,
    page?: string,
    characteristics?: string,
    priceMax?: number, 
    priceMin?: number,
    sortBy?: string,
  ): Promise<{ count: number, productsArray: Product[] }> {
    try {
      let offset = 0;

      page = page || '0';

      if (perPage) {
        offset = +page * +perPage;
      } else {
        perPage = '0';
      }

      if (!priceMin) {
        priceMin = 0;
      }

      if (!priceMax) {
        priceMax = 100;
      }

      const queryBuilder = this.db.getRepository(Product).createQueryBuilder('Product')
        .leftJoinAndSelect('Product.characteristic', 'characteristic')
        .orderBy(
          (sortBy && `Product.${sortBy.toLowerCase()}`) || 'Product.id', 'ASC',
        )
        .andWhere('Product.price BETWEEN :priceMin AND :priceMax', { priceMin, priceMax });

      if (characteristics) {
        const characteristicId = characteristics.split(',');
        queryBuilder.andWhere('characteristic.id IN (:...characteristicId)', { characteristicId });
      }

      const products = await queryBuilder
        .skip(offset)
        .take(+perPage)
        .getManyAndCount();

      const count = products[1];
      const productsArray = products[0];

      return { count, productsArray }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async createOne(
    name: string,
    image: string,
    price: number,
    description: string,
    characteristicIds: number[],
  ) {
    try {
      const productDb = this.db.getRepository(Product);

      console.log(characteristicIds);

      const characteristics = await this.db.getRepository(Characteristic).createQueryBuilder('characteristic')
        .where('characteristic.id IN (:...characteristicIds)', { characteristicIds })
        .getMany();
      console.log(characteristics);
      let product = productDb.create({
        name,
        image,
        price,
        description,
        characteristics,
      });

      product = await productDb.save(product);

      return product;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getOne(productId: string): Promise<Product> {
    try {
      const product = await this.db.getRepository(Product).findOneBy({
        id: +productId,
      });
      if (!product) {
        throw new NotFoundException();
      }

      return product;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new InternalServerErrorException(error);
    }
  }

}
