import { useRouter } from 'next/router'
export default function User(){
    const router = useRouter()
    return(
      <div>
        <h2>Details POST</h2>
        <p>POST ID: {router.query.post} </p>
      </div>
    )
  }