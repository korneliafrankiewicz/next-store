import { Theme } from '@emotion/react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SxProps } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link';

const Colors = {
  palette: {
    WHITE: '#FFFFFF',
  },
};

type ColorsInfered = typeof Colors;

const loginIconStyles = (theme: ColorsInfered) => ({
  color: `${theme.palette.WHITE}`,
});

const Login = () => {
  return (
    <Link href='/login'>
      <Button>
        <AccountCircleIcon sx={loginIconStyles as SxProps<Theme>} fontSize='large' />
      </Button>
    </Link>
  );
};

export default Login;
