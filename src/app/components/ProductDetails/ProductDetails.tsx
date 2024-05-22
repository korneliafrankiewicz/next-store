import { Box, Typography } from '@mui/material';
import Spinner from '../Spinner/Spinner';
import { useProductById } from '@/services/productService';
import { mapFromCMSProductToProduct } from '@/app/helpers';

const ProductDetails = ({ id }: { id: number }) => {
  const { data: product, isLoading, isError } = useProductById(id);

  if (isLoading || isError || !product) {
    return isLoading ? (
      <Spinner />
    ) : (
      <Typography variant='h3'>Product not found</Typography>
    );
  }

  const productDetails = mapFromCMSProductToProduct(product.data);

  return (
    <Box>
      <Typography variant='h4'>{productDetails.title}</Typography>
      <Typography variant='body1'>{productDetails.description}</Typography>
      <Typography variant='h6'>Price: {productDetails.id}</Typography>
    </Box>
  );
};

export default ProductDetails;
