import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { useEffect, useState } from 'react';

import filterStore from '../../../strore/filterStore';

function valuetext(value: number) {
  return `${value}$`;
}

const marks = [
  {
    value: 0,
    label: '0°$',
  },
  {
    value: 100,
    label: '100$',
  },
];

const PriceFilters = () => {
  const [prices, setPrices] = useState([0, 100]);

  useEffect(() => {
    filterStore.setPrice(prices[0], prices[1]);
  }, [prices]);

  return (
    <Stack sx={{ width: 300 }} spacing={1} direction="row">
      <Slider
        getAriaLabel={() => 'Temperature'}
        orientation="horizontal"
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        marks={marks}
        value={prices}
        onChange={(e, value) => Array.isArray(value) ? setPrices(value) : null}
      />
    </Stack>
  );
}

export default PriceFilters;