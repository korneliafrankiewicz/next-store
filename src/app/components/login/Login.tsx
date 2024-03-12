import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Link from 'next/link';

const loginIconStyles = (theme: any) => ({
  position: 'fixed',
  right: '20px',
  top: '20px',
  color: `${theme.palette.WHITE}`,
});

const Login = () => {
  return (
    <Link href='/login'>
      <Button>
        <AccountCircleIcon sx={loginIconStyles} fontSize='large' />
      </Button>
    </Link>
  );
};

export default Login;
