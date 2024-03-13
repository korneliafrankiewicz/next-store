'use client';
import { Container, ThemeProvider } from '@mui/material';
import LoginForm from '../components/Login/LoginForm';
import theme from '../../../lib/theme/theme';

const Login = () => {
  const handleLogin = (email: string, password: string) => {
    console.log('Login attempt:', email, password);
    // TODO: implement login logic
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <LoginForm onSubmit={handleLogin} />
      </Container>
    </ThemeProvider>
  );
};

export default Login;
