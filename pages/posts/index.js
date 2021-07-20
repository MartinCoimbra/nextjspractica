import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";
import Title from "../../components/title";

export default function Posts() {
  const [posts, setPosts] = React.useState([]);
  /* https://jsonplaceholder.typicode.com/posts */
  React.useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const newPost = await res.json();
      setPosts(newPost);
    };
    fetchPosts();
  }, []);

  return (
    <Layout>
      <Title> POSTEAR </Title>
      <div>
        {posts.map((post) => {
          return (
            <Link key={post} href={`/posts/[id]`} as={`/posts/${post.id}`}>
              <a>
                <h3> {post.title} </h3>
                <a> {post.body} </a>
              </a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}
