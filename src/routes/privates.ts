import Home from '@/components/Pages/Home'
import Settings from '@/components/Pages/Settings'
import Account from '@/components/Profile/Account'
import UserDetails from '@/components/Users/UserDetails'
import UserForm from '@/components/Users/UserForm'
import UsersList from '@/components/Users/UsersList'
import PrivateLayout from '@/layouts/PrivateLayout'

export default {
  layout: PrivateLayout,
  routes: [
    { path: '/', component: Home },
    { path: '/ajustes', component: Settings },
    { path: '/mi-cuenta', component: Account },
  
    {
      path: '/usuarios',
      component: UsersList,
      children: [
        { path: '/crear', component: UserForm },
        {
          path: '/:id',
          component: UserDetails,
          children: [
            { path: '/editar', component: UserForm }
          ]
        }
      ]
    }
  ]
}
