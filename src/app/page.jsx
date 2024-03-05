'use client';
import BlogList from './pages/api/BlogList';
import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../lib/theme/theme';
import image from './assets/wood_image.jpg';
import styled from '@emotion/styled';
import ProductList from './pages/api/ProductList';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Menu />
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
  background-image: url(${image.src});
`;

export default App;
