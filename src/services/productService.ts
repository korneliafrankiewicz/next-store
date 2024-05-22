import { mapFromCMSProductToProduct } from '@/app/helpers';
import useSWR from 'swr';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    throw error;
  }
  return res.json();
};

export const useProducts = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products`,
    fetcher
  );

  return { data,
    isLoading: !error && !data,
    isError: error,};
};

export const useProductById = (id: number) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products/${id}`,
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useProductsForActionCards = (productCount: number) => {
  const { data, isLoading, isError } = useProducts();

  const products = data?.data
    .slice(0, productCount)
    .map(mapFromCMSProductToProduct);

  return {
    products,
    isLoading,
    isError,
  };
};