import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Box,
} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { useProducts } from '../../../../lib/services/service';

type Product = {
  attributes: {
    Title: string;
    Image: string;
    Description: string;
    Price: string;
  };
};

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
    width: '80px',
    height: '80px',
  },
};

const ProductList = () => {
  const { data: products, isLoading, isError } = useProducts();
  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <Box sx={styles.productsWrapper}>
      {products.data.map((product: Product) => (
        <ListItem sx={styles.productItem} key={product.attributes.Title}>
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
            primary={`${product.attributes.Price}`}
          />
          <IconButton>
            <AddShoppingCart />
          </IconButton>
        </ListItem>
      ))}
    </Box>
  );
};

export default ProductList;
