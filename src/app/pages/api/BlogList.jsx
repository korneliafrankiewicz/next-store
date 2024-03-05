import { useEffect, useState } from 'react';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts`)
      .then((res) => {
        return res.json();
      })
      .then((posts) => {
        setPosts(posts);
      });
  }, []);
  return (
    <>
      <h2>Nasze realizacje</h2>
      {posts.data?.map((post, i) => {
        return (
          <>
            <div>{post.attributes.Title}</div>
            {post.attributes.Description}
            <div></div>
          </>
        );
      })}
    </>
  );
};

export default BlogList;
