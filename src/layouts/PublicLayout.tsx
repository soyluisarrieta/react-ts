import { ComponentProps } from '@/types/others'

export default function PublicLayout ({children}: ComponentProps) {
  return (
    <div className='w-full min-h-screen bg-emerald-100'>
      {children}
    </div>
  )
}
