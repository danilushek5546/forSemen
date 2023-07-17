import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { observer } from 'mobx-react-lite';
import productApi from '../../../api/productApi';
import { useEffect, useState } from 'react';
import productStore from '../../../strore/productStore';
import filterStore from '../../../strore/filterStore';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CharacteristicsFilter = observer(() => {
  const [charactiristics, setCharactiristics] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof charactiristics>) => {
    const {
      target: { value },
    } = event;
    setCharactiristics(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  useEffect(() => {
    (async () => {
      const characteristicsArray = await productApi.getCharacteristics();

      productStore.setCharactiristics(characteristicsArray);
    })()
  }, [])

  useEffect(() => {
    filterStore.setCharacteristics(charactiristics);
  }, [charactiristics])

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={charactiristics}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {productStore.charactiristics?.map((characteristic) => (
            <MenuItem
              key={characteristic.id}
              value={characteristic.name}
            >
              {characteristic.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
})

export default CharacteristicsFilter;