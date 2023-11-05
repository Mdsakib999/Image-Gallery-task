import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import Main from './Main/Main.jsx'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
  </NextUIProvider>
)
