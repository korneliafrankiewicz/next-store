import { Box } from '@mui/material';
import { useState } from 'react';
import { useProducts } from '../../../../lib/services/service';
import { Product } from '@/app/models/product';
import ProductItem from '../ProductIem/ProductItem';
import { useCartStore } from '../../../../lib/store/cart';

const styles = {
  productsWrapper: (theme: any) => ({
    display: 'flex',
    flexDirection: 'column', 
    gap: '20px',
    paddingTop: '30px',
  }),
};

const ProductList = () => {
  const { data: products, isLoading, isError } = useProducts();
  const addToCart = useCartStore((state) => state.addToCart);
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total);
  const quantity = useCartStore((state) => state.items.length);

  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <Box sx={styles.productsWrapper}>
      <h1>Cart: {quantity}</h1>
      {products.data.map((product: Product, index: number) => (
        <ProductItem key={index} product={product} />
      ))}
    </Box>
  );
};

export default ProductList;
