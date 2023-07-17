import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";

import productApi from '../../api/productApi';
import productStore from '../../strore/productStore';
import ProductCard from "../../components/productCard/productCard";
import { StyledBox, StyledGrid, StyledPagination } from "./MainPage.styles";
import filterStore from "../../strore/filterStore";
import { Pagination } from "@mui/material";

const MainPage: FC = observer(() => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    (async () => {
      try {
        const initialProduct = await productApi.getAllProducts();

        productStore.setProductArray(initialProduct.productsArray, initialProduct.count);
        console.log(initialProduct.count)
      } catch (error) {
        console.error(error)
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const initialProduct = await productApi.getAllProducts({
          characteristic: filterStore.charactiristics,
          page: filterStore.page,
          priceMax: filterStore.priceMax,
          priceMin: filterStore.priceMin,
          perPage: 5,
          sortBy: filterStore.sortBy
        });

        productStore.setProductArray(initialProduct.productsArray, initialProduct.count);
      } catch (error) {
        console.error(error)
      }
    })();
  }, [filterStore.charactiristics, filterStore.page, filterStore.priceMax, filterStore.priceMin, filterStore.sortBy]);

  useEffect(() => {
    filterStore.setPage(page - 1);
  }, [page]);
  return (
    <StyledBox>
      <StyledGrid container spacing={2}>
        {productStore.productArray?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              rating={product.rating}
              price={product.price}
            />
          )
        })}
      </StyledGrid>

      <StyledPagination
        count={Math.ceil(productStore.count / 5) || 1}
        page={page}
        onChange={(e, val) => setPage(val)}
        color="primary"
      />
    </StyledBox>
  );
})

export default MainPage;
