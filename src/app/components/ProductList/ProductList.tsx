import { Box, Typography } from '@mui/material';
import { useProducts } from '../../../../lib/services/service';
import { Product } from '@/app/models/product';
import ProductItem from '../ProductIem/ProductItem';
import { useCartStore } from '../../store/cart';
import Spinner from '../Spinner/Spinner';

const styles = {
  productsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    paddingTop: '30px',
  },
  text: {
    display: 'flex',
    justifyContent: 'end',
  },
};

const ProductList = () => {
  const { data: products, isLoading, isError } = useProducts();
  const { total } = useCartStore();
  if (isError) return <Typography variant='body3'>Failed to load</Typography>;
  if (isLoading) return <Spinner />;

  return (
    <Box sx={styles.productsWrapper}>
      <Typography sx={styles.text} variant='body3'>
        Total: {total} zł
      </Typography>
      {products.data.map((product: Product, index: number) => (
        <ProductItem key={index} product={product} />
      ))}
    </Box>
  );
};

export default ProductList;
