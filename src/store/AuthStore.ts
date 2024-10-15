import { create } from 'zustand'

interface IAuthVerified {
  isAuthenticated: null | boolean
  setIsAuthenticated: (isAuthenticated: boolean) => void
}

export const useAuthVerified = create<IAuthVerified>((set) => ({
  isAuthenticated: null,
  setIsAuthenticated: (isAuthenticated) => {
    set(() => ({ isAuthenticated: isAuthenticated }))
  }
}))
