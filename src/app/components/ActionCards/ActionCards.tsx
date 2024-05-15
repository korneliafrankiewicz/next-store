import * as React from 'react';
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Theme,
} from '@mui/material';
import { useProductsForActionCards } from '../../../services/productService';
import { Product } from '../../../app/models/product';
import Spinner from '../Spinner/Spinner';

const Breakpoints = {
  values: {
    md: '992px',
  },
};

type MyTheme = typeof Breakpoints & Theme;

const styles = {
  cardWrapper: (theme: MyTheme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    paddingTop: '30px',
    [`@media screen and (min-width: ${theme.breakpoints.values.md})`]: {
      flexDirection: 'row',
    },
  }),

  card: {
    flex: '1',
  },
};

const ActionCards = () => {
  const { products, isLoading, isError } = useProductsForActionCards(3);
  if (isError) return <Typography variant='body3'>Failed to load</Typography>;
  if (isLoading) return <Spinner />;

  return (
    <Box sx={styles.cardWrapper}>
      {products?.map((product: Product) => (
        <Card sx={styles.card} key={product.title}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='100'
              src={product.image}
              alt='abc'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {product.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {product.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default ActionCards;
