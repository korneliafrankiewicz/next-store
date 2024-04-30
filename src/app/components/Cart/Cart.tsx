import React from 'react';
import { Box, Button, Typography } from '@mui/material/';
import { useCartStore } from '../../store/cart';
import { useUserStore } from '@/app/store/user';
import CartItem from '../CartItem/CartItem';
import Link from 'next/link';
import DeleteIcon from '@mui/icons-material/Delete';
import { submitOrderService } from '@/services/submitOrderService';
import {
  useCartQuantity,
  useSingleProductQuantity,
} from '@/app/store/hooks/useCart';

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
  const { items, clearCart, total } = useCartStore();
  const { user } = useUserStore();
  const totalQuantity = useCartQuantity();
  const products = items.map((item) => ({
    attributes: {
      Title: item.attributes.Title,
      Description: item.attributes.Description,
      Price: item.attributes.Price,
      Amount: item.attributes.Amount,
      Image: item.attributes.Image,
    },
  }));

  const quantities = products.map((product) =>
    useSingleProductQuantity({ product })
  );

  const submitOrder = async () => {
    try {
      const orderData = {
        method: 'POST',
        data: {
          products: products.map((product, index) => ({
            Title: product.attributes.Title,
            Description: product.attributes.Description,
            Price: product.attributes.Price,
            Amount: quantities[index],
          })),
          TotalAmount: totalQuantity,
          TotalPrice: total,
          User: user?.email,
        },
      };

      submitOrderService(orderData);
    } catch (error) {
      console.error(error);
    }
  };

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
              Amount: item.attributes.Amount,
            },
          }}
        />
      ))}
      <Button style={styles.button} variant='outlined' onClick={clearCart}>
        <Typography sx={styles.text}>Clear cart</Typography>
        <DeleteIcon />
      </Button>
      <Link style={styles.buttonLink} href='/cart/order'>
        <Button variant='contained' onClick={submitOrder}>
          Submit order
        </Button>
      </Link>
    </Box>
  );
};

export default Cart;
