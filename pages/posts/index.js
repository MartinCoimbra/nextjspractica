import React from "react";
import Layout from "../../components/layout";
import Title from "../../components/title";

export default function Posts(){
  const [posts, setPosts] = React.useState([])
  /* https://jsonplaceholder.typicode.com/posts */
  React.useEffect(()=>{
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const newPost = await res.json();
      console.log('newPost :', newPost);
    }
    fetchPosts();
  },[])
  
    return(
      <Layout>
        <Title> POSTEAR </Title>
        <p>POSTPOSTPOSTPOSTPOSTPOST</p>
      </Layout>
    )
  }