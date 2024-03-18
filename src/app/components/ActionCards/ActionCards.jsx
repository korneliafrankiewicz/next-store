import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import { loadProducts } from '../../../../lib/services/service';

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

const ActionCards = () => {
  const { data: products, isLoading, isError } = loadProducts();
  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  console.log(products);

  return (
    <Box sx={styles.cardWrapper}>
      {products?.data.map((product, i) => (
        <Card sx={styles.card} key={product.attributes.Title}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='100'
              src={product.attributes.Image}
              alt='abc'
            />
            {console.log(product.attributes.Image)}
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
