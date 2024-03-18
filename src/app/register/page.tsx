'use client';
import { Container, ThemeProvider } from '@mui/material';
import RegisterForm from '../components/Register/RegisterForm';
import theme from '../../../lib/theme/theme';
import type { NextPage } from 'next';

const Register: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <RegisterForm />
      </Container>
    </ThemeProvider>
  );
};

export default Register;
