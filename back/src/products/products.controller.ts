import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  UseGuards
} from '@nestjs/common';

import { AuthGuard } from '../auth/auth.guard';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) { }

  // @HttpCode(HttpStatus.OK)
  // @UseGuards(AuthGuard)
  @Post()
  createProduct(@Body() data:{  name: string, image: string, description: string, price: number, characteristicIds: number[]}) {
    console.log(data.characteristicIds)
    return this.productsService.createOne(data.name, data.image, data.price, data.description, data.characteristicIds);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  getAllProducts(@Query() perPage: string, page: string, characteristics: string, price: string, priceMin: number, priceMax: number, sortBy: string) {
    return this.productsService.getAll(perPage, page, characteristics, priceMax, priceMin, sortBy)
  }

  @HttpCode(HttpStatus.OK)
  @Get('one/:productId')
  getOne(@Param('productId') productId: string) {
    return this.productsService.getOne(productId)
  }
}