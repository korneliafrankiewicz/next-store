import * as React from 'react';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const styles = {
  button: {
    alignSelf: 'start',
    marginLeft: '40px',
    opacity: '90%',
  },

  icon: {
    paddingRight: '10px',
  },
};

const ButtonElement = () => {
  return (
    <Button sx={styles.button} variant='contained'>
      <ShoppingCartIcon fontSize='large' sx={styles.icon} />
      Go to shop
    </Button>
  );
};

export default ButtonElement;
