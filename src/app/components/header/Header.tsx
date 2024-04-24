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
import { useUserStore } from '@/app/store/user';
import { logout } from '@/services/logoutService';

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
  text: (theme: MyTheme) => ({
    backgroundColor: theme.palette.DARK_BROWN,
    padding: '8px',
    borderRadius: '6px',
  }),
};

const Header = () => {
  const quantity = useCartQuantity();
  const { total } = useCartStore();
  const { user, isLoggedIn } = useUserStore();
  const handleLogout = () => {
    logout();
  };

  return (
    <Box sx={styles.header}>
      <Menu />
      <Box sx={styles.icons}>
        {isLoggedIn && (
          <Typography sx={styles.text} variant='body4'>
            {user?.email}
          </Typography>
        )}

        <Box>
          <Link href='/cart'>
            <Button>
              <ShoppingCartIcon
                sx={styles.icon as SxProps<Theme>}
                fontSize='large'
              />
              {quantity > 0 && (
                <Box sx={styles.quantity as SxProps<Theme>}>{quantity}</Box>
              )}
            </Button>
          </Link>
          {total > 0 && <Typography variant='body3'>{total} zł</Typography>}
        </Box>
        <Login />
        {isLoggedIn && (
          <Button variant='contained' onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Header;
