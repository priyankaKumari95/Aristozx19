import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Optional: Bootstrap JS for components like modals, dropdowns, tooltips
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// custom css 
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
