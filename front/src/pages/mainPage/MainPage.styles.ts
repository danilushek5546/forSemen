import { Box, Grid, Pagination } from '@mui/material';
import { styled } from '@mui/styles';

export const StyledGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
})

export const StyledBox = styled(Box)({
  paddingTop: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
})

export const StyledPagination = styled(Pagination)({
  paddingTop: '30px',
  paddingBottom: '30px'
})