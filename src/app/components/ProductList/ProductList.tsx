import { Box } from '@mui/material';
import { useState } from 'react';
import { useProducts } from '../../../../lib/services/service';
import { Product } from '@/app/models/product';
import ProductItem from '../ProductIem/ProductItem';

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
  const [cart, setCart] = useState<Product[]>([]);
  console.log(cart);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <Box sx={styles.productsWrapper}>
      {products.data.map((product: Product, index: number) => (
        <ProductItem key={index} product={product} addToCart={addToCart} />
      ))}
    </Box>
  );
};

export default ProductList;
