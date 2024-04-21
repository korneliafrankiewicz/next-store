import React from 'react';
import { Box, Button } from '@mui/material/';
import { useCartStore } from '../../store/cart';
import CartItem from '../CartItem/CartItem';
import Link from 'next/link';
import { text } from 'stream/consumers';

const styles = {
  productsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    paddingTop: '30px',
  },
  button: {
    justifyContent: 'end',
    display: 'flex',
    textDecoration: 'none',
  },
};

const Cart = () => {
  const { items } = useCartStore();

  return (
    <Box sx={styles.productsWrapper}>
      {items.map((item) => (
        <CartItem
          key={item.attributes.Title}
          product={{
            attributes: {
              Title: item.attributes.Title,
              Image: item.attributes.Image,
              Description: item.attributes.Description,
              Price: item.attributes.Price,
            },
          }}
        />
      ))}
      <Link style={styles.button} href='/cart/order'>
        <Button variant='contained'>Submit order</Button>
      </Link>
    </Box>
  );
};

export default Cart;
