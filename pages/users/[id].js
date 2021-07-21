import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import Title from "../../components/title";

export default function User(){
    const router = useRouter()
    return(
      <Layout> 
        <Title>Details USERS</Title>
        <p>User ID: {router.query.id} </p>
      </Layout>
    )
  }

export async function getStaticProps({ params }){
  /* context.params */
  /* context.params.id */
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = res.json() 
  return{
    props: {
      user
    }
  }
}