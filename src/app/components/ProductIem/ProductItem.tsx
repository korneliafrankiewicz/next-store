import React from 'react';
import { AddShoppingCart } from '@mui/icons-material';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Box,
  Button,
  ListItemText,
  IconButton,
  SxProps,
  Theme,
} from '@mui/material';
import { useCartStore } from '../../store/cart';
import Link from 'next/link';
import { Product } from '@/app/models/product';

const Colors = {
  palette: {
    DARK_BROWN: '#492D29',
    WHITE: '#FFFFFF',
  },
};

type MyTheme = typeof Colors & Theme;

const styles = {
  productItem: (theme: MyTheme) => ({
    borderRadius: '12px',
    backgroundColor: `${theme.palette.WHITE}`,
  }),
  productContent: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '30px',
    textAlign: 'left',
  },
  title: (theme: MyTheme) => ({
    color: `${theme.palette.DARK_BROWN}`,
  }),
  description: (theme: MyTheme) => ({
    textTransform: 'lowercase',
  }),
  wrapper: {
    width: '60%',
  },
  price: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  image: {
    width: '80px',
    height: '80px',
  },
  icon: (theme: MyTheme) => ({
    color: `${theme.palette.DARK_BROWN}`,
  }),
};

const ProductItem = ({ product }: { product: Product }) => {
  const { addToCart }: { addToCart: Function } = useCartStore();

  let cartProduct = {
    ...product,
    amount: product.amount,
    user: 'username',
    totalPrice: product.price,
  };

  return (
    <ListItem sx={styles.productItem as SxProps<Theme>}>
      <Box sx={styles.wrapper}>
        <Link href={`/product/${product.id}`}>
          <Button sx={styles.button} variant='productItem'>
            <ListItemAvatar>
              <Avatar
                sx={styles.image}
                src={product.image}
                alt={product.title}
              />
            </ListItemAvatar>
            <Box sx={styles.productContent}>
              <ListItemText
                sx={styles.title as SxProps<Theme>}
                primary={product.title}
              />
              <ListItemText
                sx={styles.description as SxProps<Theme>}
                secondary={product.description}
              />
            </Box>
          </Button>
        </Link>
      </Box>
      <ListItemText
        sx={styles.price}
        primary={`${product.price.toString()} zł`}
      />
      <ListItemText secondary={product.category} />

      <IconButton onClick={() => addToCart(cartProduct)}>
        <AddShoppingCart sx={styles.icon as SxProps<Theme>} />
      </IconButton>
    </ListItem>
  );
};

export default ProductItem;
