'use client';
import BlogList from './pages/api/blogs';
import TemporaryDrawer from './components/menu/Menu';
import Header from './components/header/Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import image from './assets/wood_image.jpg';
import styled from '@emotion/styled';
import ProductList from './pages/api/ProductList';

export const Home = () => {
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
};

const Main = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url(${image});
`;

export default Home;
