import React from 'react';
import Menu from '../Menu/Menu';
import Login from '../Login/Login';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { Button } from '@mui/material';

const styles = {
  header: (theme: any) => ({
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '20px',
  }),
  icon: (theme: any) => ({
    color: `${theme.palette.WHITE}`,
    paddingLeft: '20px',
  }),
  icons: {
    alignItems: 'center',
    display: 'flex',
    paddingRight: '20px',
  },
};

const Header: React.FC = () => {
  return (
    <Box sx={styles.header}>
      <Menu />
      <Box sx={styles.icons}>
        <Login />
        <Link href='/cart'>
          <Button>
            <ShoppingCartIcon sx={styles.icon} fontSize='large' />
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
