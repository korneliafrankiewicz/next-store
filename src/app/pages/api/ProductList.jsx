import { loadProducts } from '../../../../lib/products';
import Products from '../../components/products/Products';
import useSWR from 'swr';

// const ProductList = ({ products }) => {
//   return (
//     <>
//       <h2>Products bleble</h2>
//       <Products products={products} />
//     </>
//   );
// };

// export default ProductList;

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductList() {
  const {
    data: comments,
    isLoading,
    isError: error,
  } = useSWR(
    'https://jsonplaceholder.typicode.com/comments?_limit=6',
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );

  if (error) {
    return <p>Failed to fetch</p>;
  }

  if (isLoading) {
    return <p>Loading comments...</p>;
  }

  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>{comment.name}</li>
      ))}
    </ul>
  );
}

// export async function getStaticProps() {
//   // Fetch data from an API
//   const productResponse = await loadProducts(
//     `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products`
//   );

//   console.log(productResponse);

//   // Return the data as props
//   return {
//     products: { productResponse },
//   };
// }
