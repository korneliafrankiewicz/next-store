'use client';
import { Box, ThemeProvider } from '@mui/material';
import theme from '../../../lib/theme/theme';
import type { NextPage } from 'next';
import BaseLayout from '../components/BaseLayout/BaseLayout';
import Cart from '../components/Cart/Cart';

const styles = {
  main: (theme: any) => ({
    backgroundColor: `${theme.palette.BEIGE}`,
    height: '100%',
  }),
};

const Shop: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.main}>
        <BaseLayout>
          <Cart />
        </BaseLayout>
      </Box>
    </ThemeProvider>
  );
};

export default Shop;
