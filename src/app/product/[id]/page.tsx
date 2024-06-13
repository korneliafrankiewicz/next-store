'use client';
import { Box, SxProps, Theme, ThemeProvider } from '@mui/material';
import theme from '../../../theme/theme';
import type { NextPage } from 'next';
import BaseLayout from '../../components/BaseLayout/BaseLayout';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import { useParams } from 'next/navigation';
import { getProductRecommendations } from '../../../../recommenttions';
import { useEffect, useState } from 'react';

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

const Product: NextPage = () => {
  const params = useParams();
  const id = parseInt(params.id.toString());

  const [recommendations, setRecommendations] = useState<any[]>([]);

  useEffect(() => {
    getProductRecommendations(id).then(setRecommendations).catch(console.error);
  }, [id]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.main as SxProps<Theme>}>
        <BaseLayout>
          <ProductDetails id={id} recommendations={recommendations} />
        </BaseLayout>
      </Box>
    </ThemeProvider>
  );
};

export default Product;
