import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography, Button, Box, TextField, Alert, SxProps, Theme } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useRegisterUser } from '../../../../lib/services/registerService';

const Colors = {
  palette: {
    DARK_BROWN: '#492D29',
    WHITE: '#FFFFFF',
  },
};

type ColorsInfered = typeof Colors;

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
  loginIconStyles: (theme: ColorsInfered) => ({
    color: `${theme.palette.WHITE}`,
    paddingLeft: '20px',
  }),
  formBox: (theme: ColorsInfered) => ({
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
    register: registerForm,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const { data, trigger, isLoading, isError } = useRegisterUser();

  const onSubmit = async (data: FormData) => {
    try {
      await trigger(data);
    } catch (error) {
      console.error('An error occurred during registration:', error);
    }
  };

  const validatePassword = (value: string) => {
    return value === watch('password') || `Passwords don't match`;
  };

  return (
    <Box sx={styles.formBox as SxProps<Theme>}>
      <Box sx={styles.header}>
        <Typography variant='h3'>Register user</Typography>
        <AccountCircleIcon sx={styles.loginIconStyles as SxProps<Theme>} fontSize='large' />
      </Box>
      <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          margin='normal'
          fullWidth
          id='email'
          label='Adress email'
          type='email'
          {...registerForm('email', {
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
          {...registerForm('username', {
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
          {...registerForm('password', {
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
          {...registerForm('confirmPassword', {
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
        {isError && (
          <Alert sx={styles.alert} severity='error'>
            {isError.message}
          </Alert>
        )}
        {data && (
          <Alert sx={styles.alert} severity='success'>
            Registration successful!
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default RegisterForm;
