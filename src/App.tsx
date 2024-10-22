import NotFound from '@/components/Errors/NotFound'
import guest from '@/routes/guest'
import privates from '@/routes/privates'
import publics from '@/routes/publics'
import Router from '@/routes/Router'
import nProgress from 'nprogress'
import { useEffect } from 'react'
import { Route, Switch } from 'wouter'

export default function App () {
  useEffect(() => {
    nProgress.start()
    const timer = setTimeout(() => nProgress.done(), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Switch>
      {Router([privates, publics, guest])}

      {/* Ruta 404 - Página no encontrada */}
      <Route component={NotFound} />
    </Switch>
  )
}
