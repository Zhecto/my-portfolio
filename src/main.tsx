/**
 * @copyright 2026 Zhecto
 * @license Apache-2.0
 */

/** 
 * Node modules
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * Assets
 */
import './index.css'

/**
 * Components
 */
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
