export type ProductType = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  rating?: number;
  characteristic: CharacteristicType[];
};

export type ProductInitialType = {
  productsArray: ProductType[];
  count: number;
};

export type QueryProductType = {
  page?: number;
  perPage?: number;
  sortBy?: string;
  priceMin?: number;
  priceMax?: number;
  characteristic?: string[];
};

export type CharacteristicType = {
  id: number;
  name: string;
}