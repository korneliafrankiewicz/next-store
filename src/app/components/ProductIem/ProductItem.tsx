import React from 'react';
import { Product } from '@/app/models/product';
import { AddShoppingCart } from '@mui/icons-material';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Box,
  ListItemText,
  IconButton,
  SxProps,
  Theme,
} from '@mui/material';
import { useCartStore } from '../../store/cart';

const Colors = {
  palette: {
    DARK_BROWN: '#492D29',
    WHITE: '#FFFFFF',
  },
};

type ColorsInfered = typeof Colors;

const styles = {
  productItem: (theme: ColorsInfered) => ({
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
    width: '80px',
    height: '80px',
  },
  icon: (theme: ColorsInfered) => ({
    color: `${theme.palette.DARK_BROWN}`,
  }),
};

const ProductItem = ({ product }: { product: Product }) => {
  const { addToCart } = useCartStore();

  return (
    <ListItem sx={styles.productItem as SxProps<Theme>}>
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
      <IconButton onClick={() => addToCart(product)}>
        <AddShoppingCart sx={styles.icon as SxProps<Theme>} />
      </IconButton>
    </ListItem>
  );
};

export default ProductItem;
