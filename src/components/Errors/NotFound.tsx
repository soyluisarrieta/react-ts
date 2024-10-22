import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="h-screen grid place-content-center text-center p-5 bg-gradient-to-tr from-black to-gray-800 text-background">
      <h1 className="text-7xl font-bold mb-2">404</h1>
      <h2 className="text-2xl font-medium mb-4">¡Oops! Página no encontrada</h2>
      <p className="max-w-3xl text-lg mb-4">
        La página que estás buscando no existe o ha sido movida. No te preocupes, puedes 
        <Button href="/" variant='link' className="ml-1 text-lg underline">regresar al inicio</Button> y continuar navegando.
      </p>
    </div>
  );
}
