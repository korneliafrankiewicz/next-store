'use client';
import { Box, SxProps, Theme, ThemeProvider } from '@mui/material';
import theme from '../../../theme/theme';
import type { NextPage } from 'next';
import BaseLayout from '../../components/BaseLayout/BaseLayout';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import { useParams } from 'next/navigation';

const Colors = {
  palette: {
    LIGHT: '#FAF0E1',
  },
};

type MyTheme = typeof Colors & Theme;

const styles = {
  main: (theme: MyTheme) => ({
    backgroundColor: `${theme.palette.LIGHT}`,
    minHeight: '100vh',
  }),
};

const Product: NextPage = () => {
  const params = useParams();
  const id = parseInt(params.id as string, 10);

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
