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
import { CreateProductDTO, GetALLProductDTO } from '../types/productsDTO';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) { }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Post()
  createProduct(@Body() createProductDTO: CreateProductDTO) {
    return this.productsService.createOne(
      createProductDTO.name,
      createProductDTO.image,
      createProductDTO.price,
      createProductDTO.description,
      createProductDTO.characteristicIds
    );
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  getAllProducts(@Query() getAllProductDTO: GetALLProductDTO) {
    return this.productsService.getAll(
      getAllProductDTO.perPage,
      getAllProductDTO.page,
      getAllProductDTO.characteristic,
      getAllProductDTO.priceMax,
      getAllProductDTO.priceMin,
      getAllProductDTO.sortBy
    );
  }

  @HttpCode(HttpStatus.OK)
  @Get('one/:productId')
  getOne(@Param('productId') productId: string) {
    return this.productsService.getOne(productId)
  }
}