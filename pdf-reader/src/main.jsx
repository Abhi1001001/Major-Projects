// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/App'
import PDFContextProvider from './Context/PDFContext'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <PDFContextProvider>
    <App/>
    </PDFContextProvider>
  // </StrictMode>,
)
