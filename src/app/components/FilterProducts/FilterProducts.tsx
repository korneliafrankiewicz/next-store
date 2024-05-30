import React, { useEffect, useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  Theme,
  Box,
} from '@mui/material';
import { ExpandMore, ExpandLess, Sort } from '@mui/icons-material';
import { useProducts } from '@/services/productService';
import { mapFromCMSProductToProduct } from '@/app/helpers';

const ThemeValues = {
  values: {
    sm: '768px',
  },
  palette: {
    BEIGE: '#D7AC85',
    WHITE: '#FFFFFF',
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
  menuWithIcon: {
    display: ' flex',
    justifyContent: 'space-between',
  },
};

const FilterProducts = ({
  setFilterCriteria,
}: {
  setFilterCriteria: (criteria: string) => void;
}) => {
  const { data: products } = useProducts();
  const mappedProducts = products.data.map(mapFromCMSProductToProduct);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const uniqueCategories = mappedProducts.reduce(
      (categories: string[], product: { category: string }) => {
        return categories.includes(product.category)
          ? categories
          : [...categories, product.category];
      },
      []
    );
    setCategories(uniqueCategories);
  }, [mappedProducts]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSubMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setIsSubMenuOpen(!isSubMenuOpen);
    setSubMenuAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setIsSubMenuOpen(false);
    setAnchorEl(null);
    setSubMenuAnchorEl(null);
  };

  const handleSelect = (criteria: string) => {
    setFilterCriteria(criteria);
    handleClose();
  };

  return (
    <Box sx={styles.selectWrapper}>
      <Button
        aria-haspopup='true'
        onClick={handleClick}
        sx={styles.selectMenu}
        variant='contained'>
        <Sort sx={styles.icon} />
        Filter
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => handleSelect('asc')}>
          Price: Low to High
        </MenuItem>
        <MenuItem onClick={() => handleSelect('desc')}>
          Price: High to Low
        </MenuItem>
        <MenuItem onClick={handleSubMenuClick} sx={styles.menuWithIcon}>
          Category
          <ListItemIcon>
            {isSubMenuOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemIcon>
        </MenuItem>
        <Menu
          anchorEl={subMenuAnchorEl}
          open={Boolean(subMenuAnchorEl)}
          onClose={handleClose}>
          {categories.map((category) => (
            <MenuItem key={category} onClick={() => handleSelect(category)}>
              {category}
            </MenuItem>
          ))}
        </Menu>
      </Menu>
    </Box>
  );
};

export default FilterProducts;
