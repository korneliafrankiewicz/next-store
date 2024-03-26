import * as React from 'react';
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from '@mui/material';
import { useProducts } from '../../../../lib/services/service';

const styles = {
  cardWrapper: {
    display: 'flex',
    gap: '20px',
    paddingTop: '30px',
  },

  card: {
    minWidth: '300px',
  },
};

type Product = {
  attributes: {
    Title: string;
    Image: string;
    Description: string;
  };
};

const ActionCards = () => {
  const { data: products, isLoading, isError } = useProducts();
  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

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
