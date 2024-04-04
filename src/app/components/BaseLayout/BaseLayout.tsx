'use client';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Container, ThemeProvider } from '@mui/material';
import theme from '../../../../lib/theme/theme';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const containerStyles = {
  height: '100%',
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={containerStyles}>
        <Header />
        {children}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default BaseLayout;
