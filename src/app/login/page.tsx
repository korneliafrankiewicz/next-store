'use client';
import { Container, ThemeProvider } from '@mui/material';
import LoginForm from '../components/Login/LoginForm';
import theme from '../../../lib/theme/theme';
import type { NextPage } from 'next';

const Login: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <LoginForm />
      </Container>
    </ThemeProvider>
  );
};

export default Login;
