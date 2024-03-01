export async function loadProducts(url) {
  // Call an external API endpoint to get posts
  const res = await fetch(url);
  const data = await res.json();

  return data;
}

export async function getStaticProps(url) {
  // Fetch data from an API
  const response = await fetch(url);
  const posts = await response.json();

  // Return the data as props
  return {
    props: { products },
  };
}

// const ProductList = () => {

//   const [products, setProducts] = useState([])

//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products`)
//     .then((res) => {
//       return res.json();
//     })
//     .then((products) => {
//       setProducts(products);
//     });
//   }, [])
//   return (
//     <>
//       <h2>Products:</h2>
//       {(products.data)?.map((post, i) => {
//         return (<><div>{post.attributes.Title}</div>{post.attributes.Description}<div></div></>
//         )
//       })}
//     </>
//   );
// };

// export default ProductList;
