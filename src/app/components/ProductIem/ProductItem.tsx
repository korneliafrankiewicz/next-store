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
import { mapFromCMSProductToProduct } from '@/app/helpers';
import { ProductFromCMS } from '@/app/models/productFromCMS';
import Link from 'next/link';

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

const ProductItem = ({ product }: { product: ProductFromCMS }) => {
  const { addToCart }: { addToCart: Function } = useCartStore();
  const productForComponent = mapFromCMSProductToProduct(product);

  let cartProduct = {
    ...productForComponent,
    amount: productForComponent.amount,
    user: 'username',
    totalPrice: productForComponent.price,
  };

  return (
    <ListItem sx={styles.productItem as SxProps<Theme>}>
      <Box sx={styles.wrapper}>
        <Link href={`/product/${product.id}`}>
          <Button sx={styles.button} variant='productItem'>
            <ListItemAvatar>
              <Avatar
                sx={styles.image}
                src={productForComponent.image}
                alt={productForComponent.title}
              />
            </ListItemAvatar>
            <Box sx={styles.productContent}>
              <ListItemText
                sx={styles.title as SxProps<Theme>}
                primary={productForComponent.title}
              />
              <ListItemText
                sx={styles.description as SxProps<Theme>}
                secondary={productForComponent.description}
              />
            </Box>
          </Button>
        </Link>
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
