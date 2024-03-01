'use client';
import BlogList from './pages/api/blogs';
import TemporaryDrawer from './components/menu/Menu';
import Header from './components/header/Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { css } from '@emotion/react';
import image from '../app/assets/wood_image.jpg';
import styled from '@emotion/styled';
import Link from 'next/link';
import ProductList from './pages/api/ProductList';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <TemporaryDrawer />
        <Header />
        <BlogList />
        <ProductList />
      </Main>
    </ThemeProvider>
  );
}

const Main = styled.div({
  position: 'relative',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  backgroundImage: `url('../app/assets/wood_image.jpg')`,
});
