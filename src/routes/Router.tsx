import React from 'react'
import { Route, Switch } from 'wouter'

export interface RouteConfig {
  path: string;
  component: React.ComponentType;
  children?: RouteConfig[];
}

export interface RouterProps {
  routes: RouteConfig[];
}

// Generador de rutas
export default function Router (routes: RouteConfig[]) {
  return routes.map(({ path, component: Component, children }: RouteConfig, index: number) => (
    <Route key={index} path={path} nest={!!children}>
      {children ? (
        <Switch>
          <Route path='/'><Component /></Route>
          {Router(children)}
          <Route component={NotFound} />
        </Switch>
      ) : (
        <Component />
      )}
    </Route>
  ))
}

// Página 404
function NotFound () {
  return <div>404, Página no encontrada.</div>
}
