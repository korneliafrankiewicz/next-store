import React from 'react';
import Menu from '../Menu/Menu';
import Login from '../Login/Login';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { Button, SxProps, Typography } from '@mui/material';
import { useCartQuantity } from '../../store/hooks/useCartQuantity';
import { Theme } from '@mui/material/styles';
import { useCartStore } from '@/app/store/cart';

const Colors = {
  palette: {
    DARK_BROWN: '#492D29',
    WHITE: '#FFFFFF',
  },
};

type MyTheme = typeof Colors & Theme;

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '20px',
  },
  icon: (theme: MyTheme) => ({
    color: theme.palette.WHITE,
  }),
  icons: {
    alignItems: 'center',
    display: 'flex',
    paddingRight: '20px',
  },
  quantity: (theme: MyTheme) => ({
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
  const quantity = useCartQuantity();
  const { total } = useCartStore();

  return (
    <Box sx={styles.header}>
      <Menu />
      <Box sx={styles.icons}>
        <Typography variant='body3'>Total: {total} zł</Typography>
        <Login />
        <Link href='/cart'>
          <Button>
            <ShoppingCartIcon
              sx={styles.icon as SxProps<Theme>}
              fontSize='large'
            />
            <Box sx={styles.quantity as SxProps<Theme>}>{quantity}</Box>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
