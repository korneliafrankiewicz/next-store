'use client';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../lib/theme/theme';
import Home from './components/pages/home/Home';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
