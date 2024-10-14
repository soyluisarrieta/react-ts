import PasswordRecovery from '@/components/Auth/PasswordRecovery'
import Home from '@/components/Pages/Home'
import Account from '@/components/Profile/Account'
import { Route, Switch } from 'wouter'
import nProgress from 'nprogress'
import { useEffect } from 'react'

export default function App () {
  nProgress.start()

  useEffect(()=>{
    setTimeout(()=>{
      nProgress.done()
    },1300)
  },[])
  
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
