import React from 'react';
import { Box, Typography } from '@mui/material';

type Product = { id: number; title: string; price: number; quantity: number };

interface CartItemProps {
  product: Product;
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  return (
    <Box>
      <Typography variant='h3'>{product.title}</Typography>
      <Typography variant='body1'>Price: ${product.price}</Typography>
      <Typography variant='body1'>Quantity: {product.quantity}</Typography>
    </Box>
  );
};

export default CartItem;
