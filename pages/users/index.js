import Title from "../../components/title";
import Layout from "../../components/layout";
import Link from "next/link";

export default function Users({ users }) {
  return (
    <Layout>
      <Title>Hello USERS</Title>
      <div className="grid">
        {users.map((user) => {
          return (
            <Link href={"/users/[id]"} as={`/users/${user.id}`} key={user.id}>
              <a className="card">
                <h3>User</h3>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
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
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}
