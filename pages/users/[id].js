import { useRouter } from 'next/router'
import Navbar from '../../components/navbar'
export default function User(){
    const router = useRouter()
    return(
      <div>
        <Navbar />
        <h1>Details USERS</h1>
        <p>User ID: {router.query.id} </p>
      </div>
    )
  }