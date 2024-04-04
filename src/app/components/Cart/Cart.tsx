import React from 'react';
import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCartStore } from '../../../../lib/store/cart';

const styles = {
  productsWrapper: (theme: any) => ({
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
  const total = useCartStore((state) => state.total);
  const items = useCartStore((state) => state.items);
  const remove = useCartStore((state) => state.removeFromCart);

  return (
    <Box sx={styles.productsWrapper}>
      {items.map((product) => (
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
          <ListItemText primary={`${product.quantity}`} />
          <IconButton onClick={() => remove(product.attributes.Title)}>
            <DeleteIcon sx={styles.icon} />
          </IconButton>
        </ListItem>
      ))}
      <Typography sx={styles.text} variant='body3'>
        Total: {total} zł
      </Typography>
    </Box>
  );
};

export default Cart;
