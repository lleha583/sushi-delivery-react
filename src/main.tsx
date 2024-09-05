import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './route/route.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
