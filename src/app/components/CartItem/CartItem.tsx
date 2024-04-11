import React from 'react';
import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCartStore } from '../../store/cart';
import { Product } from '@/app/models/product';

const styles = {
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

const CartItem = ({ product }: { product: Product }) => {
  const { items, removeFromCart } = useCartStore();
  const quantity = items.filter(
    (item) => item.attributes.Title === product.attributes.Title
  )[0].quantity;

  return (
    <ListItem sx={styles.productItem}>
      <ListItemAvatar>
        <Avatar
          sx={styles.image}
          src={product.attributes.Image}
          alt={product.attributes.Title}
        />
      </ListItemAvatar>
      <Box sx={styles.productContent}>
        <ListItemText primary={product.attributes.Title} />
        <ListItemText secondary={product.attributes.Description} />
      </Box>
      <ListItemText
        sx={styles.price}
        primary={`${product.attributes.Price.toString()} zł`}
      />
      <ListItemText primary={`${quantity}`} />
      <IconButton onClick={() => removeFromCart(product.attributes.Title)}>
        <DeleteIcon sx={styles.icon} />
      </IconButton>
    </ListItem>
  );
};

export default CartItem;
