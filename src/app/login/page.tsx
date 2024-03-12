'use client';
import { Container } from '@mui/material';
import LoginForm from '../components/Login/LoginForm';

const Login = () => {
  console.log('this is login page !');
  const handleLogin = (email: string, password: string) => {
    console.log('Login attempt:', email, password);
    // TODO: implement login logic
  };
  return (
    <Container>
      <h1>Login</h1>
      <LoginForm onSubmit={handleLogin} />
    </Container>
  );
};

export default Login;
