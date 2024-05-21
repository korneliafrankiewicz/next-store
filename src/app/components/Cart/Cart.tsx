import React from 'react';
import { Box, Button, Typography } from '@mui/material/';
import { useCartStore } from '../../store/cart';
import { useUserStore } from '@/app/store/user';
import CartItem from '../CartItem/CartItem';
import Link from 'next/link';
import DeleteIcon from '@mui/icons-material/Delete';
import { submitOrder } from '@/services/submitOrderService';
import { useCartQuantity } from '@/app/store/hooks/useCart';

const styles = {
  productsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '30px',
    gap: '20px',
  },
  button: {
    justifyContent: 'center',
    display: 'flex',
    alignSelf: 'center',
  },
  buttonLink: {
    justifyContent: 'center',
    display: 'flex',
    textDecoration: 'none',
    alignSelf: 'end',
  },
  text: {
    fontSize: '14px',
    paddingRight: '10px',
  },
};

const Cart = () => {
  const { items, clearCart, total } = useCartStore();
  const { user } = useUserStore();
  const totalQuantity = useCartQuantity(items);

  const processOrder = async () => {
    try {
      await submitOrder(items, user, totalQuantity, total);
      clearCart();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={styles.productsWrapper}>
      {items.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}
      <Button style={styles.button} variant='outlined' onClick={clearCart}>
        <Typography sx={styles.text}>Clear cart</Typography>
        <DeleteIcon />
      </Button>
      <Link style={styles.buttonLink} href='/cart/order'>
        <Button variant='contained' onClick={processOrder}>
          Submit order
        </Button>
      </Link>
    </Box>
  );
};

export default Cart;
