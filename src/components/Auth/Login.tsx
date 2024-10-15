import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '@/components/ui/input'
import Icon from '@/components/Icons'
import { Button } from '@/components/ui/button'
import { loginSchema } from '@/lib/yup/userSchemas'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { type Credentials } from '@/types/auth'

export default function Login () {
  const form = useForm<Credentials>({
    resolver: yupResolver(loginSchema),
    reValidateMode: 'onSubmit',
    defaultValues: {
      email: '',
      password: ''
    }
  })
  
  const { control, handleSubmit, clearErrors } = form

  const onSubmit = (data: Credentials) => {
    console.log('Form submitted', data)
  }

  const handleChange = (name: keyof Credentials) => () => {
    clearErrors(name)
  }

  return (
    <div className="max-w-md w-full min-h-screen mx-auto p-4 md:p-8 bg-background grid place-content-center">
      <h1 className="font-semibold text-3xl text-foreground">
        Inicio de sesión
      </h1>
      <p className="text-foreground/80 text-sm max-w-sm mt-3">
        Ingresa a tu cuenta usando tu correo electrónico y contraseña.
      </p>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="my-7">
          <div className='space-y-3'>
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo electrónico</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="ejemplo@gmail.com"
                      {...field} 
                      onChange={(event) => {
                        field.onChange(event)
                        handleChange('email')()
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="••••••••" 
                      type='password'
                      {...field} 
                      onChange={(event) => {
                        field.onChange(event)
                        handleChange('password')()
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    <Button variant='link' href='~/recuperar-clave' className='h-fit text-xs p-0 float-end text-foreground/70'>
                    Olvidé mi contraseña
                    </Button>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button className='w-full p-5 mt-4' type='submit'>
            Iniciar sesión
          </Button>

          <p className='text-center text-sm mt-3'>
            ¿No tienes cuenta? <Button href='/registrarse' variant='link'>Regístrate</Button>
          </p>

          <div className=" w-full h-px bg-gradient-to-r from-transparent via-foreground/40 to-transparent my-8" />

          <div className="flex flex-col space-y-2 [&>button]:justify-start [&>button]:py-6">
            <Button variant='outline'>
              <Icon set="Brands" name='github' className='mr-2' size={20} /> Github
            </Button>
            <Button variant='outline' className='justify-start'>
              <Icon set="Brands" name='google' className='mr-2' size={20} /> Google
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
