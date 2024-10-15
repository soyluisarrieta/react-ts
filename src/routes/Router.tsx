import React from 'react'
import { Route, Switch, Redirect } from 'wouter'

export interface RouteConfig {
  path: string;
  component: React.ComponentType;
  children?: RouteConfig[];
}

export interface RouterProps {
  publics: RouteConfig[];
  privates: RouteConfig[];
  guest: RouteConfig[];
}

// Generador de rutas
export default function Router ({ publics, privates, guest }: RouterProps, isAuthed: boolean) {
  return (
    <Switch>
      {generateRoutes(publics, !isAuthed, '/')}
      {generateRoutes(privates, isAuthed, '/ingresar')}
      {generateRoutes(guest)}
      <Route component={NotFound} />
    </Switch>
  )
}

const generateRoutes = (routes: RouteConfig[], isAuthed?: null | boolean, redirectTo?: string) => {
  return routes.map(({ path, component: Component, children }: RouteConfig, index: number) => (
    <Route key={index} path={path} nest={!!children}>
      {isAuthed === null || isAuthed ? (
        children ? (
          <Switch>
            <Route path='/'><Component /></Route>
            {generateRoutes(children)}
            <Route component={NotFound} />
          </Switch>
        ) : (
          <Component />
        )
      ) : (
        <Redirect to={redirectTo as string} />
      )}
    </Route>
  ))
}

// Página 404
function NotFound () {
  return <div>404, Página no encontrada.</div>
}
