import PasswordRecovery from '@/components/Auth/PasswordRecovery'
import PublicLayout from '@/layouts/PublicLayout'

export default {
  layout: PublicLayout,
  routes: [
    { path: '/recuperar-clave', component: PasswordRecovery }
  ]
}