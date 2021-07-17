import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import Title from "../../components/title";

export default function User(){
    const router = useRouter()
    return(
      <Layout>
        <Title>Details POST</Title>
        <p>POST ID: {router.query.id} </p>
      </Layout>
    )
  }