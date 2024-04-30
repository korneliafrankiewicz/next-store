import { Box, Typography } from '@mui/material';
import { useProducts } from '../../../services/productService';
import { Product } from '@/app/models/product';
import ProductItem from '../ProductIem/ProductItem';
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
  if (isError) return <Typography variant='body3'>Failed to load</Typography>;
  if (isLoading) return <Spinner />;

  return (
    <Box sx={styles.productsWrapper}>
      {products.data.map((product: Product, index: number) => (
        <ProductItem key={index} product={product} />
      ))}
    </Box>
  );
};

export default ProductList;
