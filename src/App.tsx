import PasswordRecovery from '@/components/Auth/PasswordRecovery'
import Home from '@/components/Pages/Home'
import Account from '@/components/Profile/Account'
import { Route, Switch } from 'wouter'

export default function App () {
  return (
    <Switch>                                                                                                                             <Route path='/' component={Home} />
      <Route path='/' component={Account} />
      
      <Route path='/mi-cuenta' nest>
        <Switch>
          <Route path='/' component={Account} />
          <Route path='/cambiar-clave' component={PasswordRecovery} />
          <Route>404, Parece que estás perdido.</Route>
        </Switch>
      </Route>
      
      <Route>404, Página no encontrada.</Route>
    </Switch>
  )
}
