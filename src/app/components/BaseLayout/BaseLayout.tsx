'use client';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Container, ThemeProvider } from '@mui/material';
import theme from '../../../../lib/theme/theme';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default BaseLayout;
