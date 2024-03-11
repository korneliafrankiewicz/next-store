import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export const loadProducts = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products`,
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return { data, error };
};
