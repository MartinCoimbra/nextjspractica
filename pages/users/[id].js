import { useRouter } from 'next/router'
import Navbar from '../../components/navbar'
import Title from "../../components/title";

export default function User(){
    const router = useRouter()
    return(
      <div>
        <Navbar />
        <Title>Details USERS</Title>
        <p>User ID: {router.query.id} </p>
      </div>
    )
  }