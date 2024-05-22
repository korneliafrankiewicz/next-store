'use client';
import { Box, SxProps, Theme, ThemeProvider } from '@mui/material';
import theme from '../../../theme/theme';
import type { NextPage } from 'next';
import BaseLayout from '../../components/BaseLayout/BaseLayout';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import { CartProduct } from '@/app/models/cartProduct';

const Colors = {
  palette: {
    BEIGE: '#D7AC85',
  },
};

type MyTheme = typeof Colors & Theme;

const styles = {
  main: (theme: MyTheme) => ({
    backgroundColor: `${theme.palette.BEIGE}`,
    minHeight: '100vh',
  }),
};

type ProductProps = {
  product: CartProduct;
  id: number;
};

const Product: NextPage<ProductProps> = ({ id }) => {
  console.log(id);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.main as SxProps<Theme>}>
        <BaseLayout>
          <ProductDetails id={id} />
        </BaseLayout>
      </Box>
    </ThemeProvider>
  );
};

export default Product;
