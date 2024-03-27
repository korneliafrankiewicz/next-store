import React from 'react';
import { Box, Typography } from '@mui/material/';
import CartItem from './CartItem/CartItem';

const Cart: React.FC = () => {
  const productsMock: {
    id: number;
    title: string;
    price: number;
    quantity: number;
  }[] = [
    { id: 1, title: 'Product 1', price: 10, quantity: 1 },
    { id: 2, title: 'Product 2', price: 20, quantity: 1 },
    { id: 3, title: 'Product 3', price: 30, quantity: 1 },
  ];

  return (
    <Box>
      {productsMock.map((product, index) => (
        <CartItem key={index} product={product} />
      ))}
    </Box>
  );
};

export default Cart;
