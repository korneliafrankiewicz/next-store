import * as React from 'react';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const buttonElement = {
  alignSelf: 'end',
  marginLeft: '40px',
  opacity: '90%',
};

const icon = {
  paddingRight: '10px',
};

const ButtonComponent = () => {
  return (
    <Button sx={buttonElement} variant='contained'>
      <ShoppingCartIcon fontSize='large' style={icon} />
      Przejdź do sklepu
    </Button>
  );
};

export default ButtonComponent;
