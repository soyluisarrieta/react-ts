import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import App from './App.tsx'
import moment from 'moment'
import 'moment/dist/locale/es'

import './index.css'
import './lib/nProgress.css'

moment.locale('es')

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
)
