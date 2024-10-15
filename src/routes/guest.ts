import Login from '@/components/Auth/Login'
import Signup from '@/components/Auth/Signup'
import GuestLayout from '@/layouts/GuestLayout'

export default {
  layout: GuestLayout,
  routes: [
    { path: '/ingresar', component: Login },
    { path: '/registrarse', component: Signup }
  ]
}
