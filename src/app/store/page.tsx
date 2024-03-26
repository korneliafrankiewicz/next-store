'use client';
import { Container, ThemeProvider } from '@mui/material';
import theme from '../../../lib/theme/theme';
import type { NextPage } from 'next';
import ProductList from '../components/ProductList/ProductList';
import Header from '../components/Header/Header';

const styles = {
  main: (theme: any) => ({
    backgroundColor: `${theme.palette.LIGHT_CREME}`,
    height: '100%',
  }),
};

const Store: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={styles.main}>
        <Header />
        <ProductList />
      </Container>
    </ThemeProvider>
  );
};

export default Store;
