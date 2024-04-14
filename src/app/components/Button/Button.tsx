import * as React from 'react';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';

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
    <Link href='/shop'>
      <Button sx={styles.button} variant='contained'>
        <ShoppingCartIcon fontSize='large' sx={styles.icon} />
        Go to shop
      </Button>
    </Link>
  );
};

export default ButtonElement;
