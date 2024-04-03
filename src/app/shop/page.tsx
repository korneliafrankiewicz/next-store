'use client';
import { Box, ThemeProvider } from '@mui/material';
import theme from '../../../lib/theme/theme';
import type { NextPage } from 'next';
import ProductList from '../components/ProductList/ProductList';
import BaseLayout from '../components/BaseLayout/BaseLayout';

const styles = {
  main: (theme: any) => ({
    backgroundColor: `${theme.palette.LIGHT_CREME}`,
    height: '100%',
  }),
};

const Shop: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.main}>
        <BaseLayout>
          <ProductList />
        </BaseLayout>
      </Box>
    </ThemeProvider>
  );
};

export default Shop;
