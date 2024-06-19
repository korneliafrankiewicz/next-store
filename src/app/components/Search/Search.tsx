import React from 'react';
import { TextField, Box, InputAdornment, Theme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const ThemeValues = {
  values: {
    sm: '768px',
  },
};

type MyTheme = typeof ThemeValues & Theme;

const styles = {
  searchWrapper: (theme: MyTheme) => ({
    width: '100%',
    [`@media screen and (min-width: ${theme.breakpoints.values.sm})`]: {
      width: '200px',
      alignSelf: 'end',
    },
  }),
  textField: {
    width: '100%',
  },
};

type SearchProps = {
  onSearch: (query: string) => void;
};

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
  return (
    <Box sx={styles.searchWrapper}>
      <TextField
        sx={styles.textField}
        label='Search for products'
        variant='outlined'
        onChange={(e) => onSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
