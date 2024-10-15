import { useLocation, useParams } from 'wouter'

export default function UserForm () {
  const [location] = useLocation()
  const params = useParams()
  const userId = params.id
  return (
    <div>
      <h1>
        {location === '/crear' ? 'Crear nuevo' : 'Editar'} usuario
      </h1>
      <p>El id de usuario es el {userId}</p>
    </div>
  )
}
