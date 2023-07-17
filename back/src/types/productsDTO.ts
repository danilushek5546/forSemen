export type CreateProductDTO = {
  name: string;
  image: string;
  description: string; price: number;
  characteristicIds: number[];
}

export type GetALLProductDTO = {
  perPage: number;
  page: string;
  characteristic: string[];
  price: string;
  priceMin: number;
  priceMax: number;
  sortBy: string;
}

