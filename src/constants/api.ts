export const API_URL = import.meta.env.MODE === 'production'
  ? import.meta.env.VITE_BACKEND_URL_PROD
  : import.meta.env.VITE_BACKEND_URL_LOCAL

export const ENDPOINTS = {
  IMAGES: {
    AVATARS: `${API_URL}/avatar`
  }
}
