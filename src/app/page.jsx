'use client';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../lib/theme/theme';
import image from './assets/wood_image.jpg';
import styled from '@emotion/styled';
import Home from './components/pages/home/Home';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Home />
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
