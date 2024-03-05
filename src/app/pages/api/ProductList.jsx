import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductList = () => {
  const {
    data: products,
    isLoading,
    isError: error,
  } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (error) {
    return <p>Failed to fetch</p>;
  }

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  return (
    <ul>
      {products?.data.map((product, i) => (
        <li key={product.attributes.Title}>
          {product.attributes.Title}
          {product.attributes.Description}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
