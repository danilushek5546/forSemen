import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    font-family: Poppins;
  }

  .root{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export default GlobalStyle;