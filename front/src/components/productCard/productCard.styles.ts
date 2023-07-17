import styled from 'styled-components';


export const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-overflow: clip;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  white-space: nowrap;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 300px;

 .product-name{
    padding-top: 30px;
    color: #344966;
    max-width: 305px;
    overflow: hidden;
    white-space: nowrap;
 }

 .product-rating{
   padding-top: 2px;
   padding-left: 25px;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #B9BAC4;
 }

 .rating-container{
   display: flex;
 }

 .product-image-container{
   position: relative;
   img {
     max-width: 250px;
     max-height: 250px;
     object-fit: cover;
   }
   .product-favorite{
      position: absolute;
      opacity: 0.6;
      width: 48px;
      height: 48px;
      top: 20px;
      left: 20px;
      cursor: pointer;
   }
 }
`;
 