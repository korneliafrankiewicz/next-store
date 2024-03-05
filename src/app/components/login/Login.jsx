import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { css } from '@emotion/css';
import Button from '@mui/material/Button';

const Login = () => {
  const loginIconStyles = css`
    position: fixed;
    right: 20px;
    top: 20px;
  `;

  return (
    <Button>
      <AccountCircleIcon
        className={loginIconStyles}
        fontSize='large'
        color='primary'
      />
    </Button>
  );
};

export default Login;
