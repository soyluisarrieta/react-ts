import { API_URL, HTTP_STATUS } from '@/constants'
import Axios, { type AxiosError } from 'axios'

export interface ErrorProps {
  status?: number;
  original: AxiosError;
  validation: Record<string, string>;
  message?: string;
}

interface ResponseData {
  errors?: Record<string, string[]>;
  message?: string;
}

// Instancia de Axios
const axios = Axios.create({
  baseURL: API_URL,
  headers: { Accept: 'application/json' },
  timeout: 60000, // 60s
  withCredentials: true,
  withXSRFToken: true
})

const parseAxiosError = (err: AxiosError): ErrorProps => {
  const error: ErrorProps = {
    status: err.response?.status,
    original: err,
    validation: {},
    message: undefined
  }

  const responseData = err.response?.data as ResponseData | null
  
  // Manejo de errores basado en el código de estado HTTP
  switch (error.status) {
  case HTTP_STATUS.UNPROCESSABLE_ENTITY:
    if (responseData?.errors) {
      for (const field in responseData.errors) {
        error.validation[field] = responseData.errors[field][0]
      }
    }
    error.message = responseData?.message ?? undefined
    break
  case HTTP_STATUS.FORBIDDEN:
    error.message = 'No tienes permitido hacer eso.'
    break
  case HTTP_STATUS.UNAUTHORIZED:
    error.message = 'Por favor vuelve a iniciar sesión.'
    break
  case HTTP_STATUS.INTERNAL_SERVER_ERROR:
    error.message = 'Algo salió muy mal. Lo siento.'
    break
  default:
    error.message = 'Algo salió mal. Por favor, inténtelo de nuevo más tarde.'
  }

  return error
}

// Interceptor de respuestas de Axios
axios.interceptors.response.use(null, async (err: AxiosError) => {
  const errors = parseAxiosError(err)
  return await Promise.reject(errors)
})

export default axios
