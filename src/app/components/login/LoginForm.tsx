import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  SxProps,
  Theme,
} from '@mui/material';
import { useLogin } from '../../../services/authService';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useUserStore } from '@/app/store/user';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Colors = {
  palette: {
    BEIGE: '#D7AC85',
    WHITE: '#FFFFFF',
  },
};

type MyTheme = typeof Colors & Theme;

type FormData = {
  identifier: string;
  password: string;
  message: string;
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
  },
  loginIconStyles: (theme: MyTheme) => ({
    color: `${theme.palette.WHITE}`,
    paddingLeft: '20px',
  }),
  formBox: (theme: MyTheme) => ({
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
  alert: {
    marginBottom: '8px',
  },
  alertSuccess: {
    marginTop: '8px',
  },
  icon: {
    paddingLeft: '10px',
  },
};

const LoginForm: React.FC = () => {
  const { data, trigger, isError } = useLogin();
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useUserStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await trigger(data);

      if (response.status === 200) {
        setUser({ ...user, email: data.identifier });
        setIsLoggedIn(true);
      } else {
        console.error('Invalid credentials');
      }
    } catch (error) {
      console.error('An error occurred during logging:', error);
    }
  };

  return (
    <Box sx={styles.formBox as SxProps<Theme>}>
      <Box sx={styles.header}>
        <Typography variant='h3'>Login</Typography>
        <AccountCircleIcon
          sx={styles.loginIconStyles as SxProps<Theme>}
          fontSize='large'
        />
      </Box>
      <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          margin='normal'
          label='Adress email'
          fullWidth
          id='email'
          type='email'
          {...register('identifier', {
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
          margin='normal'
          fullWidth
          label='Pasword'
          id='password'
          type='password'
          {...register('password', {
            required: {
              value: true,
              message: 'Password is required',
            },
          })}
        />
        {errors.identifier && (
          <Alert sx={styles.alert} severity='error'>
            {errors.identifier?.message}
          </Alert>
        )}
        {errors.password && (
          <Alert severity='error'>{errors.password?.message}</Alert>
        )}

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

        {isLoggedIn && (
          <>
            <Alert sx={styles.alertSuccess} severity='success'>
              {`Hello ${user?.email} you're logged in!`}
            </Alert>
            <Button
              sx={styles.loginButton}
              href='/shop'
              fullWidth
              variant='contained'>
              Go to shop
              <ShoppingCartIcon sx={styles.icon} />
            </Button>
          </>
        )}

        {isError && (
          <Alert sx={styles.alert} severity='error'>
            {data?.message}
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default LoginForm;
