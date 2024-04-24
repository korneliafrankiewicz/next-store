'use client';
import { Box, SxProps, Theme, ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';
import type { NextPage } from 'next';
import ProductList from '../components/ProductList/ProductList';
import BaseLayout from '../components/BaseLayout/BaseLayout';

const Colors = {
  palette: {
    BEIGE: '#D7AC85',
  },
};

type MyTheme = typeof Colors;

const styles = {
  main: (theme: MyTheme) => ({
    backgroundColor: `${theme.palette.BEIGE}`,
    height: '100%',
  }),
};

const Shop: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.main as SxProps<Theme>}>
        <BaseLayout>
          <ProductList />
        </BaseLayout>
      </Box>
    </ThemeProvider>
  );
};

export default Shop;
