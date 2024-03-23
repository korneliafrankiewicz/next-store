import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography, Button, Box, TextField, Alert } from '@mui/material';
import { registerUser } from '../../../../lib/services/registerService';
import { useForm } from 'react-hook-form';

type FormData = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

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
  alert: {
    marginBottom: '8px',
  },
};

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await registerUser(data.email, data.username, data.password);
    } catch (error: any) {}
  };

  const validatePassword = (value: string) => {
    return value === watch('password') || `Passwords don't match`;
  };

  return (
    <Box sx={styles.formBox}>
      <Box sx={styles.header}>
        <Typography variant='h3'>Register user</Typography>
        <AccountCircleIcon sx={styles.loginIconStyles} fontSize='large' />
      </Box>
      <Box component='form' onSubmit={handleSubmit(onSubmit)}>
        <TextField
          margin='normal'
          fullWidth
          id='email'
          label='Adress email'
          type='email'
          {...register('email', {
            required: {
              value: true,
              message: 'Email is required',
            },
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Invalid email format',
            },
          })}
        />
        <TextField
          label='Username'
          variant='outlined'
          {...register('username', {
            required: {
              value: true,
              message: 'username is required',
            },
          })}
          fullWidth
          margin='normal'
        />
        <TextField
          margin='normal'
          fullWidth
          label='Pasword'
          type='password'
          id='password'
          autoComplete='current-password'
          {...register('password', {
            required: {
              value: true,
              message: 'Password is required',
            },
          })}
        />
        <TextField
          margin='normal'
          type='password'
          label='Confirm Password'
          variant='outlined'
          {...register('confirmPassword', {
            required: {
              value: true,
              message: 'Confirming password is required',
            },
            validate: validatePassword,
          })}
          fullWidth
        />
        {errors.email && (
          <Alert sx={styles.alert} severity='error'>
            {errors.email.message}
          </Alert>
        )}
        {errors.username && (
          <Alert sx={styles.alert} severity='error'>
            {errors.username.message}
          </Alert>
        )}
        {errors.password && (
          <Alert sx={styles.alert} severity='error'>
            {errors.password.message}
          </Alert>
        )}
        {errors.confirmPassword && (
          <Alert sx={styles.alert} severity='error'>
            {errors.confirmPassword.message}
          </Alert>
        )}

        <Button
          sx={styles.registerButton}
          type='submit'
          fullWidth
          variant='contained'>
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterForm;
