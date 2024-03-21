import { useState } from 'react';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { register } from '../../../../lib/services/registerService';
import Alert from '@mui/material/Alert';

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
  registerButton: {
    margin: '20px 0',
  },
};

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    const response = await register(email, username, password);
    if ('message' in response) {
      setError(response.message);
    } else {
      setSuccess(true);
      setError('');
    }
  };

  return (
    <Box sx={styles.formBox}>
      <Box sx={styles.header}>
        <Typography variant='h3'>Register user</Typography>
        <AccountCircleIcon sx={styles.loginIconStyles} fontSize='large' />
      </Box>
      <Box component='form' onSubmit={handleRegister}>
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
          label='Username'
          required
          variant='outlined'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin='normal'
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='password'
          label='Pasword'
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          margin='normal'
          required
          label='Confirm Password'
          variant='outlined'
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
        />
        {error && <Alert severity='error'>{error}</Alert>}

        <Button
          sx={styles.registerButton}
          type='submit'
          fullWidth
          variant='contained'>
          Register
        </Button>
        {success && <Alert severity='success'>Registration successful!</Alert>}
      </Box>
    </Box>
  );
};

export default RegisterForm;
