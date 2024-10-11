import { Button } from '@/components/ui/button'
import { RocketIcon } from 'lucide-react'

export default function App () {
  return (
    <div className='w-full h-screen bg-indigo-900 grid place-content-center gap-5'>
      <h1 className='text-indigo-300 text-5xl font-semibold'>Hi TailwindCSS</h1>
      <Button size='lg' variant='secondary'>
        <RocketIcon className='mr-2' size={20} /> Shadcn Button
      </Button>
    </div>
  )
}
