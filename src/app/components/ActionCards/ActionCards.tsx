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
import { useProducts } from '../../../services/service';
import { Product } from '@/app/models/product';
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
    minWidth: '300px',
  },
};

const ActionCards = () => {
  const { data: products, isLoading, isError } = useProducts();
  if (isError) return <Typography variant='body3'>Failed to load</Typography>;
  if (isLoading) return <Spinner />;

  return (
    <Box sx={styles.cardWrapper}>
      {products?.data.slice(0, 3).map((product: Product) => (
        <Card sx={styles.card} key={product.attributes.Title}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='100'
              src={product.attributes.Image}
              alt='abc'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {product.attributes.Title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {product.attributes.Description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default ActionCards;
