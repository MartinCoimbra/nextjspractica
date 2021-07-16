import { useRouter } from 'next/router'
export default function User(){
    const router = useRouter()
    return(
      <div>
        <h1>Details USERS</h1>
        <p>User ID: {router.query.id} </p>
      </div>
    )
  }