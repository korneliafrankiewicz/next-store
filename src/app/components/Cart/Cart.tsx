import React from 'react';
import { Box, Typography } from '@mui/material/';
import { useCartStore } from '../../store/cart';
import CartItem from '../CartItem/CartItem';

const styles = {
  productsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    paddingTop: '30px',
  },
  text: {
    display: 'flex',
    justifyContent: 'end',
  },
};

const Cart = () => {
  const { total, items } = useCartStore();

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
      <Typography sx={styles.text} variant='body3'>
        Total: {total} zł
      </Typography>
    </Box>
  );
};

export default Cart;
