import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Routes from './routes/Routes';
import { RouterProvider } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routes} />
  </StrictMode>,
)
