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
import AuthProvider from './providers/AuthProvider';
import FeatureProvider from './providers/FeatureProvider';
import { ThemeProvider } from './components/theme-provider';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <FeatureProvider>
          <RouterProvider router={Routes} />
          <Toaster />
        </FeatureProvider>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
