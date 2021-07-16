import { useRouter } from 'next/router'
import Navbar from '../../components/navbar'
export default function User(){
    const router = useRouter()
    return(
      <div>
        <Navbar />
        <h2>Details POST</h2>
        <p>POST ID: {router.query.id} </p>
      </div>
    )
  }