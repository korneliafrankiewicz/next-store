import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const loadProducts = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products`,
    fetcher
  );

  return { data,
    isLoading: !error && !data,
    isError: error,};
};
