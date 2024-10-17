import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '@/components/ui/input'
import Icon from '@/components/Icons'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { type SignupForm } from '@/types/auth'
import { registerSchema } from '@/lib/yup/userSchemas'

export default function Signup () {
  const form = useForm<SignupForm>({
    resolver: yupResolver(registerSchema),
    reValidateMode: 'onSubmit',
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  })

  const { control, handleSubmit, clearErrors } = form

  const onSubmit = (data: SignupForm) => {
    console.log('Form submitted', data)
  }

  const handleChange = (name: keyof SignupForm) => () => {
    clearErrors(name)
  }

  return (
    <div className="max-w-md w-full min-h-screen mx-auto p-4 md:p-8 bg-background grid place-content-center">
      <h1 className="font-bold text-3xl text-foreground">
        Formulario de registro
      </h1>
      <p className="text-foreground/80 text-sm max-w-sm mt-3">
        Una vez te regístres en la plataforma y debes esperar a que un administrador te asigne un rol de acceso.
      </p>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="my-7">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className='flex flex-col space-y-2 w-full'>
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombres</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Sebastián"
                        {...field}
                        onChange={(event) => {
                          field.onChange(event)
                          handleChange('name')()
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='flex flex-col space-y-2 w-full'>
              <FormField
                control={control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellidos</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Aristala"
                        {...field}
                        onChange={(event) => {
                          field.onChange(event)
                          handleChange('lastName')()
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className='flex flex-col space-y-2 w-full mb-4'>
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
          </div>
          <div className='flex flex-col space-y-2 w-full mb-4'>
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex flex-col space-y-2 w-full mb-8'>
            <FormField
              control={control}
              name="passwordConfirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirma la contraseña</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="••••••••"
                      type='password'
                      {...field}
                      onChange={(event) => {
                        field.onChange(event)
                        handleChange('passwordConfirmation')()
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button className='w-full p-5' type='submit'>
            Registrarse
          </Button>

          <p className='text-center text-sm mt-3'>
            ¿Ya tienes una cuenta? <Button href='/ingresar' variant='link'>Inicia sesión</Button>
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
