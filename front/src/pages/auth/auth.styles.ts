import * as styledComponents from 'styled-components';
import { Card } from '@mui/material';
import { styled } from '@mui/styles';

export const StyledCard = styled(Card)({
  display: 'flex',
  maxWidth: '650px',
  height: '350px',
  margin: 'auto',
  marginTop: '50px',
  justifyContent: 'center',
  width: '100%',
})

export const StyledForm = styledComponents.styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .auth-submit{
    max-width: 150px
  }
`;