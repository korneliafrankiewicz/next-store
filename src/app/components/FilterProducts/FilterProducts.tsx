import React, { useMemo, useState } from 'react';
import { Button, Menu, Box, Theme } from '@mui/material';
import { useProducts } from '@/services/productService';
import { SortingFilter } from './SortingFilter/SortingFilter';
import { CategoryFilter } from './CategoryFilter/CategoryFilter';
import { Sort } from '@mui/icons-material';

const ThemeValues = {
  values: {
    sm: '768px',
  },
};

type MyTheme = typeof ThemeValues & Theme;

const styles = {
  selectWrapper: {
    display: 'flex',
    justifyContent: 'end',
  },
  selectMenu: (theme: MyTheme) => ({
    width: '100%',
    [`@media screen and (min-width: ${theme.breakpoints.values.sm})`]: {
      width: '200px',
      display: 'flex',
    },
  }),
  icon: {
    paddingRight: '10px',
  },
};

const FilterProducts = ({
  setFilterCriteria,
}: {
  setFilterCriteria: (criteria: string) => void;
}) => {
  const { products } = useProducts();
  const categories = useMemo(() => {
    return products.reduce(
      (categories: string[], product: { category: string }) => {
        return categories.includes(product.category)
          ? categories
          : [...categories, product.category];
      },
      []
    );
  }, [products]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={styles.selectWrapper}>
      <Button
        aria-haspopup='true'
        onClick={handleClick}
        variant='contained'
        sx={styles.selectMenu}>
        <Sort sx={styles.icon} />
        Filter
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <SortingFilter
          sort='desc'
          options={[
            { type: 'asc', label: 'Price: Low to High' },
            { type: 'desc', label: 'Price: High to Low' },
          ]}
          onSortChange={setFilterCriteria}
        />
        <CategoryFilter
          categories={categories}
          onCategoryChange={setFilterCriteria}
        />
      </Menu>
    </Box>
  );
};

export default FilterProducts;
