import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Routes from './routes/Routes';
import { RouterProvider } from 'react-router';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Routes} />
      <Toaster />
    </QueryClientProvider>
  </StrictMode>,
)
