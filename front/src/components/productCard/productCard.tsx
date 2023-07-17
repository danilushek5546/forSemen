import { Card, Grid, Rating } from '@mui/material';
import type { FC } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledProductContainer } from './productCard.styles';


type PropType = {
  id: number;
  image: string;
  name: string;
  rating: number | undefined;
  price: number;
};

const ProductCard: FC<PropType> = ({ image, name, rating, price, id }) => {
  const navigate = useNavigate();
  const [rate, serRate] = useState(rating);

  const onClick = () => {
    navigate(`/productPage/${id}`);
  };

  return (
    <Grid item className="product-content">
      <Card>
        <StyledProductContainer>
          <div className="product-image-container">
            <img src={image}
              className="product-picture"
              alt="cannot load picture"
              onClick={onClick}
            />
          </div>
          <span className="product-name">{name}</span>
          <div className="rating-container">
            <Rating
              name="simple-controlled"
              value={rate}
              onChange={(event, newValue) => {
                if (newValue) {
                  serRate(newValue);
                }
              }}
            />
            <span className="product-rating">{rate?.toFixed(1)}</span>
            <span className="product-rating">{`${price}$`}</span>
          </div>
        </StyledProductContainer>
      </Card>
    </Grid >
  );
};

export default ProductCard;