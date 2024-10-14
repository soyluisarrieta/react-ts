import { useEffect } from 'react'
import { Route, Switch } from 'wouter'
import nProgress from 'nprogress'
import Home from '@/components/Pages/Home'
import Login from '@/components/Auth/Login'
import Signup from '@/components/Auth/Signup'
import PasswordRecovery from '@/components/Auth/PasswordRecovery'
import Account from '@/components/Profile/Account'

export default function App () {
  nProgress.start()

  useEffect(()=>{
    setTimeout(()=>{
      nProgress.done()
    },500)
  },[])
  
  return (
    <Switch>                                                                                                                             <Route path='/' component={Home} />
      <Route path='/' component={Account} />

      <Route path='/ingresar' component={Login} />
      <Route path='/registrarse' component={Signup} />
      
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
