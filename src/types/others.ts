import React from 'react'

export interface ComponentProps {
  children: React.ReactNode
  className?: string
}

export type Evt = React.FormEvent<HTMLFormElement>
