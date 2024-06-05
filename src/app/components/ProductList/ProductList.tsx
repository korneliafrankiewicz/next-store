import { Box, Typography } from '@mui/material';
import { useProducts } from '../../../services/productService';
import { ProductFromCMS } from '@/app/models/productFromCMS';
import ProductItem from '../ProductIem/ProductItem';
import Spinner from '../Spinner/Spinner';
import FilterProducts from '../FilterProducts/FilterProducts';
import { useState } from 'react';
import { Product } from '@/app/models/product';

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
  const { products, isLoading, isError } = useProducts();
  const [filterCriteria, setFilterCriteria] = useState('');

  if (isError) return <Typography variant='body3'>Failed to load</Typography>;
  if (isLoading) return <Spinner />;

  const filterProducts = (
    products: Product[],
    sort: 'asc' | 'desc' | string
  ) => {
    let filteredProducts = [...products];

    if (sort === 'asc') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'desc') {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sort) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === sort
      );
    }

    return filteredProducts;
  };

  const sortedOrFilteredProducts = filterProducts(products, filterCriteria);

  return (
    <Box sx={styles.productsWrapper}>
      <FilterProducts setFilterCriteria={setFilterCriteria} />
      {sortedOrFilteredProducts.map((product: Product, index: number) => (
        <ProductItem key={index} product={product} />
      ))}
    </Box>
  );
};

export default ProductList;
