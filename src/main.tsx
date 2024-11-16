import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


//import App from './pages/home'
import Home from './pages/home/index'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Home/>

  </StrictMode>,
)
