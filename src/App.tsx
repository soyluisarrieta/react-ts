import guest from '@/routes/guest'
import privates from '@/routes/privates'
import publics from '@/routes/publics'
import Router from '@/routes/Router'
import nProgress from 'nprogress'
import { useEffect } from 'react'
import { Route, Switch } from 'wouter'

export default function App () {
  const isAuthed = false
  
  useEffect(() => {
    nProgress.start()
    const timer = setTimeout(() => nProgress.done(), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Switch>
      {Router({publics, privates, guest}, isAuthed)}

      {/* Ruta 404 - Página no encontrada */}
      <Route>404 - No encontrada</Route>
    </Switch>
  )
}
