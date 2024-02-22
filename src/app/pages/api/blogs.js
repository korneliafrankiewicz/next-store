'use client'

import { useEffect, useState } from 'react';
import { loadPosts } from '../../../../lib/api';

const BlogList = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts`)
    .then((res) => {
      return res.json();
    })
    .then((posts) => {
      setPosts(posts);
    });
  }, [])
  return (
    <>
      <h2>Posts:</h2>
      {(posts.data)?.map((post, i) => {
        return (<><div>{post.attributes.Title}</div>{post.attributes.Description}<div></div></>
        )
      })}
    </>
  );
};

export default BlogList;

// // This function runs only on the server side
// export async function getStaticProps() {
//   // Instead of fetching your `/api` route you can call the same
//   // function directly in `getStaticProps`
//   const posts = await loadPosts(
//     `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts`
//   );
//   console.log(posts);
//   // Props returned will be passed to the page component
//   return {
//     props: {
//        posts
//     },
//   };
// }
