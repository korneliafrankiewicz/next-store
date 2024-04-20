'use client';
import { Box, SxProps, Theme, ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';
import type { NextPage } from 'next';
import BaseLayout from '../components/BaseLayout/BaseLayout';
import Cart from '../components/Cart/Cart';

const Colors = {
  palette: {
    BEIGE: '#D7AC85',
  },
};

type MyTheme = typeof Colors & Theme;

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
          <Cart />
        </BaseLayout>
      </Box>
    </ThemeProvider>
  );
};

export default Shop;
