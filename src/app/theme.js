// src/theme.ts
'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    h1: {
      fontSize: 80,
      textTransform: "uppercase",
      fontWeight: "bold",
      color: '#fff'
    },
    body1: {
      fontWeight: 500,
    },
    h5Italic: {
      fontStyle: 'italic',
      fontWeight: "bold",
      color: '#fff'
    },
  },


  palette: {
    primary: {
      main: '#B78063',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
    },

    secondary: {
        main: 'fff',
        light: '#42a5f5',
        dark: '#1565c0',
        contrastText: '#fff',
      },
  },
});

export default theme;
