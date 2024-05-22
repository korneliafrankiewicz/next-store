import * as React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Theme,
} from '@mui/material';
import { useState } from 'react';

const ThemeValues = {
  values: {
    md: '992px',
  },
  palette: {
    BEIGE: '#D7AC85',
    WHITE: '#FFFFFF',
  },
};

type MyTheme = typeof ThemeValues & Theme;

const styles = {
  selectWrapper: (theme: MyTheme) => ({
    width: '100%',
    [`@media screen and (min-width: ${theme.breakpoints.values.md})`]: {
      width: '200px',
      display: 'flex',
      alignSelf: 'end',
    },
  }),
};

const FilterProducts = ({
  setFilterCriteria,
}: {
  setFilterCriteria: (criteria: string) => void;
}) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value;
    setValue(newValue);
    setFilterCriteria(newValue);
  };

  return (
    <FormControl sx={styles.selectWrapper}>
      <InputLabel id='filter-label'>Sort by</InputLabel>
      <Select
        data-testid='filter-products'
        labelId='filter-label'
        id='filter-select'
        value={value}
        onChange={handleChange}>
        <MenuItem value={'asc'}>Price: Low to High</MenuItem>
        <MenuItem value={'desc'}>Price: High to Low</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FilterProducts;
