import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './app.css'
import App from './Components/App';
import UserContextProvider from './Context/UserContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
    <App />
    </UserContextProvider>
  </StrictMode>,
)
