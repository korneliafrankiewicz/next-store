'use client';
import { Box, SxProps, Theme, ThemeProvider } from '@mui/material';
import theme from '../../../theme/theme';
import type { NextPage } from 'next';
import BaseLayout from '../../components/BaseLayout/BaseLayout';

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

const Order: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.main as SxProps<Theme>}>
        <BaseLayout>We are proceeding yoour order!</BaseLayout>
      </Box>
    </ThemeProvider>
  );
};

export default Order;
