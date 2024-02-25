import * as React from 'react';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ButtonComponent = () => {
  return (
      <Button variant='contained' style={{alignSelf: 'end', marginLeft: '40px', backgroundColor: '#fff', color: '#A26948', opacity: '90%'
    }}><ShoppingCartIcon fontSize='large' style={{paddingRight: '10px'}}/>Przejdź do sklepu</Button>
  );
}

export default ButtonComponent;