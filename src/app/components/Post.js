const Post = ({posts}) => {
    return (
      <>
        {posts && posts.data.map((post) => {
            return (
                <div key={posts.title}>{post.title}</div>
            )
            })}
      </>
    );
  };