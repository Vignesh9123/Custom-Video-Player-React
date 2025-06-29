import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MediaProvider } from 'media-chrome/dist/react/media-store.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <MediaProvider>

    <App />
     </MediaProvider>
  </StrictMode>,
)
