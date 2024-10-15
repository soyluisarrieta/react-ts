import { RouteConfig, RoutesProps } from '@/types/router';
import { Route, Switch } from 'wouter';

const renderRoute = (route: RouteConfig, layout: RoutesProps['layout'], index: number) => {
  const { path, component: Component, children } = route;
  const Layout = layout
  return (
    <Route key={index} path={path} nest={!!children}>
      {children ? (
        <Switch>
          <Route path={path}>
            <Layout>
              <Component />
            </Layout>
          </Route>
          {children.map((childRoute, idx) => (
            <Route key={`${index}-${idx}`} path={`${path}${childRoute.path}`}>
              <Layout>
                <childRoute.component />
              </Layout>
            </Route>
          ))}
          <Route component={NotFound} />
        </Switch>
      ) : (
        <Layout>
          <Component />
        </Layout>
      )}
    </Route>
  );
};


export default function Router (routeSets: RoutesProps[]) {
  return (
    <>
      {routeSets.map((set) => set.routes.map((route, i) => renderRoute(route, set.layout, i)))}
    </>
  );
}

// Página 404
function NotFound() {
  return <div>404, Página no encontrada.</div>;
}
