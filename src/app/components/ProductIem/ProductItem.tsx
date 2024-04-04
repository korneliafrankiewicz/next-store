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
} from '@mui/material';
import { useCartStore } from '../../../../lib/store/cart';

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
    width: '80px',
    height: '80px',
  },
};

type ProductProps = {
  product: Product;
};

const ProductItem: React.FC<ProductProps> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total);
  const quantity = useCartStore((state) => state.items.length);
  console.log(total);
  console.log(items);
  console.log(quantity);

  // const {addToCart} = useCartStore();
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
      <IconButton onClick={() => addToCart(product)}>
        <AddShoppingCart />
      </IconButton>
    </ListItem>
  );
};

export default ProductItem;
