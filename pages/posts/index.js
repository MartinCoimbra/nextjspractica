import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";
import Title from "../../components/title";

export default function Posts({ posts }) {
 /*  const [posts, setPosts] = React.useState([]); */
  /* https://jsonplaceholder.typicode.com/posts */
  /* React.useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const newPost = await res.json();
      setPosts(newPost);
    };
    fetchPosts();
  }, []); */

  return (
    <Layout>
      <Title> POSTS </Title>
      <div className="grid">
        {posts.map((post) => {
          return (
            <Link key={post.id} href={`/posts/[id]`} as={`/posts/${post.id}`}>
              <a className="card">
                <h3> { post.id + " - " + post.title} </h3>
                <a> {post.body} </a>
              </a>
            </Link>
          );
        })}
      </div>
      <style jsx>
        {`
          .grid {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 100%;
            margin-top: 2rem;
          }
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            color: black;
            text-decoration: none;
            border: 2px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }
          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        `}
      </style>
    </Layout>
  );
}

/* esto se ejecuta del lado del server */
export async function getServerSideProps(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json();
  return{
    props: {
      posts
    }
  }
}