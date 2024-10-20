import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const styles = {
    menuWithIcon: {
        display: ' flex',
        justifyContent: 'space-between',
      },
}

type CategoryFilterProps = {
  categories: string[];
  onCategoryChange: (category: string) => void;
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  onCategoryChange,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleSubMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setIsSubMenuOpen(!isSubMenuOpen);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setIsSubMenuOpen(false);
    setAnchorEl(null);
  };

  const handleSelect = (category: string) => {
    onCategoryChange(category);
    handleClose();
  };

  return (
    <>
      <MenuItem aria-haspopup='true' onClick={handleSubMenuClick} sx={styles.menuWithIcon}>
        Category
        {isSubMenuOpen ? <ExpandLess /> : <ExpandMore />}
      </MenuItem>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {categories.map((category) => (
          <MenuItem key={category} onClick={() => handleSelect(category)}>
            {category}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

