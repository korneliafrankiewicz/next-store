'use client';
import { Box, SxProps, Theme, ThemeProvider, Typography } from '@mui/material';
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
  text: {
    display: 'flex',
    justifyContent: 'center',
    margin: '40px 0',
  },
};

const Order: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.main as SxProps<Theme>}>
        <BaseLayout>
          <Typography sx={styles.text} variant='body3'>
            We are proceeding yoour order!
          </Typography>
        </BaseLayout>
      </Box>
    </ThemeProvider>
  );
};

export default Order;
