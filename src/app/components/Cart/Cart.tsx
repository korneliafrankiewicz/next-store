import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material/';
import { useCartStore } from '../../store/cart';
import CartItem from '../CartItem/CartItem';
import { MyTheme } from '@/app/models/theme';

const styles = {
  productsWrapper: (theme: MyTheme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    paddingTop: '30px',
  }),
  productItem: (theme: any) => ({
    borderRadius: '12px',
    backgroundColor: `${theme.palette.WHITE}`,
  }),
  productContent: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '30px',
    maxWidth: '60%',
    width: '60%',
  },

  price: {
    display: 'flex',
    justifyContent: 'center',
  },

  image: {
    width: '50px',
    height: '50px',
  },
  icon: (theme: any) => ({
    color: `${theme.palette.DARK_BROWN}`,
  }),
  text: {
    display: 'flex',
    justifyContent: 'end',
  },
};

const Cart = () => {
  const { total, items, removeFromCart } = useCartStore();

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
