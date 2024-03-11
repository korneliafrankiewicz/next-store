import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';

const loginIconStyles = (theme: any) => ({
  position: 'fixed',
  right: '20px',
  top: '20px',
  color: `${theme.palette.WHITE}`,
});

const Login = () => {
  return (
    <Button>
      <AccountCircleIcon sx={loginIconStyles} fontSize='large' />
    </Button>
  );
};

export default Login;