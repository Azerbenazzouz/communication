import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Presentation from './sci_writing_presentation.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Presentation />
  </StrictMode>,
)
