import type { FC } from 'react';
import { observer } from 'mobx-react-lite';

import CharacteristicsFilter from '../characteristics/Characteristics';
import PriceFilters from '../price/Price';
import { StyledFilterCard } from './AllFilters.styles';
import SortFilter from '../sort/SortFilter';

const AllFilters: FC = observer(() => {
  return (
    <StyledFilterCard>
      <CharacteristicsFilter />
      <PriceFilters />
      <SortFilter />
    </StyledFilterCard>
  );
});

export default AllFilters;