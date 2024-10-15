import { useParams } from 'wouter'

export default function UserDetails () {
  const params = useParams()
  const userId = params.id
  return (
    <div>
      <h1>Detalles del usuario {userId}</h1>
    </div>
  )
}
