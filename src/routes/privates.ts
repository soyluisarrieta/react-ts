import Home from '@/components/Pages/Home'
import Account from '@/components/Profile/Account'
import UserDetails from '@/components/Users/UserDetails'
import UserForm from '@/components/Users/UserForm'
import UsersList from '@/components/Users/UsersList'

export default [
  { path: '/', component: Home },
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
