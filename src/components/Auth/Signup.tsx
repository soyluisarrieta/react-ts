import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import Icon from '@/components/Icons'
import { Button } from '@/components/ui/button'
import { type Evt } from '@/types/others'

export default function Signup () {
  const handleSubmit = (e: Evt) => {
    e.preventDefault()
    console.log('Form submitted')
  }
  return (
    <div className="max-w-md w-full min-h-screen mx-auto p-4 md:p-8 bg-background grid place-content-center">
      <h1 className="font-bold text-3xl text-foreground">
        Formulario de registro
      </h1>
      <p className="text-foreground/80 text-sm max-w-sm mt-3">
        Una vez te regístres en la plataforma y debes esperar a que un administrador te asigne un rol de acceso.
      </p>

      <form className="my-7" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className='flex flex-col space-y-2 w-full'>
            <Label htmlFor="name">Nombres</Label>
            <Input id="name" placeholder="Sebastián" type="text" />
          </div>
          <div className='flex flex-col space-y-2 w-full'>
            <Label htmlFor="lastName">Apellidos</Label>
            <Input id="lastName" placeholder="Aristala" type="text" />
          </div>
        </div>
        <div className='flex flex-col space-y-2 w-full mb-4'>
          <Label htmlFor="email">Correo electrónico</Label>
          <Input id="email" placeholder="ejemplo@gmail.com" type="email" />
        </div>
        <div className='flex flex-col space-y-2 w-full mb-4'>
          <Label htmlFor="password">Contraseña</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </div>
        <div className='flex flex-col space-y-2 w-full mb-8'>
          <Label htmlFor="passwordConfirm">Confirma la contraseña</Label>
          <Input
            id="passwordConfirm"
            placeholder="••••••••"
            type="passwordConfirm"
          />
        </div>

        <Button className='w-full p-5' type='submit'>
          Registrarse
        </Button>

        <p className='text-center text-sm mt-3'>
          ¿Ya tienes una cuenta? <Button href='/ingresar' variant='link'>Inicia sesión</Button>
        </p>

        <div className="bg-gradient-to-r from-transparent via-foreground/40 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-2 [&>button]:justify-start [&>button]:py-6">
          <Button variant='outline'>
            <Icon set="Brands" name='github' className='mr-2' size={20} /> Github
          </Button>

          <Button variant='outline' className='justify-start'>
            <Icon set="Brands" name='google' className='mr-2' size={20} /> Google
          </Button>
        </div>
      </form>
    </div>
  )
}
