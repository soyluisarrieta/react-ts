import React from 'react'

export interface RouteConfig {
  path: string
  component: React.ComponentType
  children?: RouteConfig[]
}

export interface RoutesProps {
  layout: React.ComponentType<{ children: React.ReactNode }>
  routes: RouteConfig[]
}

export interface RouterProps {
  publics: RoutesProps[]
  privates: RoutesProps[]
  guest: RoutesProps[]
}