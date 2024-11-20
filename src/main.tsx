import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MyContextProvider } from '../src/components/MyContextProvider .tsx';





createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyContextProvider>
    <App />
    </MyContextProvider>
  </StrictMode>,
)
