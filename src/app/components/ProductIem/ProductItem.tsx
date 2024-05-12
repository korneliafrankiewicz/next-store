import React from 'react';
import { AddShoppingCart, Map } from '@mui/icons-material';
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
import { mapFromCMSProductToProduct } from '@/app/helpers';
import { ProductFromCMS } from '@/app/models/productFromCMS';

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
  icon: (theme: MyTheme) => ({
    color: `${theme.palette.DARK_BROWN}`,
  }),
};

const ProductItem = ({ product }: { product: ProductFromCMS }) => {
  const { addToCart } = useCartStore();
  const productForComponent = mapFromCMSProductToProduct(product);

  let cartProduct = {
    ...productForComponent,
    quantity: 1,
    user: 'username',
    totalPrice: productForComponent.price,
  };

  return (
    <ListItem sx={styles.productItem as SxProps<Theme>}>
      <ListItemAvatar>
        <Avatar
          sx={styles.image}
          src={productForComponent.image}
          alt={productForComponent.title}
        />
      </ListItemAvatar>
      <Box sx={styles.productContent}>
        <ListItemText primary={productForComponent.title} />
        <ListItemText secondary={productForComponent.description} />
      </Box>
      <ListItemText
        sx={styles.price}
        primary={`${productForComponent.price.toString()} zł`}
      />
      <IconButton onClick={() => addToCart(cartProduct)}>
        <AddShoppingCart sx={styles.icon as SxProps<Theme>} />
      </IconButton>
    </ListItem>
  );
};

export default ProductItem;
