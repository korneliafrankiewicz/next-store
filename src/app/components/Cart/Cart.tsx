import React from 'react';
import { Box, Button, Typography } from '@mui/material/';
import { useCartStore } from '../../store/cart';
import CartItem from '../CartItem/CartItem';
import Link from 'next/link';
import DeleteIcon from '@mui/icons-material/Delete';

const styles = {
  productsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    paddingTop: '30px',
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
  const { items, clearCart } = useCartStore();

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
      <Button style={styles.button} variant='outlined' onClick={clearCart}>
        <Typography sx={styles.text}>Clear cart</Typography>
        <DeleteIcon />
      </Button>
      <Link style={styles.buttonLink} href='/cart/order'>
        <Button variant='contained'>Submit order</Button>
      </Link>
    </Box>
  );
};

export default Cart;
