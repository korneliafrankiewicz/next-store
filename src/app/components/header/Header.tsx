import React from 'react';
import Menu from '../Menu/Menu';
import Login from '../Login/Login';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { Button } from '@mui/material';
import { useCartStore } from '../../../../lib/store/cart';

const styles = {
  header: (theme: any) => ({
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '20px',
  }),
  icon: (theme: any) => ({
    color: `${theme.palette.WHITE}`,
  }),
  icons: {
    alignItems: 'center',
    display: 'flex',
    paddingRight: '20px',
  },
  quantity: (theme: any) => ({
    backgroundColor: `${theme.palette.DARK_BROWN}`,
    display: 'flex',
    borderRadius: '50%',
    color: `${theme.palette.WHITE}`,
    fontSize: '8px',
    height: '16px',
    justifyContent: 'center',
    alignItems: 'center',
    width: '16px',
    position: 'absolute',
    top: '0',
    right: '6px',
  }),
};

const Header = () => {
  const getCartQuantity = useCartStore((state) => {
    return state.items.reduce(
      (totalQuantity, item) => totalQuantity + item.quantity,
      0
    );
  });
  return (
    <Box sx={styles.header}>
      <Menu />
      <Box sx={styles.icons}>
        <Login />
        <Link href='/cart'>
          <Button>
            <ShoppingCartIcon sx={styles.icon} fontSize='large' />
            <Box sx={styles.quantity}>{getCartQuantity}</Box>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
