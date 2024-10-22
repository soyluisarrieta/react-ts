import { create } from 'zustand'

interface IAuthStore {
  isAuthenticated: null | boolean
  setIsAuthenticated: (isAuthenticated: boolean) => void
}

export const useAuthStore = create<IAuthStore>((set) => ({
  isAuthenticated: true,
  setIsAuthenticated: (isAuthenticated) => {
    set(() => ({ isAuthenticated: isAuthenticated }))
  }
}))
