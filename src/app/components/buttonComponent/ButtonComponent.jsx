import * as React from 'react';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { css } from '@emotion/css';

const ButtonComponent = () => {
  return (
    <Button className={buttonElement} variant='contained'>
      <ShoppingCartIcon fontSize='large' style={{ paddingRight: '10px' }} />
      Przejdź do sklepu
    </Button>
  );
};

const buttonElement = css`
  align-self: end;
  margin-left: 40px;
  background-color: #fff;
  color: #a26948;
  opacity: 90%;
`;

export default ButtonComponent;
