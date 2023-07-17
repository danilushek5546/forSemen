import type { CharacteristicType, ProductInitialType, ProductType, QueryProductType } from '../types/productType';
import host from './index';

const getAllProducts = async (query?: QueryProductType): Promise<ProductInitialType> => {
  const { data } = await host.get('products/', { params: query });

  return data;
};

const getOneProduct = async (id: number): Promise<ProductType> => {
  const { data } = await host.get(`products/one/${id}`);

  return data;
};

const getCharacteristics = async(): Promise<CharacteristicType[]> => {
  const { data } = await host.get(`characteristic/`);

  return data;
}

export default {
  getAllProducts,
  getOneProduct,
  getCharacteristics
}