'use client';
import { Box, SxProps, Theme, ThemeProvider } from '@mui/material';
import theme from '../../../theme/theme';
import type { NextPage } from 'next';
import BaseLayout from '../../components/BaseLayout/BaseLayout';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import { useParams } from 'next/navigation';
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
    const fetchRecommendations = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/recommendations`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch recommendations');
        }

        const data = await response.json();
        setRecommendations(data.recommendations);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
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
