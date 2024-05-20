import * as React from 'react';
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Theme,
  IconButton,
  SxProps,
} from '@mui/material';
import { useProductsForActionCards } from '../../../services/productService';
import Spinner from '../Spinner/Spinner';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';

const ThemeValues = {
  values: {
    md: '992px',
  },
  palette: {
    BEIGE: '#D7AC85',
    WHITE: '#FFFFFF',
  },
};

type MyTheme = typeof ThemeValues & Theme;

const styles = {
  cardWrapper: (theme: MyTheme) => ({
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    [`@media screen and (min-width: ${theme.breakpoints.values.md})`]: {
      flexDirection: 'row',
    },
  }),

  card: (theme: MyTheme) => ({
    flex: '1',
    height: '300px',
    minHeight: '300px',
    [`@media screen and (min-width: ${theme.breakpoints.values.md})`]: {
      minWidth: '400px',
      width: '400px',
    },
  }),

  iconWrapper: {
    height: 'fit-content',
  },
  iconStyles: (theme: MyTheme) => ({
    color: `${theme.palette.WHITE}`,
  }),
};

const ActionCards = () => {
  const { products, isLoading, isError } = useProductsForActionCards(5);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const handleNext = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handleBack = () => {
    setCurrentProductIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  if (isError) return <Typography variant='body3'>Failed to load</Typography>;
  if (isLoading) return <Spinner />;

  return (
    <Box sx={styles.cardWrapper}>
      <IconButton onClick={handleBack} sx={styles.iconWrapper}>
        <ArrowBackIosIcon sx={styles.iconStyles as SxProps<Theme>} />
      </IconButton>
      {products && (
        <Card sx={styles.card} key={products[currentProductIndex].title}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='200'
              src={products[currentProductIndex].image}
              alt='abc'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {products[currentProductIndex].title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {products[currentProductIndex].description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
      <IconButton onClick={handleNext} sx={styles.iconWrapper}>
        <ArrowForwardIosIcon sx={styles.iconStyles as SxProps<Theme>} />
      </IconButton>
    </Box>
  );
};

export default ActionCards;
