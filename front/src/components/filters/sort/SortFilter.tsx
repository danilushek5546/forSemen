import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FC, useEffect, useState } from 'react';
import filterStore from '../../../strore/filterStore';

const SortFilter: FC = () => {
  const [sortBy, setSortBy] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as string);
  };

  useEffect(() => {
    filterStore.setSortBy(sortBy);
  }, [sortBy])

  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'price'}>Price</MenuItem>
          <MenuItem value={'rating'}>Rating</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SortFilter;