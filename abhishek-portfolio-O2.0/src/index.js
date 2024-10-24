import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import "../src/output.css"
import "../src/font.css"
import { NextUIProvider } from '@nextui-org/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NextUIProvider>
    <App />
    </NextUIProvider>
  </React.StrictMode>
);
