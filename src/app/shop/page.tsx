'use client';
import { Box, SxProps, Theme, ThemeProvider } from '@mui/material';
import theme from '../../../lib/theme/theme';
import type { NextPage } from 'next';
import ProductList from '../components/ProductList/ProductList';
import BaseLayout from '../components/BaseLayout/BaseLayout';

const Colors = {
  palette: {
    BEIGE: '#D7AC85',
  },
};

type ColorsInfered = typeof Colors;

const styles = {
  main: (theme: ColorsInfered) => ({
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
