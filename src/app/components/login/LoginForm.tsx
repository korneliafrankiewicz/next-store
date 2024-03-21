import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography, TextField, Button, Box, Alert } from '@mui/material';
import { login } from '../../../../lib/services/authService';
import Link from 'next/link';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
  },
  loginIconStyles: (theme: any) => ({
    color: `${theme.palette.WHITE}`,
    paddingLeft: '20px',
  }),
  formBox: (theme: any) => ({
    backgroundColor: `${theme.palette.BEIGE}`,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '30px',
    borderRadius: '12px',
  }),
  loginButton: {
    margin: '20px 0',
  },
};

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await login(email, password);

    if ('jwt' in response) {
      console.log('Login success', response);
    } else {
      setError(response.message);
    }
  };

  return (
    <Box sx={styles.formBox}>
      <Box sx={styles.header}>
        <Typography variant='h3'>Login</Typography>
        <AccountCircleIcon sx={styles.loginIconStyles} fontSize='large' />
      </Box>
      <Box component='form' onSubmit={handleSubmit} noValidate>
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          label='Adres email'
          name='email'
          autoComplete='email'
          autoFocus
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='password'
          label='Hasło'
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Alert severity='error'>{error}</Alert>}
        <Button
          sx={styles.loginButton}
          type='submit'
          fullWidth
          variant='contained'>
          Sign in
        </Button>
        <Link href='/register'>
          <Button type='submit' fullWidth variant='contained'>
            Sign up
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default LoginForm;
