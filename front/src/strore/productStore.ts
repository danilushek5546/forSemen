import { makeAutoObservable } from 'mobx';
import { CharacteristicType, ProductType } from '../types/productType';

class Product {
  currentProduct: ProductType | null = null;
  productArray: ProductType[] | null = null;
  charactiristics: CharacteristicType[] | null= null
  count = 1;

  constructor() {
    makeAutoObservable(this)
  }

  setCurrentProduct(product: ProductType) {
    this.currentProduct = product;
  }

  setCharactiristics(charactiristics: CharacteristicType[]) {
    this.charactiristics = charactiristics;
  }

  setProductArray(productArray: ProductType[], count: number) {
    this.productArray = productArray;
    this.count = count;
  }
}

export default new Product();