'use client';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../lib/theme/theme';
import image from './assets/wood_image.jpg';
import Home from './components/pages/home/Home';
import Box from '@mui/material/Box';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={mainWrapper}>
        <Home />
      </Box>
    </ThemeProvider>
  );
};

const mainWrapper = {
  position: 'relative',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  backgroundImage: `url(${image.src})`,
};

export default App;
