import React, { useState } from 'react';
import { MenuItem } from '@mui/material';

type SortingFilterProps = {
  sort: 'asc' | 'desc';
  options: { type: 'asc' | 'desc'; label: string }[];
  onSortChange: (sort: 'asc' | 'desc') => void;
};

const SortingFilter: React.FC<SortingFilterProps> = ({
  sort,
  options,
  onSortChange,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (sort: 'asc' | 'desc') => {
    onSortChange(sort);
    handleClose();
  };

  return (
    <>
      {options.map((option) => (
        <MenuItem key={option.type} onClick={() => handleSelect(option.type)}>
          {option.label}
        </MenuItem>
      ))}
    </>
  );
};

export default SortingFilter;
