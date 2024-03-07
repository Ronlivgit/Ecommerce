import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserProvider from './context/UserProvider.jsx'
import CartProvider from './context/CartProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <UserProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </UserProvider>  
    // </React.StrictMode>
)
