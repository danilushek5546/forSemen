import { makeAutoObservable } from 'mobx';

class Filter {
  page = 0;
  priceMin = 0;
  priceMax = 100;
  charactiristics: string[] = [];
  perPage = 12;
  sortBy = 'price';

  constructor() {
    makeAutoObservable(this)
  }

  setPage(page: number) {
    this.page = page;
  }

  setPrice(priceMin: number, priceMax: number) {
    this.priceMin = priceMin;
    this.priceMax = priceMax;
  }

  setCharacteristics(charactiristics: string[]) {
    this.charactiristics = charactiristics;
  }
  setSortBy(sortBy: string) {
    this.sortBy = sortBy;
  }
}

export default new Filter();