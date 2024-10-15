import { useAuthStore } from '@/store/AuthStore'
import { ComponentProps } from '@/types/others'
import { Redirect } from 'wouter'

export default function GuestLayout ({ children }: ComponentProps) {
  const { isAuthenticated } = useAuthStore()

  if (isAuthenticated === null) {
    return <h1>Comprobando...</h1>
  }

  if (isAuthenticated) {
    return <Redirect to='/' />
  }
  return (
    <div className='w-full min-h-screen bg-amber-100'>
      {children}
    </div>
  )
}
