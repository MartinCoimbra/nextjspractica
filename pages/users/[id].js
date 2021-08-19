import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Title from "../../components/title";

export default function User({ user }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Cargando...</div>;
  }

  return (
    <Layout>
      <Title>Details USERS id: {user.id}</Title>
      <div className="card">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
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

/* Pre renderizado 1,2 "Tener paginas listas" */
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const users = await res.json();
  
  /* En lugar de pre definir algunos paths */
  /* const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];*/
  const paths = users.map((user)=>{
    return {
      params: { id: `${user.id}`}
    }
  })
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  /* context.params */
  /* context.params.id */
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
