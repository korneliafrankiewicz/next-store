import React from 'react';
import { Box, Button, Typography } from '@mui/material/';
import { useCartStore } from '../../store/cart';
import { useUserStore } from '@/app/store/user';
import CartItem from '../CartItem/CartItem';
import Link from 'next/link';
import DeleteIcon from '@mui/icons-material/Delete';
import { submitOrder } from '@/services/submitOrderService';
import {
  useCartQuantity,
  useSingleProductQuantity,
} from '@/app/store/hooks/useCart';
import { ProductFromCMS } from '@/app/models/productFromCMS';
import {
  mapFromCMSProductToProduct,
  mapFromCartProductToCMSProduct,
  mapToCartProduct,
} from '@/app/helpers';

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
  const products = items.map((item) => mapFromCartProductToCMSProduct(item));
  console.log(products);

  const processOrder = async () => {
    try {
      const orderData = {
        data: {
          products: products,
          totalAmount: totalQuantity,
          totalPrice: total,
          user: user?.email,
        },
      };
      console.log(orderData);
      submitOrder(orderData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={styles.productsWrapper}>
      {items.map((item) => (
        <CartItem key={item.title} product={item} />
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
