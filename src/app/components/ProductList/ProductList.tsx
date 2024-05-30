import { Box, Typography } from '@mui/material';
import { useProducts } from '../../../services/productService';
import { ProductFromCMS } from '@/app/models/productFromCMS';
import ProductItem from '../ProductIem/ProductItem';
import Spinner from '../Spinner/Spinner';
import FilterProducts from '../FilterProducts/FilterProducts';
import { mapFromCMSProductToProduct, mapToCMSProduct } from '@/app/helpers';
import { useState } from 'react';

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
  const [filterCriteria, setFilterCriteria] = useState('');

  if (isError) return <Typography variant='body3'>Failed to load</Typography>;
  if (isLoading) return <Spinner />;

  const mappedProducts = products.data.map(mapFromCMSProductToProduct);
  let filteredProducts = [...mappedProducts];

  if (filterCriteria === 'asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (filterCriteria === 'desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (filterCriteria) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === filterCriteria
    );
  }

  const remappedProducts = filteredProducts.map(mapToCMSProduct);

  return (
    <Box sx={styles.productsWrapper}>
      <FilterProducts setFilterCriteria={setFilterCriteria} />
      {remappedProducts.map((product: ProductFromCMS, index: number) => (
        <ProductItem key={index} product={product} />
      ))}
    </Box>
  );
};

export default ProductList;
