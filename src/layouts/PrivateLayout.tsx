import { useAuthStore } from '@/store/AuthStore'
import { ComponentProps } from '@/types/others'
import { Redirect } from 'wouter'

export default function PrivateLayout ({ children }: ComponentProps) {
  const { isAuthenticated } = useAuthStore()

  if (isAuthenticated === null) {
    return <h1>Comprobando...</h1>
  }

  if (!isAuthenticated) {
    return <Redirect to='/ingresar' />
  }

  return (
    <div className='w-full min-h-screen bg-indigo-100'>
      {children}
    </div>
  )
}
